<?php
include_once('simplehtmldom/simple_html_dom.php');

$html = file_get_html('http://peikko.us/pulinalinkit/index.html');

// example: html->find('ul', 0)->find('li', 0);
$first_level_items = $html->find('ul', 0)->find('li', 0);
foreach($html->find('ul') as $ul) 
{
$i = 0;
       foreach($ul->find('li') as $li) 
       {
       if($i == 5) { break; }
       echo $li;
       $i++;
       }
}

?>