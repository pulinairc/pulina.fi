<?php
/**
 * Haku ja hakutulokset.
 *
 * @package pulina-2014
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title"><?php printf( __( 'Hakutulokset hakusanalle: %s', 'pulina-2014' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			
				<div class="entry-content">

				<div class="row">
				
					<div class="col-md-12">
					<?php the_excerpt(); ?>
					<p><?php edit_post_link( __( 'Muokkaa', 'pulina-2014' ), '<span class="edit-link">', '</span>' ); ?></p>
					</div>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

			<?php endwhile; ?>

			<div class="navigation">
				<p><?php posts_nav_link('&#8734;','&rarr Edellinen sivu','Seuraava sivu &rarr;'); ?></p>
			</div>

		<?php else : ?>

			<div class="container">
			
			<section class="no-results not-found">
				<header class="page-header">
					<h1 class="page-title"><?php _e( 'Mitään ei löytynyt', 'pulina-2014' ); ?></h1>
				</header><!-- .page-header -->
			
				<div class="page-content">
					<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
			
						<p><?php printf( __( 'Valmiina ensimmäisen kirjoituksen julkaisuun? <a href="%1$s">Aloita täältä</a>.', 'pulina-2014' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
			
					<?php elseif ( is_search() ) : ?>
			
						<p><?php _e( 'Mitään ei löytynyt hakutermilläsi. Hae uudelleen alta.', 'pulina-2014' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php else : ?>
			
						<p><?php _e( 'Näyttäisi siltä että sivua ei löydy. Ehkä haku auttaa?', 'pulina-2014' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php endif; ?>
				</div><!-- .page-content -->
			</section><!-- .no-results -->
			
			</div><!--/.container-->

		<?php endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
