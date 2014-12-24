<?php
/**
 * Perus sivun template.
 *
 * @package light
 */

get_header(); ?>

<iframe src="http://peikko.us/irclog.php" frameborder="0" class="irclog-page"></iframe>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-title"><?php the_title(); ?></h2>
			
				<div class="entry-content">

					<?php the_content(); ?>
					<?php edit_post_link( __( 'Muokkaa sivua', 'light' ), '<p class="edit">', '</p>' ); ?>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
