<?php

// /* =Code is poetry.
// /* Rolle-duden Facebook-feedi
// -------------------------------------------------------------- */


// /* =Pakolliset asetukset
// -------------------------------------------------------------- */

    require_once('inc/facebook-php-sdk/src/facebook.php');

    // Yhdistetään appsiin:
    $config = array();
    $config['appId'] = '1401602880110915';
    $config['secret'] = '1ec751c98a00a5fb22ce78c65ee45f3f';
    $config['fileUpload'] = false; // optional

    // Sivun ID (tunnus)
    $pageid = "digitoimistodude";

    // Kuka omistaa sivun (yritys/nimi päivityksissä):
    $sivunomistaja = "Digitoimisto Dude Oy";

    $posturl = 'https://www.facebook.com/'.$pageid.'/posts';

    // Känni päälle
    $facebook = new Facebook($config);

    // Eri feedejä määriteltynä:
    $pagefeed = $facebook->api("/" . $pageid . "/feed");
    $photos = $facebook->api("/" . $pageid . "/photos");
    $albums = $facebook->api("/" . $pageid . "/albums");

    // Dumpataan arvot, jotta nähdään mitä voidaan poimia:
    //echo '<pre>';print_r($pagefeed);
    //echo '<pre>';print_r($albums);
    //echo '<pre>';print_r($photos);


// /* =Relatiiviset aikamääreet (X minuuttia/päivää/whatever sitten)
// -------------------------------------------------------------- */

    function aika($older_date, $newer_date = false)  {

    // Array of time period chunks
    $chunks = array(
    array(60 * 60 * 24 * 365 , 'vuosi'),
    array(60 * 60 * 24 * 30 , 'kuukausi'),
    array(60 * 60 * 24 * 7, 'viikko'),
    array(60 * 60 * 24 , 'päivä'),
    array(60 * 60 , 'tunti'),
    array(60 , 'minuutti'),
    );

    $since = $newer_date - $older_date;
    for ($iik = 0, $j = count($chunks); $i < $j; $iik++)
        {
        $seconds = $chunks[$iik][0];
        $name = $chunks[$iik][1];
        if (($count = floor($since / $seconds)) != 0)
            {
            break;
            }
        }
    if ($count > 1 & $name == "päivä") {
    $output = ($count == 1) ? '1 '.$name : "$count {$name}ä";
    } elseif ($count > 1 & $name == "vuosi") {
    $output = ($count == 1) ? '1 '.$name : "$count vuotta";
        } elseif ($count > 1 & $name == "kuukausi") {
        $output = ($count == 1) ? '1 '.$name : "$count kuukautta";
    } else {
    $output = ($count == 1) ? '1 '.$name : "$count {$name}a";
    }
    if ($i + 1 < $j)
        {
        $seconds2 = $chunks[$i + 1][0];
        $name2 = $chunks[$i + 1][1];
        
        if (($count2 = floor(($since - ($seconds * $count)) / $seconds2)) != 0)
            {
    if ($count2 > 1 & $name2 == "päivä") {
    $output .= ($count2 == 1) ? ', 1 '.$name2 : ", $count2 {$name2}ä";
    } elseif ($count2 > 1 & $name2 == "kuukausi") {
    $output .= ($count2 == 1) ? ', 1 '.$name2 : ", $count2 kuukautta";
    } else {
     $output .= ($count2 == 1) ? ', 1 '.$name2 : ", $count2 {$name2}a";
    }
             
            }

    return $output;
        }
    }


// /* =ASETUKSET - säädä nämä ennen kuin lähdet tekemään uutta
// -------------------------------------------------------------- */

// Näkyykö errorit vaiko eikö, kommentoi pois jos halluut:
error_reporting(E_ALL ^ E_NOTICE);

$data = $pagefeed['data'];

// Ja tämä on se kuuluisa testauspalikka, kommentoi edellinen pois jos testaat!
// Numero tuossa toisena määrää sen monesko päivitys on kyseessä.
// Helppo testata eri postaustyyppejä (statuspäivitys, linkki, kuvapäivitys)

//$data = array_slice( $pagefeed['data'], 2, null, true);

// Rajoitukset:

// Montako sanaa saa olla päivityksessä
$sanarajoitus = '100';

// Montako päivitystä näytetään
$statusrajoitus = '2';

// Käytetäänkö päägridiä
$usegrid = true;

// Käytetäänkö apugridejä
$usehelpergrid = false;

// Käytetäänkö metan gridejä
$usemetagrid = false;

// Päägridin class:
$grid = 'col-md-12';

// Apugridi kuvalle
$image_grid = 'col-sm-6';

// Apugridi postaukselle
$post_grid = 'col-sm-12';

// Apugridi metalle (<li>)
$grid_meta = 'col-md-12';

// Näytetäänkö metatiedot
$showmeta = true;

// Näytetäänkö tykkäykset
$showlikes = true;

// Näytetäänkö kommenttien määrä
$showcomments = false;

// Näytetäänkö aika
$showtime = true;

// Fb-kuvake
$fbicon = '<span class="fb-icon"></span>';


// /* =Normaali päivitys alkaa
// -------------------------------------------------------------- */


// Sanarajafunktio:
function limit_words($string, $word_limit)
{
$words = explode(" ",$string);
return implode(" ",array_splice($words,0,$word_limit));
}

