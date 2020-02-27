<?php
/**
 * Links module
 *
 * This module retrieves links from IRC.
 *
 * @package light
 */

// Fetch data and set up simple cache
require_once( get_theme_file_path( 'inc/simple_html_dom.php') );
$links_url = 'https://peikko.us/pulinalinkit/index.html';
$links_cachefile = get_theme_file_path( 'inc/cache/links.html' );
$links_cachetime = 3600; // 60 minutes

// If cache file does not exist, let's create it
if ( ! file_exists( $links_cachefile ) ) {
  touch( $links_cachefile );
  copy( $links_url, $links_cachefile );
}

// If file is older than cache time, overwrite file
if ( time() - filemtime( $links_cachefile ) > 2 * $links_cachetime ) {
  copy( $links_url, $links_cachefile );
}

// Set up data
$html = file_get_html( $links_cachefile );

// Example: html->find('ul', 0)->find('li', 0);
$first_level_items = $html->find('ul', 0)->find('li', 0);
foreach($html->find('ul') as $ul)
{
  $i = 0;
  foreach($ul->find('li') as $li)
  {
   if($i == 6) { break; }
   $korvattavat = array('/Ã¤/','/Ã¶/', '/â/');
   $tilalle = array('ä','ö', '-');
   $li = preg_replace($korvattavat, $tilalle, $li);
   echo $li;
   $i++;
 }
}
