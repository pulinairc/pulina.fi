<?php
/**
 * Template Name: Trivia
 *
 * @package annastiina
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

the_post();
get_header(); ?>

<main class="site-main">

  <?php get_template_part( 'template-parts/hero', get_post_type() ); ?>
  <section class="block block-page has-dark-bg">
    <div class="container has-anchors">

      <div class="content">
        <?php the_content(); ?>

        <h2>Tilastot</h2>
        <p>Tilastot päivittyvät tälle sivulle 8 tunnin välein.</p>
        <div class="cols">
          <div class="col">
            <?php get_template_part( 'template-parts/modules/trivia-weekly' ); ?>
          </div>

          <div class="col">
            <?php get_template_part( 'template-parts/modules/trivia-monthly' ); ?>
          </div>
        </div>

        <?php if ( get_edit_post_link() ) {
          edit_post_link( sprintf( wp_kses( __( 'Muokkaa <span class="screen-reader-text">%s</span>', 'annastiina' ), [ 'span' => [ 'class' => [] ] ] ), get_the_title() ), '<p class="edit-link">', '</p>' );
        } ?>
      </div>

    </div><!-- .container -->
  </section>

</main>

<?php get_footer();
