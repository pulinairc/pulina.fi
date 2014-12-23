<?php
require_once('inc/simplehtmldom/simple_html_dom.php');
$scroller = file_get_html('http://peikko.us/raakalogi.php');
echo $scroller;