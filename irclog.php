<?php
// phpcs:disable
// Builds irclog.json for the static irclog.html scroller. CLI only, run by the irclog-json watcher.
if ( PHP_SAPI !== 'cli' ) {
    http_response_code( 404 );
    exit;
}

// array of first names
define('NAMES', explode("\n", file_get_contents(__DIR__.'/scroller_data/nimilista.txt')));
// name count minus one to ignore empty name at the end of the name list
define('NAME_COUNT', count(NAMES) - 1);

// How many bytes are read from the end of the logfile
define('TAIL_BYTES', 6000);

ini_set( 'date.timezone', 'Europe/Helsinki' );

$logfile = __DIR__.'/pulina-days/pul-'.date('Y-m-d').'.log';
$outfile = $argv[1] ?? __DIR__.'/irclog.json';

// Code from http://www.phpcs.com/codes/COLORISATION-HTML-DES-LOGS-IRC/30393.aspx
function rgb2html($tablo) {
    //Le str_pad permet de remplir avec des 0
    //parce que sinon rgb2html(Array(0,255,255)) retournerai #0ffff<=manque un 0 !
    return "#".str_pad(dechex(($tablo[0]<<16)|($tablo[1]<<8)|$tablo[2]),6,"0",STR_PAD_LEFT);
}

function chooseColor($irc){
    switch($irc){
        case "0":$color=rgb2html(array(255, 255, 255));break;
        case "1":$color=rgb2html(array(0, 0, 0));break;
        case "2":$color=rgb2html(array(0, 0, 127));break;
        case "3":$color=rgb2html(array(94, 199, 62));break;
        case "4":$color=rgb2html(array(255, 0, 0));break;
        case "5":$color=rgb2html(array(127, 0, 0));break;
        case "6":$color=rgb2html(array(127, 0, 127));break;
        case "7":$color=rgb2html(array(255, 127, 0));break;
        case "8":$color=rgb2html(array(255, 255, 0));break;
        case "9":$color=rgb2html(array(0, 255, 0));break;
        case "10":$color=rgb2html(array(63, 127, 127));break;
        case "11":$color=rgb2html(array(0, 255, 255));break;
        case "12":$color=rgb2html(array(0, 0, 255));break;
        case "13":$color=rgb2html(array(255, 0, 255));break;
        case "14":$color=rgb2html(array(127, 127, 127));break;
        case "15":$color=rgb2html(array(191, 191, 191));break;
        default:$color=rgb2html(array(0, 0, 0));break;
    }
    return $color;
}

function irc2html($texte){

    $buffer = "";

    $is_bold=false;
    $is_under=false;
    $is_fg=false;
    $is_bg=false;
    $is_space=false;

    $fg=1;
    $bg=0;
    for($i=0;$i<strlen($texte);$i++){
        $chr = substr($texte,$i,1);
        $ord = ord($chr);

        switch($ord){
            case "10":
                if($is_bold) {$buffer.= "</b>";$is_bold=false;}
                if($is_under) {$buffer.= "</u>";$is_under=false;}
                if($is_fg) {$buffer.= "</span>";$is_fg=false;}
                if($is_bg) {$buffer.= "</span>";$is_bg=false;}
                $is_space=false;
                break;

            case "2":
                //->Mettre en gras
                if($is_bold) {$buffer.= "</b>";$is_bold=false;}
                else {$buffer.= "<b>";$is_bold=true;}

                break;

            case "3":
                //->Mettre en couleur
                $fg1="";$fg2="";$bg1="";$bg2="";
                $i++;$chr = substr($texte,$i,1);
                if(preg_match('/[0-9]/', $chr)){
                    $fg1=$chr;$i++;
                    $chr=substr($texte,$i,1);
                    if(preg_match('/[0-9]/', $chr)){
                        $fg2=$chr;$i++;$chr=substr($texte,$i,1);
                    }

                    if($chr==","){
                        $i++;$chr = substr($texte,$i,1);
                        if(preg_match('/[0-9]/', $chr)){
                            $bg1 = $chr;$i++;
                            $chr = substr($texte,$i,1);
                            if(preg_match('/[0-9]/', $chr)){
                                $bg2=$chr;
                            }
                            else{
                                $i--;
                            }
                        }
                    }
                    else{
                        $i--;
                    }
                }
                else{
                    $i--;
                }
                $fg=(int)($fg1.$fg2);
                $bg=(int)($bg1.$bg2);
                if($is_fg){$buffer.= "</span>";$is_fg=false;}
                if($fg!=0) {$buffer.= "<span style='color:".chooseColor($fg).";'>";$is_fg=true;}

                if($is_bg){$buffer.= "</span>";$is_bg=false;}
                if($bg!=0) {$buffer.= "<span style='background-color:".chooseColor($bg).";'>";$is_bg=true;}

                break;

            case "15":
                //->Enlever les couleurs
                if($is_fg) {$buffer.= "</span>";$is_fg=false;}
                if($is_bg) {$buffer.= "</span>";$is_bg=false;}
                if($is_bold) {$buffer.= "</b>";$is_bold=false;}
                if($is_under) {$buffer.= "</u>";$is_under=false;}
                break;

            case "22":
                //->Inverser BG et FG
                if($is_fg) {$buffer.= "</span>";$is_fg=false;}
                if($is_bg) {$buffer.= "</span>";$is_bg=false;}

                $temp=$fg;
                $fg=$bg;
                $bg=$temp;

                $buffer.= "<span style='color:".chooseColor($fg).";'>";$is_fg=true;
                $buffer.= "<span style='background-color:".chooseColor($bg).";'>";$is_bg=true;

                break;

            case "31":
                //->Souligner
                if($is_under) {$buffer.= "</u>";$is_under=false;}
                else {$buffer.= "<u>";$is_under=true;}
                break;
            case "32":
                //->Espace
                if($is_space) {$buffer.= "&nbsp;";$is_space=false;}
                else {$buffer.=" ";$is_space=true;}
                break;
            default:
                $buffer.=$chr;
                $is_space=false;
                break;
        }
    }
    return $buffer;
}


