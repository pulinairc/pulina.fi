<?php
/**
 * Miitit
 *
 * Template Name: Miitit
 *
 * @package light
 */

get_header(); ?>

	<div id="primary" class="content-area firstcontainer">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">

			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-title"><?php the_title(); ?></h2>

				<div class="entry-content">

					<?php the_content(); ?>

          <?php if ( have_rows( 'miitit_toistuva', 'option' ) ) : ?>
            <h3>Tulevat miitit</h3>
            <ul class="linkkilista">
                <?php if ( have_rows( 'miitit_toistuva', 'option' ) ) :
                  while( have_rows( 'miitit_toistuva', 'option' ) ) : the_row();
                  if ( get_sub_field( 'miitin_otsikko' ) ) : ?>
                      <?php if ( ! get_sub_field( 'miitti_on_mennyt' ) ) : ?>
                        <li><?php if ( get_sub_field( 'miitin_doodle-linkki' ) ) : ?><a href="<?php echo get_sub_field( 'miitin_doodle-linkki' ); ?>" target="_new"><?php endif; ?>
                          <?php echo get_sub_field( 'miitin_otsikko' ); ?>
                          <?php if ( get_sub_field( 'miitin_doodle-linkki' ) ) : ?></a><?php endif; ?>
                        </li>
                      <?php endif; ?>
                    <?php endif;
                  endwhile;
                endif;
              ?>
            </ul>

            <h3>Menneet miitit</h3>

            <ul class="linkkilista">
                <?php if ( have_rows( 'miitit_toistuva', 'option' ) ) :
                  while( have_rows( 'miitit_toistuva', 'option' ) ) : the_row();
                  if ( get_sub_field( 'miitin_otsikko' ) ) : ?>
                      <?php if ( get_sub_field( 'miitti_on_mennyt' ) ) : ?>
                        <li><?php if ( get_sub_field( 'miitin_doodle-linkki' ) ) : ?><a href="<?php echo get_sub_field( 'miitin_doodle-linkki' ); ?>" target="_new"><?php endif; ?>
                          <?php echo get_sub_field( 'miitin_otsikko' ); ?>
                          <?php if ( get_sub_field( 'miitin_doodle-linkki' ) ) : ?></a><?php endif; ?>
                        </li>
                      <?php endif; ?>
                    <?php endif;
                  endwhile;
                endif;
              ?>
            </ul>
          <?php endif; ?>

					<?php edit_post_link( __( 'Muokkaa sivua', 'light' ), '<p class="edit">', '</p>' ); ?>

				</div><!-- .entry-content -->

			</article><!-- #post-## -->
			</div>

			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
