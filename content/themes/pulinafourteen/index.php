<?php
/**
 * BLOGIN ETUSIVU
 * 
 * @package pulinafourteen
 * Template Name: Blogi
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main blog" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

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

		<?php endwhile; // end of the loop. ?>

		<div class="container">
			<div class="navigation">
				<p><?php posts_nav_link(' &#183; ', 'edellinen sivu', 'seuraava sivu'); ?></p>
			</div>
		</div>
		
		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>