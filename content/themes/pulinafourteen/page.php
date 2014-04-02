<?php
/**
 * Perus sivun template.
 *
 * @package pulinafourteen
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			
				<div class="entry-content">

				<div class="row">
				
					<div class="col-md-12">
					<?php the_content(); ?>
					<p><?php edit_post_link( __( 'Muokkaa', 'pulinafourteen' ), '<span class="edit-link">', '</span>' ); ?></p>
					</div>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
