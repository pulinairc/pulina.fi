<?php
include_once('simplehtmldom/simple_html_dom.php');
$paikalla = file_get_html('http://peikko.us/pulina.html');

foreach($paikalla->find('.paikalla') as $numero) 
       echo $numero;
	   
//echo '<div class="nicklist">';
//foreach($paikalla->find('.irkkaaja') as $irkkaaja) 
//	   echo $irkkaaja.', ';
//	   echo rtrim($irkkaaja, ', ');   
//echo '</div>';
?>