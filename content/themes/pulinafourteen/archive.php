<?php
/**
 * Arkistosivu
 * Dokumentaatiota: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package pulinafourteen
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

		<?php 
			$count = 0; 
			while ( have_posts() ) : the_post();
			$count++;
		?>

			<div class="container">
			
			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-time">

						<meta itemprop="datePublished" content="<?php the_time('Y-m-d') ?>"><?php echo ucfirst(get_the_time('l')) ?>na, <?php the_time('j. F') ?>ta <?php the_time('Y') ?></meta>

					</h2>
					
					<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			
				<div class="entry-content">
				
					<div class="col-md-12">
					<?php if ( ! has_excerpt() ) { ?>
					<p><?php 
					$lause = preg_match('/^([^.!?]*[\.!?]+){0,4}/', strip_tags($post->post_content), $lyhenne);
					echo $lyhenne[0];
					?></p>
					<?php } else { ?>
					<?php the_excerpt(''); ?>
					<?php } ?>
					</div>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

			<?php endwhile; ?>

		<div class="container">
			<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>
		</div>

		<?php else : ?>

			<div class="container">
			
			<section class="no-results not-found">
				<header class="page-header">
					<h1 class="page-title"><?php _e( 'Mitään ei löytynyt', 'pulinafourteen' ); ?></h1>
				</header><!-- .page-header -->
			
				<div class="page-content">
					<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
			
						<p><?php printf( __( 'Valmiina ensimmäisen kirjoituksen julkaisuun? <a href="%1$s">Aloita täältä</a>.', 'pulinafourteen' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
			
					<?php elseif ( is_search() ) : ?>
			
						<p><?php _e( 'Mitään ei löytynyt hakutermilläsi. Hae uudelleen alta.', 'pulinafourteen' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php else : ?>
			
						<p><?php _e( 'Näyttäisi siltä että sivua ei löydy. Ehkä haku auttaa?', 'pulinafourteen' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php endif; ?>
				</div><!-- .page-content -->
			</section><!-- .no-results -->
			
			</div><!--/.container-->

		<?php endif; ?>

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_footer(); ?>
