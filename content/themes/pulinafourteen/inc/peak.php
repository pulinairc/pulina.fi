<?php
include_once('simplehtmldom/simple_html_dom.php');
$peak = file_get_html('https://peikko.us/peak.db');
$luku = explode('!!!',$peak);
$oikealuku = explode('@',$luku[1]);
$numero = $oikealuku[0];
echo $numero;