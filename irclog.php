<?php

// array of first names
define('NAMES', explode("\n", file_get_contents(__DIR__.'/scroller_data/nimilista.txt')));
// name count minus one to ignore empty name at the end of the name list
define('NAME_COUNT', count(NAMES) - 1);

// kate: space-indent true; encoding utf-8; indent-width 4;
$rev = '$Id$';

// Storage driver. currently supported:
// * DB - uses pear DB layer
// * logfile - reads messages from logfile
$storage = 'logfile';

// Default channel. Currently affects only on DB, and an topic change display.
$channel = "#pulina";

//
// logfile storage
//

ini_set( 'date.timezone', 'Europe/Helsinki' );
$logfile = '/var/www/pulina.fi/public_html/pulina-days/pul-'.strftime('%Y-%m-%d').'.log';

// Starting offset in bytes (how many bytes are readed from end of file?)
$startoffsetbytes = 7200;

// Format of logfile. Currently supported:
// * mirc - For those who use m-IRC (or compatible logfile format)
// * irssi - For default irssi logfiles
// * egg - Eggdrop logfile (set quick-logs 1 on eggdrop to see dynamic updates)
$logfileformat = 'irssi';

//
// DB storage
//

// DB dns
$dbdns = "mysql://user:*******@localhost/pulinairc";

// How many rows to show at begining?
$startrows = 150;

// Severside polling
// Serverside polling means that client keeps connection
// to server, and server keeps checking for updates. When
// update is available, server sends it and client generates
// immediatly a new connection. Good thing is, that updates
// are allmost instant. Bad thing is, that for busy sites,
// there is going to be a lot of open, idle connections.
// By setting this to false, client request are served
// immediatly, and client tries to calculate next update
// inteval. This causes a lot of requests to server, but
// connections are only open as minimal time as possible.
$polling = true;

// "throtling".
// If system is near this AVG load, (%80),
// fetching new messages are delayed.
// Set $loadavg to false if throtling is not wanted
// (eg, in windows enviroment, it does not work).
if(is_readable('/proc/loadavg')) {
    $loadavg = 10;
    $delaytime = 5;
    $maxdelay = 10;
}

// Use page compression?
// If true, uses gzip for compressing new messages.
// Can save (a bit) bandwith, but on quiet channel,
// just wastes CPU cycles.
$gzipencode = true;

// Scrolling method.
// As RSL whished, if you don't want to use smooth scrolling,
// set this to false, so windows allways moves to bottom without
// smooth scrolling
$smoothscrolling = (string) "true";
if(isset($_GET['smoothscroll']) && ( $_GET['smoothscroll'] == "true" || $_GET['smoothscroll'] == "false" )) {
    $smoothscrolling = (string) $_GET['smoothscroll'];
}

///
/// The code part
///

// Remember start time.
$starttime = time();

