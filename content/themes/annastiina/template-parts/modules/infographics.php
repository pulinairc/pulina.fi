<?php
/**
 * Infographics.
 *
 * @package annastiina
 */

namespace Air_Light;

require_once get_theme_file_path( 'inc/includes/simplehtmldom_1_9_1/simple_html_dom.php' );

if (
  filesize( get_theme_file_path( 'inc/cache/numbers.html' ) ) === 0 ||
  filesize( get_theme_file_path( 'inc/cache/peak.db' ) ) === 0 ||
  filesize( get_theme_file_path( 'inc/cache/stats.html' ) ) === 0
  ) {
    return;
}

if (
    ! file_get_html( 'https://botit.pulina.fi/pulina.html' ) ||
    ! file_get_html( 'https://botit.pulina.fi/peak.db' ) ||
    ! file_get_html( 'https://www.pulina.fi/statsit/index.html' )
  ) {
  return;
}
?>

<section class="block block-infographics">
  <div class="container">

    <?php get_template_part( 'template-parts/modules/numbers' ); ?>

  </div>
</section>
