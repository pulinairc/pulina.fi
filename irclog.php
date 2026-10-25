<?php
/**
 * Builds irclog.json for the static irclog.html scroller from today's irssi log.
 * CLI only, run by the irclog-json watcher. Usage: php irclog.php [output.json]
 */

declare(strict_types=1);

if ( PHP_SAPI !== 'cli' ) {
  http_response_code( 404 );
  exit;
}

const TAIL_BYTES = 6000;
const LOG_DIR = __DIR__ . '/pulina-days';
const NAMES_FILE = __DIR__ . '/scroller_data/nimilista.txt';
const MAX_COLOR = 15;

// mIRC formatting control codes
const CODE_BOLD = "\x02";
const CODE_COLOR = "\x03";
const CODE_RESET = "\x0f";
const CODE_REVERSE = "\x16";
const CODE_ITALIC = "\x1d";
const CODE_STRIKE = "\x1e";
const CODE_UNDERLINE = "\x1f";

const FORMAT_SPLIT = '/(\x03(?:\d{1,2}(?:,\d{1,2})?)?|[\x02\x0f\x11\x16\x1d\x1e\x1f])/';
const URL_SPLIT = '~(https?://[^\s<>"\']*[^\s<>"\'.,;:!?)\]}])~i';
const NICK_PREFIX = ' @%+~&';

/**
 * Real nicks are swapped for a stable first name so the public log stays pseudonymous.
 */
function pseudonym( string $nick ): string {
  static $names = null;
  $names ??= file( NAMES_FILE, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES );

  // Same hash as the original scroller so everyone keeps their old name
  return $names[ (int) substr( (string) crc32( md5( $nick ) ), 0, 5 ) % count( $names ) ];
}

