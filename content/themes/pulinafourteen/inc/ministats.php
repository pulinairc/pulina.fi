<?php
include_once('simplehtmldom/simple_html_dom.php');
$filu = file_get_html('http://peikko.us/statsit/pulina/index.html');

$bold = $filu->find('b');
$visitors = $bold[0];

preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $filu, $matches);
$pulistumaara = $matches[1];

// Miehet
$miehet = $filu->find('/html/body/div/table[17]/tbody/tr[2]/td[4]', 0);
$miehet_array = explode(", ", $miehet);
$miehet_maara = count($miehet_array);

// Naiset
$naiset = $filu->find('/html/body/div/table[17]/tbody/tr[3]/td[4]', 0);
$naiset_array = explode(", ", $naiset);
$naiset_maara = count($naiset_array);

echo '<div class="ministats">';

echo '<div class="kayttajat-yhteensa">';
echo '<h3>Käyttäjämäärä yhteensä</h3>';
echo '<span class="numero">'.$visitors.'</span>';;
echo '</div>';
?>
<?php

// minuutit: / 60;
// tunnit: / 3600
// päivät: / 86400
// viikot: / 604800
// kuukaudet: / 2678400
// vuodet: / 31536000

$luomispaiva=08;
$luomiskuukausi=04;
$luomisvuosi=2008;

// aika nyt:
$nyt=time();

$kanavaluotu=mktime(0,0,0,$luomiskuukausi,$luomispaiva,$luomisvuosi);
$luomispvm=$nyt-$kanavaluotu;

$channelcreated=$luomispvm / 86400; 
$kanavanikapaivissa=round($channelcreated);

echo '<div class="kanavan-ika">';
echo '<h3>Kanavan ikä päivissä</h3>';
echo '<span class="numero">'.$kanavanikapaivissa.'</span>';
echo '</div>';

echo '<div class="rivit">';
echo '<h3>Rivejä yhteensä</h3>';
echo '<span class="numero">'.$pulistumaara.'</span>';
echo '</div>';

echo '</div>'; //.ministats

echo '<div class="sukupuolet">';

echo '<div class="sukupuoli miehet">';
echo '<h3>Miehiä</h3>';
echo '<span class="numero">'.$miehet_maara.'</span><i class="fa fa-male"></i>';
echo '</div>';

echo '<div class="sukupuoli naiset">';
echo '<h3>Naisia</h3>';
echo '<span class="numero">'.$naiset_maara.'</span><i class="fa fa-female"></i>';
echo '</div>';

echo '</div>';