// Prevent error displaying, which would screw javascript
//if( $_get['time'] ) error_reporting(0);

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
                //$buffer.= "<br>";
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
                if(ereg("[0-9]",$chr)){
                    $fg1=$chr;$i++;
                    $chr=substr($texte,$i,1);
                    if(ereg("[0-9]",$chr)){
                        $fg2=$chr;$i++;$chr=substr($texte,$i,1);
                    }

                    if($chr==","){
                        $i++;$chr = substr($texte,$i,1);
                        if(ereg("[0-9]",$chr)){
                            $bg1 = $chr;$i++;
                            $chr = substr($texte,$i,1);
                            if(ereg("[0-9]",$chr)){
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
                $fg=($fg1.$fg2)+0;
                $bg=($bg1.$bg2)+0;
                //echo "<b>[C : ".$fg." / ".$bg."]</b>";
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
                //->Chr normal, afficher
                // ei näy ääkköset jos tämä on:
                // $buffer.=htmlspecialchars($chr,ENT_QUOTES);
                // tällä näkyy:
                $buffer.=$chr;
                break;
        }
    }
    return $buffer;
}


function htmlline($str) {
    if(function_exists("mb_convert_encoding"))
        $str = mb_convert_encoding($str, "UTF-8","UTF-8,Windows-1252,ISO-8859-15,ISO-8859-1");

    //$str = htmlspecialchars($str);

    $str = irc2html($str);

    $str = preg_replace( "/([[:alnum:]]+):\/\/([^[:space:]]*)([[:alnum:]#?\/&=])/i", "<a href=\"\\1://\\2\\3\" target=\"_blank\">\\1://\\2\\3</a>", $str);
    $str = preg_replace( "/(([a-z0-9_]|\\-|\\.)+@([^[:space:]]*)([[:alnum:]-]))/i", "<a href=\"mailto:\\1%s\" >\\1</a>", $str);
    return $str;
}

// Get a first name from the original nickname
function nickToFirstName($nick){
  return NAMES[(int)(substr(crc32(md5($nick)), 0, 5)) % NAME_COUNT];
}

function formatNick($nick) {
    // Convert the nick
    $nick = nickToFirstName($nick);

    return htmlentities($nick, ENT_QUOTES);
}

function formatMircTime(&$time, $channel) {
    $times = explode(":", $time);
    $times = array_slice($times, 0, 3);
    while(count($times) < 3) {
        array_push($times, 00);
    }

    // Kesällä pitää olla $times[0]-3 (kesäaika/talviaika)
    $time = mktime((int) $times[0], (int) $times[1], (int) $times[2]);
}


function getMessagesDB(&$pos, $channel) {
    require_once("DB.php");

    global $dbdns, $startrows, $starttime, $polling;
    $max_wait = ini_get('max_execution_time')-1;

    static $DB;

    if(!isset($DB)) {
        $DB = DB::Connect($dbdns);
    }

    if( $pos == null ) {
        $sql = '
            SELECT
                `key`, UNIX_TIMESTAMP(`time`) , `action`, `nick` , `msg`
            FROM
                `ircmsg`
            WHERE
                `channel` = '.$DB->quote($channel).'
            ORDER BY
                `time` DESC, `key` DESC
            LIMIT 0 , '.$startrows;
            $pos = 0;
    } else {

        $lsql = '
            SELECT
                    COUNT(*) AS n
            FROM `ircmsg`
            WHERE
                    `key` > '.$DB->quote($pos).' AND
                    `channel` = '.$DB->quote($channel).'
            LIMIT 0,1';

        $sql = '
            SELECT
                `key`, UNIX_TIMESTAMP(`time`) , `action`, `nick` , `msg`
            FROM
                `ircmsg`
            WHERE
                `key` > '.$DB->quote($pos).' AND
                `channel` = '.$DB->quote($channel).'
            ORDER BY
                `time` DESC, `key` DESC';

        // Respawn update checks
        while(true) {

            // Use quick check for latest DB changes
            $res =& $DB->query($lsql);
            if(DB::IsError($res)) return array();

            list($n) = $res->fetchRow();
            $res->free();

            if($n > 0) break;
            elseif($polling == false) break;
            elseif($max_wait < (time()-$starttime)) break; // Is execution time near end?

            sleep(1);
        }
    }

    if(isset($n) && $n == 0) return array(); // Bailing out. Possibly out-of-time

    $res =& $DB->query($sql);
    if(DB::IsError($res)) {
        die("Error: DB: ".$res->getMessage());
    }

    $results = array();
    while(list($key, $time, $action,  $nick, $msg)=$res->fetchRow()) {
        if($key > $pos) $pos = $key;
        $results[] = array('time' => $time, 'action' => $action, 'nick' => $nick, 'msg' => $msg);
    }

    $results = array_reverse($results);
    return $results;
}

function _parserMessagesMirc($log) {

    preg_match_all('/^\[([^\]]*)] (.*)$/mU', $log, $match, PREG_PATTERN_ORDER);

    $match = array_slice($match, 1);

    $times =& $match[0];

    array_walk($times,'formatMircTime');

    $results = array();

    foreach($match[1] as $key => $val) {

        // Is action?
        if(preg_match('/^\*\*\* (.*) (.*)$/U', $val, $tulitikut)) {
            $nick =& $tulitikut[1];
            $act  =& $tulitikut[2];

            if(preg_match('/^\(([^\)]*)\) has joined/',$act, $whom)) {
                $action = "JOIN";
                $msg    = $whom[1];
            } elseif(preg_match('/^has left .* \(([^\)]*)\)$/U',$act, $whom)) {
                // Crappy mirc. Part, left and quit are all logged as left.
                $action = "QUIT";
                $msg    = $whom[1];
            } elseif(preg_match('/^is now known as (.*)$/U',$act, $whom)) {
                $action = "NICK";
                $msg    = $whom[1];
            } elseif(preg_match('/^sets mode: (.*)$/U',$act, $whom)) {
                $action = "MODE";
                $msg    = $whom[1];
            } elseif(preg_match('/^was kicked by .* \(([^\)]*)\)$/U',$act, $whom)) {
                $action = "KICK";
                $msg    = $whom[1];
            } else {
                continue;
            }

        } elseif (preg_match('/^<([^>]*)> (.*)$/U', $val, $tulitikut)) {
            $action = "PRIVMSG";
            $nick   = $tulitikut[1];
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
        //$results[count($results)-1]['raw'] = $val;
    }
    return $results;
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

function _parserMessagesEgg($log) {

    preg_match_all('/^\[([^\]]*)] (.*)$/mU', $log, $match, PREG_PATTERN_ORDER);

    $match = array_slice($match, 1);

    $times =& $match[0];

    array_walk($times,'formatMircTime');

    $results = array();

    foreach($match[1] as $key => $val) {

        // Is action?
        if (preg_match('/^<([^>]*)> (.*)$/U', $val, $tulitikut)) {
            $action = "PRIVMSG";
            $nick   = $tulitikut[1];
            $msg    = $tulitikut[2];
        } elseif (preg_match('%(.*) (.*)$%U', $val, $tulitikut)) {
            $nick =& $tulitikut[1];
            $act  =& $tulitikut[2];


            if(preg_match('/^\(([^\)]*)\) joined .*$/U',$act, $whom)) {
                $action = "JOIN";
                $msg    = $whom[1];
            } elseif (preg_match('/^\([^\)]*\) left irc: (.*)$/U',$act, $reason)) {
                $action = "QUIT";
                $msg    = $reason[1];
            } elseif (preg_match('/^\([^\)]*\) left .*\(([^\)]*)\)/U',$act, $reason)) {
                $action = "PART";
                $msg    = $reason[1];
            } elseif (preg_match('/^\([^\)]*\) left .*$/U',$act, $reason)) {
                // Without reason
                $action = "PART";
                $msg    = "";
            } elseif (preg_match('/^Nick change: (.*) -> (.*)$/U',$val, $whom)) {
                $action = "NICK";
                $nick   = $whom[1];
                $msg    = $whom[2];
            } elseif (preg_match('/^[^:]*: mode change \'([^\']*)\' by ([^!]*)!.*/U',$val, $mode)) {
                $action = "MODE";
                $msg    = $mode[1];
                $nick   = $mode[2];
            } elseif (preg_match('/^kicked from .* by [^:]*: (.*)$/U',$act, $reason)) {
                $action = "KICK";
                $msg    = $reason[1];
            } else {
                //die(__LINE__.$val);
                continue;
            }

        } else {
            //die(__LINE__.$val);
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


/**
 * Read file for logmenu entries.
 */
function getMessagesLogfile(&$pos,$channe=null) {
    global $logfile, $logfileformat, $startoffsetbytes, $starttime, $polling;
    $max_wait = ini_get('max_execution_time')-1;

    if(!file_exists($logfile)) {
        die("Error: logfile '{$logfile}' does not exists");
    }

    if(!$fp = fopen($logfile, "r")) {
        die("Error: Error opening logfile '{$logfile}' handler");
    }

    while(true) {

        $totalsize = filesize($logfile);

        // Move pointer
        if($pos == null) {
            if($startoffsetbytes > $totalsize) $startoffsetbytes = $totalsize;
            fseek($fp, -$startoffsetbytes, SEEK_END);
            $readAmmount=$startoffsetbytes;
        } elseif($totalsize < $pos) {
            // Possible Log reload. Read From beginning.
            $pos = 0;
            continue;
        } else {
            $pos = intval($pos);
            if($pos < 0 || $pos > $totalsize) {
                // You fuckwad
                fseek($fp, -$startoffset, SEEK_END);
                $readAmmount=$startoffsetbytes;
            } else {
                fseek($fp, $pos);
                $readAmmount=$totalsize-$pos;
            }
        }

        // Respawn read, if no new lines.
        if($readAmmount <= 0) {
            if($polling == false) break;
            if($max_wait < (time()-$starttime)) break; // Is execution time near end?

            // Wait for new event
            clearstatcache();
            sleep(0.5);
            continue;
        } else {
            // read logfile
            $log = fread($fp, $readAmmount);
            $pos = ftell($fp);
            break;
        }
    }

    fclose($fp);

    switch(strtolower($logfileformat)) {
        case "mirc" :
            $results = _parserMessagesMirc($log);
            break;
        case "egg" :
            $results = _parserMessagesEgg($log);
            break;
        case "irssi" :
            $results = _parserMessagesIrssi($log);
            break;
        default :
            die("Unknown logtype {$logfileformat}");
    }

    return $results;

}

function getMessages($channel="#pulina",&$time=null) {
    global $storage;

    if(substr($channel,0,1) != "#") $channel = "#".$channel;

    switch($storage) {
        case "DB" :
            $results = getMessagesDB($time,$channel);
            break;
        case "logfile" :
            $results = getMessagesLogfile($time,$channel);
            break;
        default :
            die("No usable driver");
            break;
    }

    if(function_exists('json_encodeasdf')) {
        // Format for json_encode
        $times  = array();
        $act    = array();
        $nicks  = array();
        $mesgs  = array();
        foreach($results as $row) {
            $times[]    = $row['time'];
            $act[]      = $row['action'];
            $nicks[]    = $row['nick'];
            switch($row['action']) {
                case 'QUIT' :
                case 'PART' :
                case 'PRIVMSG' :
                    $mesgs[] = htmlline($row['msg']);
                    break;
                default :
                    $mesgs[] = htmlentities($row['msg'], ENT_NOQUOTES, 'UTF-8');
                    break;
            }
        }
        return json_encode(array(
            $time,
            $times,
            $act,
            $nicks,
            $mesgs
        ));
    } else {
        return json_fallback($results, $time);
    }
}

function json_fallback($results, $time) {
    $times      = '';
    $actions    = '';
    $nicks      = '';
    $mesgs      = '';

    foreach($results as $row) {
        $times .= '"'.$row['time'].'",';
        $actions .= '"'.$row['action'].'",';
        $nicks .= '"'.formatNick($row['nick']).'",';
        switch($row['action']) {
            case 'QUIT' :
            case 'PART' :
            case 'PRIVMSG' :
                $mesgs .= '"'.addslashes(htmlline($row['msg'])).'",';
                break;
            default :
                $mesgs .= '"'.htmlentities($row['msg'], ENT_QUOTES, "UTF-8").'",';
                break;
        }
    }

    $times = substr($times,0,strlen($times)-1);
    $actions = substr($actions,0,strlen($actions)-1);
    $nicks = substr($nicks,0,strlen($nicks)-1);
    $mesgs = substr($mesgs,0,strlen($mesgs)-1);

    return '["'.$time.'",['.$times.'],['.$actions.'],['.$nicks.'],['.$mesgs.']]';

}


/**
 * This function calculates load avarage for linux system.
 * This data is then used to add litle delay to page load, so
 * system won't be totally trashed
 * Code partly stolen from phpsysinfo
 * http://cvs.sourceforge.net/viewcvs.py/phpsysinfo/phpsysinfo-dev/includes/os/class.Linux.inc.php
 *
 * @return estimate of load avarage of system total capacity in percents
 */

function loadavg() {
    if ($fd = fopen('/proc/loadavg', 'r')) {
        $avg = preg_split("/\s/", fgets($fd, 4096),4); // We wan't only the most curren avarage
        fclose($fd);
        return $avg[0];
    } else {
        return false;
    }
}

/**
 * Encode string to gzip-compatible.
 * @param $content string content to encode.
 * @param $strlen int string length
 * @param $crc string crc checksum of string
 */
function  gzipencode($content, $strlen=null, $crc=null) {
    if($strlen===null) $strlen = strlen($content);
    if($crc===null) $crc = crc32($content);
    $content = "\x1f\x8b\x08\x00\x00\x00\x00\x00".
                substr(gzcompress($content, 3), 0, - 4). // Use mid compression
                pack('V', $crc).
                pack('V', $strlen);
    return $content;
}


if(empty($_GET['channel'])) $_GET['channel'] = $channel;

if(isset($_GET['time'])) {

    // It really does not matter if updates aren't instant.
    // Use sleep so if server is under load, frequent updates
    // won't trash system totally.
    if($loadavg) {
        $load = loadavg();
        $loadprc = ($load/$loadavg);
        if($loadprc > 0.80) {
            // calculate how log to delay.
            $delay = ($loadprc-0.8)*5*$delaytime;

            // Don't delay longer than maximal execution time.
            if($maxdelay >= ini_get('max_execution_time')) $maxdelay = ini_get('max_execution_time')-(time()-$starttime)-1;

            if($delay > $maxdelay) $delay = $maxdelay;
            sleep($delay);
        }
    }

    // Save old time
    $old_time = $_GET['time'];

    // $_GET['time'] is an pointer for getMessages.
    $msgs = getMessages($_GET['channel'], $_GET['time']);
    // Send time as etag identifier.
    header('ETag: '.$_GET['time']);

    // Force validation?
    if($old_time != $_GET['time']) {
        // Konqueror want's to cache, and won't return real deal
        // in xmlHttp. Not suitable, not at all...
        header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
        header("Expires: ".gmdate("D, d M Y H:i:s", time())." GMT");
    //} elseif($_SERVER['HTTP_IF_NONE_MATCH'] == $_GET['time']) {
        // Not modified
    //    header('HTTP/1.1 304 Not Modified');
    //    die();
    }

    if($gzipencode == true && headers_sent() && strstr($_SERVER['HTTP_ACCEPT_ENCODING'], "gzip")) {
        $_strlen = strlen($msgs);
        $_msgs = gzipencode($msgs,$_strlen);
        // If uncompressed is smaller than compressed, send uncompressed one.
        if(strlen($_msgs) < $_strlen) {
            header('Content-Encoding: gzip');
            $msgs = $_msgs;
        }
    }

    die($msgs);
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <title><?= htmlspecialchars($_GET['channel']);?> IrcScroller</title>
        <style>

@font-face {
  font-family: 'Menlo';
  src: url('fonts/menlo-webfont.eot'); /* IE9 Compat Modes */
  src: url('fonts/menlo-webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/menlo-webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/menlo-webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('fonts/menlo-webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('fonts/menlo-webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}

body {
    font: 12px 'Menlo', -apple-system, 'Roboto', 'Rubik', system-ui, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial;
    color: rgba(248, 248, 242, 0.77);
    background: #0c162d;
}

span.message {
    width: 95%;
    display:block;
    overflow:hidden;
}

/* Timestamp */
.timestamp {
    color: #6272a4 !important;
}

a:link, a:visited, a:active {
    text-decoration: none;
    color: #3498db;
}

a:hover {
    text-decoration: underline;
     color: #1abc9c;
}

#container {
    width:100%;
    height:100%;
    position:absolute;
}

#container table {
    padding-bottom: 20px;   /* Firefox hack */
}

#foo {
    background:inherit;
}

        </style>
        <script>

var topuri = "https://www.<?= $_SERVER['SERVER_NAME'].$_SERVER['SCRIPT_NAME'] ?>?time=";
var channelparam = "<?= addslashes($_GET['channel']); ?>";
var smoothScroll = <?= $smoothscrolling; ?>;
// For initial table buildup.
var xmlResult = <?= getMessages($_GET['channel'], $_GET['time']);?>;
var xmlHttp = null;
var _sleepTime=_sleepDefTime= 1;
var _appendId = "viestit";
var nickColors = new Array();
// To prevent double-refreshing
var _refreshing = false;

function getXMLHTTPResult() {
    if(_refreshing==true) {
        return false;
    } else if(xmlHttp&&xmlHttp.readyState!=0) {
        requesterInit();
        getXMLHTTPResult();
    } else if(!xmlHttp) {
        // Turhaa edes yrittää
        _refreshing = true;
    } else {
        if(_refreshing == false ) {
            var openUri=topuri+xmlResult[0]+'&channel='+escape(channelparam);
            _refreshing = true;
            xmlHttp.open("GET",openUri,true);
            xmlHttp.onreadystatechange=parseResult;
            xmlHttp.send(null);
            return true;
        }
    }
}

function parseResult() {
    if(xmlHttp.readyState==4) {
        if(xmlHttp.responseText) {
            xmlResult = eval(xmlHttp.responseText);
            buildLayout();
        }
        requesterInit();
        _refreshing = false;
        setTimeout("getXMLHTTPResult()", getTimer());
    }
}

function buildLayout() {

    if(xmlResult[1].length < 1) return;

    // Current working row
    var workTR = null;

    for( var f=0; f<xmlResult[1].length; ++f) {
        // Array begins with offset 0

        workTR=document.createElement("TR");
        setStyle(workTR);

        var timeTD=document.createElement("TD");
        setText(timeTD, "<span class='timestamp'>["+unixtimetodate(xmlResult[1][f])+"]</span>");
        workTR.appendChild(timeTD);

        var nickTD=document.createElement("TD");
        if ( xmlResult[2][f] == "PRIVMSG" ) {
            setText(nickTD, "&lt;"+xmlResult[3][f]+"&gt;");
            nickTD.style.color=colorNick(xmlResult[3][f]);
            nickTD.style.textAlign="right";
        } else {
            var nick = "<span style=\"color: "+colorNick(xmlResult[3][f])+"\">"+xmlResult[3][f]+"</span>";
            setText(nickTD, "<span style=\"color: #454849\">-</span><span style=\"color: #3498db\"><strong>!</strong></span><span style=\"color: #454849\">-</span> "+nick);
            nickTD.style.textAlign="right";
        }
        workTR.appendChild(nickTD);

        var msgTD=document.createElement("TD");
        switch (xmlResult[2][f]) {
            case "NICK" :
                setText(msgTD, "is now known as <span style=\"color: "+colorNick(xmlResult[4][f])+"\">"+xmlResult[4][f]+"</span>");
                break;
            case "PART" :
                setText(msgTD, "has left ["+xmlResult[4][f]+"]");
                break;
            case "QUIT" :
                setText(msgTD, "has quit ["+xmlResult[4][f]+"]");
                break;
            case "JOIN" :
                setText(msgTD, "has joined");
                break;
            case "KICK" :
                setText(msgTD, "kicked "+xmlResult[4][f]);
                break;
            case "MODE" :
                setText(msgTD, "mode ["+xmlResult[4][f]+"] by <span style=\"color: "+colorNick(xmlResult[3][f])+"\">"+xmlResult[3][f]+"</span>");
                break;
            case "TOPIC" :
                setText(msgTD, "changed the topic of "+channelparam+" to: "+xmlResult[4][f]);
                break;
            default :
            case "PRIVMSG" :
                setText(msgTD, "<span class=\"message\">"+xmlResult[4][f]+"</span>");
                break;
        }
        /*
        if ( xmlResult[2][f] == "PRIVMSG" ) {
            setText(msgTD, xmlResult[4][f]);
        } else {
            var msg = "";
            if( xmlResult[4][f] != "" ) {
                msg = " ["+xmlResult[4][f]+"]";
            }
            setText(msgTD, "Has "+xmlResult[2][f]+msg);
        }
        */
        workTR.appendChild(msgTD);
        _appendId.appendChild(workTR);

        scrollme();
    }
    getSleepTimer();
}

function IntRandom(max) {
    // välillä maximi (220) ja 50
    return Math.floor(Math.random() * max) + 50;
}

function dechex(b) {
    var hexStr = '0123456789abcdef';
    return hexStr.charAt(Math.floor(b / 16)) + hexStr.charAt(b % 16);
}

function colorNick(nick) {
    if(!nickColors[nick]) {
        // Try to read from cookie
        if(color = readCookie('nc_'+nick)) {
            nickColors[nick]=color;
        } else {
            nickColors[nick]='#'+dechex(IntRandom(220))+dechex(IntRandom(220))+dechex(IntRandom(220));
            // Save to cookie, for 7 days.
            createCookie('nc_'+nick,nickColors[nick],7);
        }
    }
    return nickColors[nick];

}

function unixtimetodate(time) {
    var theDate = new Date(time * 1000);
    //dateString = formatInt(theDate.getHours())+":"+formatInt(theDate.getMinutes())+":"+formatInt(theDate.getSeconds());
    dateString = formatInt(theDate.getHours())+":"+formatInt(theDate.getMinutes());
    return dateString;
}

function formatInt(sstr) {
    var str = new String(sstr);
    if(str.length < 2) str = "0"+str;
    return str;
}

/**
 * Cookie functions copied from:
 * http://www.quirksmode.org/js/cookies.html
 */
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=<?= dirname($_SERVER['REQUEST_URI']);?>";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

/**
 * Resetoi ajan pienimmilleen
 */
function getSleepTimer() {
    _sleepTime = _sleepDefTime;
}

function getTimer() {
    //return getSleepTimer*1000;
    if(_sleepTime < 15 ) ++_sleepTime;
    return _sleepTime*1000;
}

function setStyle(tag) {
    /* Jos haluat rivin nÃ¤kymÃ¤Ã¤n kokonaan,
     * kommentoi/poista seuraava rivi */
    // tag.style.wordWrap="break-word";
    // tag.style.whiteSpace="pre";
    tag.style.zIndex="5";
}

function setText(tag,text) {
//    tag.innerText = text;
    tag.innerHTML = text;
}

function requesterInit() {
    if(xmlHttp) {
        xmlHttp.onreadystatechange = function() {} // IE bug
        xmlHttp.abort();
        xmlHttp = null;
    }

    _refreshing = false;

    try{
       xmlHttp=new ActiveXObject("Msxml2.XMLHTTP")
    } catch(e){
        try{
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP")
        } catch(sc) {
            xmlHttp=null;
        }
    }
    if(!xmlHttp&&typeof XMLHttpRequest!="undefined") {
        xmlHttp=new XMLHttpRequest();
    }
}

function init() {
    /* Older operas < 9.00-pr1 can't scroll if scrollbars
     * are set invisible in css */
    if (!window.opera)
        document.body.style.overflow='hidden';

    var table=document.createElement("table");

    _appendId=document.createElement("tbody");
    table.appendChild(_appendId);
    var toAppend=document.getElementById("foo");
    toAppend.appendChild(table);

    _appendId

    buildLayout();
    requesterInit();
    getXMLHTTPResult();
}

function scrollme(){
    /* Uuuh, crappy IE. How do I love it... <3<3<3 */
    if(!window.innerHeight) {
        window.scrollTo(0,document.getElementById("foo").offsetHeight);
        return;
    }
    var mypos=window.innerHeight+window.pageYOffset;
    if (mypos<document.getElementById("foo").offsetHeight) {
        if(smoothScroll == true) {
            window.scrollBy(0,2);
            setTimeout("scrollme()",50);
        } else {
            window.scrollTo(0,mypos);
        }
    }
}

        </script>
    </head>
    <body onLoad="init()">
        <div id="container">
            <div id="foo"></div>
        </div>
    </body>
</html>
