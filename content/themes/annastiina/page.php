<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-01-12 16:10:58
 * @package annastiina
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

the_post();
get_header(); ?>

<main class="site-main">

  <?php get_template_part( 'template-parts/hero', get_post_type() ); ?>
  <section class="block block-page has-dark-bg">
    <div class="container">

      <div class="content">
        <?php the_content(); ?>

        <?php if ( is_page( 10 ) ) { ?>
          <p class="how-to">Irkkiin pääsee selaimella, Windowsilla, Macilla, Linuxilla, iPhonella ja Androidilla.</p>

          <div class="clients">
            <a href="<?php echo esc_url( get_page_link( 1367 ) ); ?>">
              <?php include get_theme_file_path( '/svg/platform-windows.svg' ); ?>
            </a>
            <a href="<?php echo esc_url( get_page_link( 1369 ) ); ?>">
              <?php include get_theme_file_path( '/svg/platform-apple.svg' ); ?>
            </a>
            <a href="<?php echo esc_url( get_page_link( 1371 ) ); ?>">
              <?php include get_theme_file_path( '/svg/platform-linux.svg' ); ?>
            </a>
            <a href="<?php echo esc_url( get_page_link( 1324 ) ); ?>">
              <?php include get_theme_file_path( '/svg/platform-google.svg' ); ?>
            </a>
            <a href="<?php echo esc_url( get_page_link( 1375 ) ); ?>">
              <?php include get_theme_file_path( '/svg/platform-chrome.svg' ); ?>
            </a>
          </div>
        <?php } ?>

        <?php if ( get_edit_post_link() ) {
          edit_post_link( sprintf( wp_kses( __( 'Edit <span class="screen-reader-text">%s</span>', 'annastiina' ), [ 'span' => [ 'class' => [] ] ] ), get_the_title() ), '<p class="edit-link">', '</p>' );
        } ?>
      </div>

    </div><!-- .container -->
  </section>

</main>

<?php get_footer();
