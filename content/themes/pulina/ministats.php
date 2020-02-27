<?php
include_once('/home/web_70/sites/pulina.fi/www/simplehtmldom/simple_html_dom.php');
?>

<div class="sukupuolet">
<ul>
<li class="miehet">Miehiä: <b><?php echo file_get_html('http://peikko.us/pisg_males.txt'); ?></b></li>
<li class="naiset">Naisia: <b><?php echo file_get_html('http://peikko.us/pisg_females.txt'); ?></b></li>
</ul>
</div>

<?php
// Koodia parannellut rolle 2.4.2011
// Simple HTML Dom rocks!

$filu = file_get_html('https://www.pulina.fi/statsit/index.html');

$bold = $filu->find('b');
$visitors = $bold[0];

preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $filu, $matches);
$pulistumaara = $matches[1];

echo "<div class=\"ministats\">Kanavalla on käynyt yhteensä <span class=\"iso\">" . $visitors . "</span> eri ihmistä ";
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

echo 'sen <b><span class="iso">' . round($channelcreated) . '</span> päivän elinaikana</b>, jonka aikana rivejä on kertynyt yhteensä <span class="iso"><b>' . $pulistumaara . '</b></span>';

////$lines = file ('http://peikko.us/irc-nicklist.txt'); $count = count($lines); echo 'Juuri nyt kanavalla on <strong>'.$count.'</strong> ihmi'; if ($count == 1) { echo 'nen'; } else { echo 'stä'; } echo ". <a href=\"javascript:show_hide('pulisijat');\">Ketä?</a>";

/* Works out the time since the entry post, takes a an argument in unix time (seconds) */
