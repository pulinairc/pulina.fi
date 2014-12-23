<?php
error_reporting(0);

/**
   * Duden Facebook-feed Facebookin php-sdk API-versiolle 3.2.3
   *
   * @author Roni Laukkarinen
   * @since 30.10.2014
   * @version 19.11.2014
   */


// Pakolliset: Alkusäädöt
// ----------------------

require_once($_SERVER["DOCUMENT_ROOT"].'/vendor/facebook/php-sdk/src/facebook.php');
include('fb-time-since.php');

// Pakolliset: Asetukset
// ---------------------

$config                 = array();
$config['appId']        = '526300140759831'; //Facebook App ID
$config['secret']       = 'a1cb42fbac3644ce2118f3cdbbf48c95'; //Facebook App Secret
$config['fileUpload']   = false;
$pageid                 = 'Paijanneristeilyt';
$page_owner_name        = 'Päijänne risteilyt Hilden Oy';
$posturl                = 'https://www.facebook.com/'.$pageid.'/posts';
$sanarajoitus           = '100'; // Montako sanaa saa olla päivityksessä
$statusrajoitus         = '2'; // Montako päivitystä näytetään
$showlikes              = true; // Näytetäänkö tykkäykset
$showcomments           = false; // Näytetäänkö kommenttien määrä
$showtime               = true; // Näytetäänkö aika

// Sessio alkaa:
// -------------

try {
$facebook = new Facebook($config);
$pagefeed = $facebook->api("/" . $pageid . "/feed");
$photos = $facebook->api("/" . $pageid . "/photos");
$albums = $facebook->api("/" . $pageid . "/albums");

$data = $pagefeed['data'];

// Sanarajoitus:
// -------------

function limit_words($string, $word_limit)
{
$words = explode(" ",$string);
return implode(" ",array_splice($words,0,$word_limit));
}

// Loop alkaa:
// ----------

$laskuri = 0;
foreach($data as $post) :

// Postauksen ID:
$postidexplode = explode('_', $post['id']);
$postid = $postidexplode[1];

// Debug:
// echo '<pre>';
// var_dump($post);
// echo '</pre>';

// Triggereitä testailua varten:
// echo '<h1>Loopin silmukka nro #'.$laskuri.':</h1>';
// echo '<pre>';
// print_r($post);
// echo '</pre>';

// Määritetään päivitys
if( isset($post['story']) ) : $tarina = $post['story'];
else : $tarina = $post['message'];
endif;

// Klikattavat linkit:
if( isset($tarina) ) : $tarina = preg_replace('"\b(http://\S+)"', '<a href="$1">$1</a>', $tarina); endif;


// Karsitaan tykkäykset ym. turhat pois mitä ei haluta näyttää:
if(
    !strpos($tarina,'likes') !== false 
    && !strpos($tarina,'commented') !== false 
    && !strpos($tarina,'added') !== false 
    && !strpos($tarina,'shared') !== false 
    && !strpos($tarina,'created') !== false 
    && !strpos($tarina,'event') !== false 
    && !strpos($tarina,'posted') !== false 

    // Päivityksen pitää tulla sivun omistajalta:
    && 
    array_search( $page_owner_name, $post['from'] )
    ) :


    if ( empty($tarina) === false ) :

        // Jos merkkirajoitus on olemassa ja jos merkkien määrä on suurempi kuin itse päivitys niin katkaistaan
        if(isset($merkkirajoitus) && strlen($tarina > $merkkirajoitus)) :
            echo substr($tarina, 0, $merkkirajoitus) . "...";
        else :

        // Jos sanarajoitus on olemassa ja jos sanojen määrä on suurempi kuin päivitys niin...
            if (function_exists('limit_words') && isset($sanarajoitus) && str_word_count($tarina) > $sanarajoitus) : 
                echo limit_words($tarina,$sanarajoitus) . "...";
            else : ?>

            <div class="tarina">
                <a href="<?php echo $posturl .  '/' . $postid; ?>">

                    <p><?php echo $tarina; ?></p>
                    <p class="fb-meta"><?php include('fb-meta.php'); ?></p>

                </a>
            </div>

            <?php endif;

        endif;

    endif;

    $laskuri++;
    
    if($laskuri == $statusrajoitus) :
        break;
    endif;

endif;

endforeach;

} catch (Exception $e) {

    // Virheilmoitus tai vaihtoehtoisesti ei mitään.

}