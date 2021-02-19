<?php
/**
 * Numbers module
 *
 * This module retrieves numbers from IRC.
 *
 * @package annastiina
 */

require get_theme_file_path( 'inc/includes/simplehtmldom_1_9_1/simple_html_dom.php' );

// Fetch data and set up simple cache
$numbers_url = 'https://peikko.us/pulina.html';
$numbers_cachefile = get_theme_file_path( 'inc/cache/numbers.html' );
$numbers_cachetime = 28800; // 8 hours

$peak_url = 'https://peikko.us/peak.db';
$peak_cachefile = get_theme_file_path( 'inc/cache/peak.db' );
$peak_cachetime = 40000;

$stats_url = 'https://www.pulina.fi/statsit/index.html';
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

$html_numbers = file_get_html( $numbers_cachefile );
$peak = file_get_contents( $peak_cachefile ); // phpcs:ignore
$stats = file_get_html( $stats_cachefile );

// Get record
$number_get = explode( '!!!', $peak );
$number_get_again = explode( '@', $number_get[1] );
$number_record = $number_get_again[0];

// Get visitors
$get_visitors_raw = $stats->find( 'b' );
$number_visitors = $get_visitors_raw[0];

// Get total lines
preg_match( '/Rivien yhteismäärä: (?P<digit>\d+)/', $stats, $matches );
$number_total_lines = $matches[1];
?>

<div class="cols">
  <div class="col">
    <span class="label">
      Paikalla nyt
    </span>
    <span class="number">
      <?php foreach ( $html_numbers->find( '.paikalla' ) as $number_online ) echo wp_kses_post( $number_online ); ?>
    </span>
  </div>

  <div class="col">
    <span class="label">
      Yhtäaikainen käyttäjäennätys
    </span>
    <span class="number">
      <?php echo wp_kses_post( $number_record ); ?>
    </span>
  </div>

  <div class="col">
    <span class="label">
      Käyttäjää yhteensä
    </span>
    <span class="number">
      <?php echo wp_kses_post( $number_visitors ); ?>
    </span>
  </div>

  <div class="col">
    <span class="label">
      Riviä pulistu
    </span>
    <span class="number">
      <?php echo wp_kses_post( $number_total_lines ); ?>
    </span>
  </div>
<div>
