<?php
/**
 * Haku ja hakutulokset.
 *
 * @package light
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<div class="slide">
		<div class="container searchpage">

		<?php if ( have_posts() ) : ?>

				<h2 class="entry-title"><?php printf( __( 'Hakutulokset hakusanalle: %s', 'light' ), '<span>' . get_search_query() . '</span>' ); ?></h2>

			<?php while ( have_posts() ) : the_post(); ?>
			
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h3 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
			
				<div class="entry-content">

					<?php the_excerpt(); ?>
					<p><?php edit_post_link( __( 'Muokkaa', 'light' ), '<span class="edit-link">', '</span>' ); ?></p>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->

			<?php endwhile; ?>

			<div class="navigation">
				<p><?php posts_nav_link('&#8734;','&rarr Edellinen sivu','Seuraava sivu &rarr;'); ?></p>
			</div>

		<?php else : ?>

			<div class="container">
			
			<section class="no-results not-found">
					<h2 class="entry-title"><?php _e( 'Mitään ei löytynyt', 'light' ); ?></h2>
			
					<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
			
						<p><?php printf( __( 'Valmiina ensimmäisen kirjoituksen julkaisuun? <a href="%1$s">Aloita täältä</a>.', 'light' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
			
					<?php elseif ( is_search() ) : ?>
			
						<p><?php _e( 'Mitään ei löytynyt hakutermilläsi. Hae uudelleen alta.', 'light' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php else : ?>
			
						<p><?php _e( 'Näyttäisi siltä että sivua ei löydy. Ehkä haku auttaa?', 'light' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php endif; ?>
			</section><!-- .no-results -->

		<?php endif; ?>
		</div><!--/.container-->
		</div>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
