<?php
// Self-check for irclog.php: php scripts/irclog-test.php

declare(strict_types=1);

require __DIR__ . '/../irclog.php';

function check( string $label, bool $ok ): void {
  echo ( $ok ? 'ok   ' : 'FAIL ' ) . $label . "\n";
  if ( ! $ok ) {
    exit( 1 );
  }
}

$html = format_text( '<img src=x onerror=alert(1)> "\'' );
check( 'escapes markup', ! str_contains( $html, '<img' ) && str_contains( $html, '&lt;img' ) );

$html = format_text( 'javascript://%0Aalert(1) data:text/html,x' );
check( 'no non-http links', ! str_contains( $html, '<a' ) );

$html = format_text( 'see http://x@example.com/a?b=1&c=2, ok' );
check( 'links http with one anchor', substr_count( $html, '<a ' ) === 1 && str_contains( $html, 'href="http://x@example.com/a?b=1&amp;c=2"' ) );
check( 'link drops trailing comma', str_contains( $html, '</a>, ok' ) );
check( 'link has rel noopener', str_contains( $html, 'rel="noopener noreferrer nofollow"' ) );

$html = format_text( "\x02bold \x034red\x02 plain\x0f end \x0399,1x\x03" );
check( 'balanced spans', substr_count( $html, '<span' ) === substr_count( $html, '</span>' ) );
check( 'bold red run', str_contains( $html, '<span class="irc-b irc-fg4">red</span>' ) );
check( 'out of range color ignored', str_contains( $html, '<span class="irc-bg1">x</span>' ) );

check( 'drops stray control chars', format_text( "a\x01b\x07c" ) === 'abc' );
check( 'converts latin1', format_text( "\xe4" ) === 'ä' );

$line = parse_line( '12:00 -!- someone [~ident@10.0.0.1] has joined #pulina' );
check( 'join hides hostmask', $line !== null && ! str_contains( json_encode( $line ), '10.0.0.1' ) );

$line = parse_line( '12:00 -!- mode/#pulina [+b *!*@10.0.0.1] by op' );
check( 'mode hides ban mask', $line !== null && $line[3] === 'sets mode +b' );

$line = parse_line( '12:00 -!- victim was kicked from #pulina by op [bye]' );
check( 'kick is by op', $line !== null && $line[2] === 'op' && str_contains( $line[3], 'kicked <span class="irc-nick">' ) );

check( 'privmsg', parse_line( '12:00 <@foo> hello' ) === [ '12:00', 'PRIVMSG', 'foo', 'hello' ] );
check( 'privmsg without mode', parse_line( '12:00 < foo> hi' )[2] === 'foo' );
check( 'action', parse_line( '12:00  * foo waves' )[1] === 'ACTION' );
check( 'skips irssi lines', parse_line( '--- Day changed Sun Oct 25 2026' ) === null );
check( 'stable pseudonym', pseudonym( 'foo' ) === pseudonym( 'foo' ) && pseudonym( 'foo' ) !== '' );
