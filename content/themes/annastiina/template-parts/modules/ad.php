<?php
/**
 * Ad module.
 *
 * @package annastiina
 */

namespace Air_Light;

?>

<div id="placement" class="advertisement ad advert textad mainos">
  <?php $args = array(
    'post_type' => 'ads',
    'posts_per_page' => 1,
    'no_found_rows' => true,
    'post_status' => 'publish',
  );

  $ad = new \WP_Query( $args );
    if ( $ad->have_posts() ) :
      while ( $ad->have_posts() ) :
        $ad->the_post();

        if ( 'etusivu' === get_field( 'slotti' ) ) :
          if ( strtotime( get_field( 'eraantymispaiva' ) ) > time() ) : ?>
            <?php echo wp_kses_post( get_field( 'mainoskoodi' ) ); ?>
          <?php
        endif;
      endif;
    endwhile;
  endif; ?>
</div>
