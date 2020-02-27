<?php
/**
 * Numbers module
 *
 * This module retrieves numbers from IRC.
 *
 * @package light
 */

// Fetch data and set up simple cache
require_once( get_theme_file_path( 'inc/simple_html_dom.php') );
$numbers_url = 'https://www.pulina.fi/statsit/index.html';
$numbers_cachefile = get_theme_file_path( 'inc/cache/numbers.html' );
$numbers_cachetime = 28800; // 8 hours

$peak_url = 'http://peikko.us/peak.db';
$peak_cachefile = get_theme_file_path( 'inc/cache/peak.db' );
$peak_cachetime = 40000;

$stats_url = 'http://peikko.us/statsit/pulina/index.html';
$stats_cachefile = get_theme_file_path( 'inc/cache/stats.html' );
$stats_cachetime = 60000;

// If cache file does not exist, let's create it
if ( ! file_exists( $numbers_cachefile ) ) {
  touch( $numbers_cachefile );
  copy( $numbers_url, $numbers_cachefile );
}

if ( ! file_exists( $peak_cachefile ) ) {
  touch( $peak_cachefile );
  copy( $peak_url, $peak_cachefile );
}

if ( ! file_exists( $stats_cachefile ) ) {
  touch( $stats_cachefile );
  copy( $stats_url, $stats_cachefile );
}

// If file is older than cache time, overwrite file
if ( time() - filemtime( $numbers_cachefile ) > 2 * $numbers_cachetime ) {
  copy( $numbers_url, $numbers_cachefile );
}

if ( time() - filemtime( $peak_cachefile ) > 2 * $peak_cachetime ) {
  copy( $peak_url, $peak_cachefile );
}

if ( time() - filemtime( $stats_cachefile ) > 2 * $stats_cachetime ) {
  copy( $stats_url, $stats_cachefile );
}

// Set up data
$html_numbers = file_get_html( $numbers_cachefile );
$peak = file_get_html( $peak_cachefile );
$stats = file_get_html( $stats_cachefile );
?>

<div class="wow fadeIn numero" data-wow-delay="0.22s">
  <span class="arvo meter_1"><?php foreach( $html_numbers->find('.paikalla') as $numero ) echo $numero; ?></span>
  <span class="asia">Paikalla nyt</span>
</div>

<div class="wow fadeIn numero" data-wow-delay="0.44s">
  <span class="arvo meter_2"><?php
  $luku = explode( '!!!', $peak );
  $oikealuku = explode( '@', $luku[1] );
  $numero = $oikealuku[0];
  echo $numero;
  ?></span>
  <span class="asia">yhtäaikainen käyttäjäennätys</span>
</div>

<div class="wow fadeIn numero" data-wow-delay="0.66s">
 <span class="arvo meter_3"><?php
 $bold = $stats->find('b');
 $visitors = $bold[0];
 echo $visitors; ?></span>
 <span class="asia">käyttäjää yhteensä</span>
</div>

<div class="wow fadeIn numero" data-wow-delay="0.88s">
 <span class="arvo meter_4"><?php
 $bold = $stats->find('b');
 $visitors = $bold[0];
 preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $stats, $matches);
 $pulistumaara = $matches[1];
 echo $pulistumaara; ?></span>
 <span class="asia">riviä pulistu</span>
</div>