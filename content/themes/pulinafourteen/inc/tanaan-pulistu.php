<?php
try {
require_once('simplehtmldom/simple_html_dom.php');
$raakapojot = file_get_html('https://peikko.us/toptod.save');
$today = date('d-m-Y');
$numerot = preg_replace('/'.addslashes($today).'/',"", $raakapojot); 
$nummerot = preg_replace("/[^0-9]/"," ", $numerot); 
$piste = explode(" ", $nummerot);
// Lasketaan kaikki sanat yhteen
$todaystats = array_sum($piste);

// echo "<div class=\"pulinat\"><div class=\"prosenttipalkki\" style=\"width:" . $todaystats / 450 . "%\">";
echo "<h3 class=\"tanaan\">Tänään sanoja kertynyt</h3><span class=\"sanat\" title=\"Tänään pulistu " . round($todaystats) . " sanaa!\"><b>" . round($todaystats) . "</b></span>";
// echo '</div>';
// echo '</div>';
} catch (Exception $e) {
echo "<h3 class=\"tanaan\">Tänään sanoja kertynyt</h3><span class=\"sanat\"><b>Random virhe</b></span>";
}