function htmlline($str) {
    $str = mb_convert_encoding($str, "UTF-8","UTF-8,Windows-1252,ISO-8859-15,ISO-8859-1");

    // Escape before adding markup so chat lines can't inject HTML
    $str = htmlspecialchars($str, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

    $str = irc2html($str);

    $str = preg_replace( "/([[:alnum:]]+):\/\/((?:(?!&quot;|&#039;|&lt;|&gt;)[^[:space:]<])*)([[:alnum:]#?\/=])/i", "<a href=\"\\1://\\2\\3\" target=\"_blank\">\\1://\\2\\3</a>", $str);
    $str = preg_replace( "/(([a-z0-9_]|\\-|\\.)+@([^[:space:]]*)([[:alnum:]-]))/i", "<a href=\"mailto:\\1%s\" >\\1</a>", $str);
    return $str;
}

// Get a first name from the original nickname
function nickToFirstName($nick){
  return NAMES[(int)(substr(crc32(md5($nick)), 0, 5)) % NAME_COUNT];
}

function formatNick($nick) {
    return htmlentities(nickToFirstName($nick), ENT_QUOTES);
}

function formatMircTime(&$time) {
    $times = explode(":", $time);
    $times = array_slice($times, 0, 3);
    while(count($times) < 3) {
        array_push($times, 00);
    }

    $time = mktime((int) $times[0], (int) $times[1], (int) $times[2]);
}

function _parserMessagesIrssi($log) {

    preg_match_all('/^([\d:]*) (.*)$/mU', $log, $match, PREG_PATTERN_ORDER);

    $match = array_slice($match, 1);

    $times =& $match[0];

    array_walk($times,'formatMircTime');

    $results = array();

    foreach($match[1] as $key => $val) {

        // Is action?
        if(preg_match('/^-!- (.*) (.*)$/U', $val, $tulitikut)) {
            $nick =& $tulitikut[1];
            $act  =& $tulitikut[2];

            if(preg_match('/^\[([^\]]*)\] has joined/U',$act, $whom)) {
                $action = "JOIN";
                $msg    = $whom[1];
            } elseif(preg_match('/^\[[^\]]*\] has left .* \[([^\]]*)\]$/U',$act, $whom)) {
                $action = "PART";
                $msg    = $whom[1];
            } elseif(preg_match('/^\[[^\]]*\] has quit \[([^\]]*)\]$/U',$act, $whom)) {
                $action = "QUIT";
                $msg    = $whom[1];
            } elseif(preg_match('/^is now known as (.*)$/U',$act, $whom)) {
                $action = "NICK";
                $msg    = $whom[1];
            } elseif(preg_match('/mode\/.* \[([^\]]*)\] by (.*)$/U',$val, $whom)) {
                $action = "MODE";
                $msg    = $whom[1];
                $nick   = $whom[2];
            } elseif(preg_match('/^was kicked from .* \[([^\]]*)\]/U',$act, $whom)) {
                $action = "KICK";
                $msg    = $whom[1];
            } else {
                continue;
            }

        } elseif (preg_match('/^<([^>]*)> (.*)$/U', $val, $tulitikut)) {
            $action = "PRIVMSG";
            // First character in nicks in irssi logs is mode character
            $nick   = substr($tulitikut[1],1);
            $msg    = $tulitikut[2];
        } else {
            continue;
        }
        $results[] = array(
            'time'     => $times[$key],
            'action'   => $action,
            'nick'     => $nick,
            'msg'      => $msg
        );
    }
    return $results;
}

function formatMessage($row) {
    switch($row['action']) {
        case 'QUIT' :
        case 'PART' :
        case 'PRIVMSG' :
            return htmlline($row['msg']);
        case 'NICK' :
            return formatNick($row['msg']);
        default :
            return htmlentities($row['msg'], ENT_QUOTES, 'UTF-8');
    }
}

$log = '';
if ( is_readable( $logfile ) ) {
    $log = file_get_contents( $logfile, false, null, max( 0, filesize( $logfile ) - TAIL_BYTES ) );

    // Drop the partial first line when reading from the middle of the file
    if ( filesize( $logfile ) > TAIL_BYTES ) {
        $log = substr( $log, strpos( $log, "\n" ) + 1 );
    }
}

$lines = array();
foreach ( _parserMessagesIrssi( $log ) as $row ) {
    $lines[] = array(
        't' => $row['time'],
        'a' => $row['action'],
        'n' => formatNick( $row['nick'] ),
        'm' => formatMessage( $row ),
    );
}

$tmpfile = $outfile.'.tmp';
file_put_contents( $tmpfile, json_encode( $lines, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE ) );
rename( $tmpfile, $outfile );
