<?php
// Koodia parannellut rolle 2.4.2011
// Simple HTML Dom rocks!
include_once('/home/web_70/sites/pulina.fi/www/simplehtmldom/simple_html_dom.php');

// Paikalla:

$paikalla = file_get_html('https://www.pulina.fi/statsit/index.html');

foreach($paikalla->find('.paikalla') as $otsikko) 
       echo '<div class="onlineusers">'.$otsikko.'</div>';
	   
//echo '<div class="nicklist">';
//foreach($paikalla->find('.irkkaaja') as $irkkaaja) 
//	   echo $irkkaaja.', ';
//	   echo rtrim($irkkaaja, ', ');   
//echo '</div>';
