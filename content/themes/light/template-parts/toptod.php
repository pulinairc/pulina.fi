<?php
/**
 * Toptod module
 *
 * This module retrieves data from toptod.
 *
 * @package light
 */

// Fetch data and set up simple cache
$toptod_fetch_url = 'https://peikko.us/toptod.html';
$toptod_cachefile = get_theme_file_path( 'inc/cache/toptod.html' );
$toptod_cachetime = 1800; // 30 minutes

// If cache file does not exist, let's create it
if ( ! file_exists( $toptod_cachefile ) ) {
  touch( $toptod_cachefile );
  copy( $toptod_fetch_url, $toptod_cachefile );
}

// Set up fetchable data
$html = file_get_contents( $toptod_cachefile );
$items = explode(' ', $html);

// Start
echo '<ol>';

// If file is older than cache time, overwrite file
if ( time() - filemtime( $toptod_cachefile ) > 2 * $toptod_cachetime ) {
  copy( $toptod_fetch_url, $toptod_cachefile );
}

foreach ($items as $key => $item) {
  $list_item = trim($item);

  if ( $list_item === '' || $list_item === ' ' || empty( $list_item ) ) :
  else :

    $get_points = explode('(', $list_item);
    $point_raw = explode(')', $get_points[1]);
    $point_success = explode(')', $point_raw[0]);
    $points = $point_success[0];
    $nick = $get_points[0];

          // Progress calculation
    $maxpoints = '2000';
    $count_percent_part1 = $points * 100;
    $percent = $count_percent_part1 / $maxpoints;
    $nearest_ten = ceil($percent / 10) * 10;

    if ( ! preg_match('/\./', $item) ) :
      echo '<li>
      <div class="points">
      <div class="bar"><div class="progress progress-' . $nearest_ten . '" style="width: ' . $percent . '%;"><b>' . $nick . '</b> <span class="value">' . $points . '</span></div></div>
      </div>
      </li>';
    endif;

  endif;
}
echo '</ol>';
