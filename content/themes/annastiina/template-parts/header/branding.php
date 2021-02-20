<?php
/**
 * Site branding & logo
 *
 * @package annastiina
 */

namespace Air_Light;

?>

<div class="site-branding">

  <?php if ( is_front_page() ) : ?>
    <h1 class="site-title">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
        <?php include get_theme_file_path( '/svg/logo.svg' ); ?>
        <span class="screen-reader-text"><?php bloginfo( 'name' ); ?></span>
      </a>
    </h1>
  <?php else : ?>
    <p class="site-title">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
        <?php include get_theme_file_path( '/svg/logo.svg' ); ?>
        <span class="screen-reader-text"><?php bloginfo( 'name' ); ?></span>
      </a>
    </p>
  <?php endif;

  $description = get_bloginfo( 'description', 'display' );
  if ( $description || is_customize_preview() ) : ?>
    <p class="site-description screen-reader-text"><?php echo esc_html( $description ); ?></p>
  <?php endif; ?>

</div><!-- .site-branding -->
