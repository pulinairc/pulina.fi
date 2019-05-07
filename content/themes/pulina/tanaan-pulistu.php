<?php
// Koodia parannellut rolle 2.4.2011
// Simple HTML Dom rocks!
include_once('/home/web_70/sites/pulina.fi/www/simplehtmldom/simple_html_dom.php');

// Haetaan toptod.save-tiedostosta sanamäärien pojot
$raakapojot = file_get_html('http://peikko.us/toptod.save');
// Poistetaan päiväys pois numeroista
$today = date('d-m-Y');
$numerot = preg_replace('/'.addslashes($today).'/',"", $raakapojot); 
$nummerot = preg_replace("/[^0-9]/"," ", $numerot); 
$piste = explode(" ", $nummerot);
// Lasketaan kaikki sanat yhteen
$todaystats = array_sum($piste);

echo "<div class=\"bar-inactive\"><div class=\"prosenttipalkki\" style=\"width:" . $todaystats / 450 . "%\">";
echo "<span class=\"sanat\" title=\"Tänään pulistu " . round($todaystats) . " sanaa!\"><b>" . round($todaystats) . "</b></span>";
echo '</div>';
echo '</div>';

// Käyttäjät:

echo '<div class="scroller">';
$scroller = file_get_html('http://peikko.us/lastlog-pulina.php');
echo $scroller;
echo '</div>';
?>