$laskuri = 0;
foreach($data as $post) {

    if(!isset($post['story']) && array_search($sivunomistaja, $post['from'])) {

                        $postidexplode = explode('_', $post['id']);
                        $postid = $postidexplode[1];

if($usegrid == true) { 
    echo '<div class="'.$grid.'"><div class="update">
    '; 
}

            echo '<div class="status-update';
            if($usehelpergrid == true) { 
                echo ' '.$post_grid;
            }
            echo '">';


// Klikattavat linkit:
$post['story'] = preg_replace('"\b(http://\S+)"', '<a href="$1">$1</a>', $post['story']);
$post['message'] = preg_replace('"\b(http://\S+)"', '<a href="$1">$1</a>', $post['message']);


// /* =Tilapäivityksen rakenne
// -------------------------------------------------------------- */

echo '<p>';
echo $fbicon;

                        if ($post['type'] == 'status') {

                            if (empty($post['story']) === false) {

                                // Jos merkkirajoitus on olemassa ja jos merkkien määrä on suurempi kuin itse päivitys niin katkaistaan kaula
                                if(isset($merkkirajoitus) && strlen($post['story'] > $merkkirajoitus)) {
                                echo substr($post['story'], 0, $merkkirajoitus) . "...";
                                } else {

                                // Jos sanarajoitus on olemassa ja jos sanojen määrä on suurempi kuin päivitys niin...
                                if (function_exists('limit_words') && isset($sanarajoitus) && str_word_count($post['story']) > $sanarajoitus) {   
                                echo limit_words($post['story'],$sanarajoitus) . "...";
                                } else {
                                echo $post['story'] . "
                                ";
                                }

                                }

                             } elseif (empty($post['message']) === false) {

                                // Jos merkkirajoitus on olemassa ja jos merkkien määrä on suurempi kuin itse päivitys niin katkaistaan kaula
                                if(isset($merkkirajoitus) && strlen($post['message'] > $merkkirajoitus)) {
                                echo substr($post['message'], 0, $merkkirajoitus) . "...";
                                } else {

                                // Jos sanarajoitus on olemassa ja jos sanojen määrä on suurempi kuin päivitys niin...
                                if (function_exists('limit_words') && isset($sanarajoitus) && str_word_count($post['message']) > $sanarajoitus) {   
                                echo limit_words($post['message'],$sanarajoitus) . "...";
                                } else {
                                echo $post['message'] . "";
                                }

                                }

                            }

echo '</p>';

// Facebook-metatiedot:
if($showmeta == true) {   
echo '
';                          
include('facebook-feed-meta.php');
}

}                     
                        
// /* =Linkkipäivityksen rakenne
// -------------------------------------------------------------- */ 

                        if ($post['type'] == 'link') {

                            if(isset($post['message'])) { 

                                // Jos merkkirajoitus on olemassa ja jos merkkien määrä on suurempi kuin itse päivitys niin katkaistaan kaula
                                if(isset($merkkirajoitus) && strlen($post['message'] > $merkkirajoitus)) {
                                echo substr($post['message'], 0, $merkkirajoitus) . "...";
                                } else {

                                // Jos sanarajoitus on olemassa ja jos sanojen määrä on suurempi kuin päivitys niin...
                                if (function_exists('limit_words') && isset($sanarajoitus) && str_word_count($post['message']) > $sanarajoitus) {   
                                echo limit_words($post['message'],$sanarajoitus) . "...";

                                } else {
                                echo $post['message'];
                                }

                            }
                            //echo "<a href=\"" . $posturl .  "/" . $postid. "\">" . $post['name'] . "</a></p>
                            //";

                        }

echo '</p>';

// Facebook-metatiedot:
if($showmeta == true) {                             
include('facebook-feed-meta.php');
}

                        }
                        
// /* =Kuvapäivityksen rakenne
// -------------------------------------------------------------- */ 

                        if ($post['type'] == 'photo') {


                            if (empty($post['story']) === false) {

                                // Jos merkkirajoitus on olemassa ja jos merkkien määrä on suurempi kuin itse päivitys niin katkaistaan kaula
                                if(isset($merkkirajoitus) && strlen($post['story'] > $merkkirajoitus)) {
                                echo substr($post['story'], 0, $merkkirajoitus) . "...";
                                } else {

                                // Jos sanarajoitus on olemassa ja jos sanojen määrä on suurempi kuin päivitys niin...
                                if (function_exists('limit_words') && isset($sanarajoitus) && str_word_count($post['story']) > $sanarajoitus) {   
                                echo limit_words($post['story'],$sanarajoitus) . "...";
                                } else {
                                echo $post['story'] . "";
                                }

                                }

                             } elseif (empty($post['message']) === false) {

                                // Jos merkkirajoitus on olemassa ja jos merkkien määrä on suurempi kuin itse päivitys niin katkaistaan kaula
                                if(isset($merkkirajoitus) && strlen($post['message'] > $merkkirajoitus)) {
                                echo substr($post['message'], 0, $merkkirajoitus) . "...";
                                } else {

                                // Jos sanarajoitus on olemassa ja jos sanojen määrä on suurempi kuin päivitys niin...
                                if (function_exists('limit_words') && isset($sanarajoitus) && str_word_count($post['message']) > $sanarajoitus) {   
                                echo limit_words($post['message'],$sanarajoitus) . "...";
                                } else {
                                echo $post['message'] . "
                                ";
                                }

                                }

                            }

                            //$amplink = preg_replace('/&/','&amp;',$post['link']);
                            //echo "<p><a href=\"" . $amplink . "\">Katso kuva &rarr;</a></p>
                            //";

echo '</p>';

// Facebook-metatiedot:
if($showmeta == true) {                             
include('facebook-feed-meta.php');
}

                        }


// /* =Lopetus. The end. Omega.
// -------------------------------------------------------------- */ 

                echo '</div><!--/.status-update-->';


if($usegrid == true) { 
    echo '</div></div>
    '; 
}

$laskuri++;

                        }

// ei välttämättä tarvitse:
//} 


if($laskuri == $statusrajoitus){
break;
}
            } // foreach-looppi loppuu tähän.

        ?>