<?php
/**
 * Recent links.
 *
 * @package annastiina
 */

namespace Air_Light;

// Fetch data and set up simple cache
$links_url = 'https://botit.pulina.fi/pulinalinkit/index.html';
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

$first_level_items = $html->find( 'ul', 0 )->find( 'li', 0 ); ?>

<ul>
  <?php foreach ( $html->find( 'ul' ) as $ul ) {
    $i = 0;
    foreach ( $ul->find( 'li' ) as $li ) {
      if ( 10 === $i ) {
        break;
      }

      $get_replaceable = array( '/Ã¤/', '/Ã¶/', '/â/' );
      $get_in_place = array( 'ä', 'ö', '-' );
      $li = preg_replace( $get_replaceable, $get_in_place, $li );
      echo wp_kses_post( $li );
      $i++;
    }
  }
  ?>
</ul>

<p class="more-links">
  <a href="https://botit.pulina.fi/pulinalinkit">
    Lisää linkkejä
  </a>
</p>
