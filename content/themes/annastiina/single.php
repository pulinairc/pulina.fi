<?php
/**
 * The template for displaying all single posts
 *
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-01-12 16:11:09
 * @package annastiina
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 */

namespace Air_Light;

the_post();
get_header(); ?>

<main class="site-main">

  <?php get_template_part( 'template-parts/hero-blog' ); ?>
  <section class="block block-single has-dark-bg">
    <div class="gutenberg-content">

      <?php the_content();

      // Required by WordPress Theme Check, feel free to remove as it's rarely used in starter themes
      wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'annastiina' ), 'after' => '</div>' ) );

      entry_footer();

      if ( get_edit_post_link() ) {
        edit_post_link( sprintf( wp_kses( __( 'Muokkaa <span class="screen-reader-text">%s</span>', 'annastiina' ), [ 'span' => [ 'class' => [] ] ] ), get_the_title() ), '<p class="edit-link">', '</p>' );
      }
      ?>

        <div class="author-information">
          <?php echo get_avatar( get_the_author_meta( 'email' ), '82' ); ?>
          <h3><?php echo esc_html( get_the_author_meta( 'display_name' ) ); ?></h3>
          <p><?php the_author_meta( 'description' ); ?></p>
        </div>

    </div>
  </section>

</main>

<?php get_footer();