function escape( string $text ): string {
  return htmlspecialchars( $text, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8' );
}

function nick_html( string $nick ): string {
  return '<span class="nick">' . escape( pseudonym( $nick ) ) . '</span>';
}

/**
 * Escapes text and links http(s) URLs. Other schemes stay plain text.
 */
function linkify( string $text ): string {
  $parts = preg_split( URL_SPLIT, $text, -1, PREG_SPLIT_DELIM_CAPTURE );
  $html = '';

  foreach ( $parts as $i => $part ) {
    $safe = escape( $part );
    $html .= $i % 2 ? '<a href="' . $safe . '" target="_blank" rel="noopener noreferrer nofollow">' . $safe . '</a>' : $safe;
  }

  return $html;
}

function apply_code( string $code, array &$state ): void {
  switch ( $code[0] ) {
    case CODE_BOLD:
      $state['b'] = ! $state['b'];
      return;
    case CODE_ITALIC:
      $state['i'] = ! $state['i'];
      return;
    case CODE_UNDERLINE:
      $state['u'] = ! $state['u'];
      return;
    case CODE_STRIKE:
      $state['s'] = ! $state['s'];
      return;
    case CODE_REVERSE:
      $state['r'] = ! $state['r'];
      return;
    case CODE_RESET:
      $state = new_state();
      return;
    case CODE_COLOR:
      if ( strlen( $code ) === 1 ) {
        $state['fg'] = null;
        $state['bg'] = null;
        return;
      }

      $colors = explode( ',', substr( $code, 1 ) );
      $state['fg'] = (int) $colors[0] <= MAX_COLOR ? (int) $colors[0] : null;
      if ( isset( $colors[1] ) ) {
        $state['bg'] = (int) $colors[1] <= MAX_COLOR ? (int) $colors[1] : null;
      }
  }
}

function new_state(): array {
  return [ 'b' => false, 'i' => false, 'u' => false, 's' => false, 'r' => false, 'fg' => null, 'bg' => null ];
}

function wrap( string $html, array $state ): string {
  if ( $html === '' ) {
    return '';
  }

  $classes = [];
  foreach ( [ 'b', 'i', 'u', 's', 'r' ] as $flag ) {
    if ( $state[ $flag ] ) {
      $classes[] = $flag;
    }
  }

  if ( $state['fg'] !== null ) {
    $classes[] = 'fg' . $state['fg'];
  }

  if ( $state['bg'] !== null ) {
    $classes[] = 'bg' . $state['bg'];
  }

  return $classes ? '<span class="' . implode( ' ', $classes ) . '">' . $html . '</span>' : $html;
}

/**
 * Turns an IRC message with mIRC formatting into safe HTML. Every run gets its own
 * span, so the markup is always balanced.
 */
function format_text( string $text ): string {
  if ( ! mb_check_encoding( $text, 'UTF-8' ) ) {
    $text = mb_convert_encoding( $text, 'UTF-8', 'Windows-1252' );
  }

  $parts = preg_split( FORMAT_SPLIT, $text, -1, PREG_SPLIT_DELIM_CAPTURE );
  $state = new_state();
  $html = '';

  foreach ( $parts as $i => $part ) {
    if ( $i % 2 ) {
      apply_code( $part, $state );
      continue;
    }

    $part = preg_replace( '/[\x00-\x1f\x7f]/', '', $part );
    $html .= wrap( linkify( $part ), $state );
  }

  return $html;
}

/**
 * Parses one irssi log line. Returns null for lines the scroller does not show.
 * Hostmasks and ban masks are never passed on.
 */
function parse_line( string $line ): ?array {
  if ( ! preg_match( '/^(\d\d:\d\d) (.*)$/', $line, $match ) ) {
    return null;
  }

  [ , $time, $rest ] = $match;

  if ( preg_match( '/^<(.)([^>]+)> (.*)$/', $rest, $m ) && str_contains( NICK_PREFIX, $m[1] ) ) {
    return [ $time, 'PRIVMSG', $m[2], format_text( $m[3] ) ];
  }

  if ( preg_match( '/^ \* (\S+) (.*)$/', $rest, $m ) ) {
    return [ $time, 'ACTION', $m[1], format_text( $m[2] ) ];
  }

  if ( ! str_starts_with( $rest, '-!- ' ) ) {
    return null;
  }

  $event = substr( $rest, 4 );

  if ( preg_match( '/^(\S+) \[[^\]]*\] has joined /', $event, $m ) ) {
    return [ $time, 'JOIN', $m[1], 'has joined' ];
  }

  if ( preg_match( '/^(\S+) \[[^\]]*\] has left \S+ \[(.*)\]$/', $event, $m ) ) {
    return [ $time, 'PART', $m[1], 'has left' . ( $m[2] === '' ? '' : ' [' . format_text( $m[2] ) . ']' ) ];
  }

  if ( preg_match( '/^(\S+) \[[^\]]*\] has quit \[(.*)\]$/', $event, $m ) ) {
    return [ $time, 'QUIT', $m[1], 'has quit [' . format_text( $m[2] ) . ']' ];
  }

  if ( preg_match( '/^(\S+) is now known as (\S+)$/', $event, $m ) ) {
    return [ $time, 'NICK', $m[1], 'is now known as ' . nick_html( $m[2] ) ];
  }

  if ( preg_match( '/^(\S+) was kicked from \S+ by (\S+) \[(.*)\]$/', $event, $m ) ) {
    return [ $time, 'KICK', $m[2], 'kicked ' . nick_html( $m[1] ) . ' [' . format_text( $m[3] ) . ']' ];
  }

  if ( preg_match( '/^(\S+) changed the topic of \S+ to: (.*)$/', $event, $m ) ) {
    return [ $time, 'TOPIC', $m[1], 'changed the topic to: ' . format_text( $m[2] ) ];
  }

  if ( preg_match( '/^mode\/\S+ \[([+-][a-zA-Z+-]+)[^\]]*\] by (\S+)$/', $event, $m ) ) {
    return [ $time, 'MODE', $m[2], 'sets mode ' . escape( $m[1] ) ];
  }

  return null;
}

/**
 * Reads the end of a log file. Each line carries its byte offset so the client can
 * tell which lines it already shows.
 */
function read_lines( string $logfile ): array {
  if ( ! is_readable( $logfile ) ) {
    return [];
  }

  $size = filesize( $logfile );
  $start = max( 0, $size - TAIL_BYTES );
  $chunk = file_get_contents( $logfile, false, null, $start );

  // Skip the partial first line when starting mid-file
  $offset = $start;
  if ( $start > 0 ) {
    $cut = strpos( $chunk, "\n" );
    $chunk = $cut === false ? '' : substr( $chunk, $cut + 1 );
    $offset += $cut === false ? 0 : $cut + 1;
  }

  $lines = [];
  foreach ( explode( "\n", $chunk ) as $raw ) {
    $parsed = parse_line( rtrim( $raw, "\r" ) );
    if ( $parsed !== null ) {
      [ $time, $action, $nick, $html ] = $parsed;
      $lines[] = [ 'o' => $offset, 't' => $time, 'a' => $action, 'n' => pseudonym( $nick ), 'm' => $html ];
    }
    $offset += strlen( $raw ) + 1;
  }

  return $lines;
}

function build( string $outfile ): void {
  date_default_timezone_set( 'Europe/Helsinki' );
  $day = date( 'Y-m-d' );
  $json = json_encode(
    [ 'day' => $day, 'lines' => read_lines( LOG_DIR . "/pul-{$day}.log" ) ],
    JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR
  );

  $tmpfile = $outfile . '.tmp';
  file_put_contents( $tmpfile, $json );
  rename( $tmpfile, $outfile );
}

if ( realpath( $argv[0] ) === __FILE__ ) {
  build( $argv[1] ?? __DIR__ . '/irclog.json' );
}
