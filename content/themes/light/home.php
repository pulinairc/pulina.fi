<?php
/**
 * Blogin template.
 *
 * @package light
 */

get_header(); ?>

<iframe src="http://peikko.us/irclog.php" frameborder="0" class="irclog-page"></iframe>

	<div id="primary" class="content-area firstcontainer">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-blog-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<time class="entry-time" datetime="<?php get_the_time('c'); ?>" pubdate="pubdate"><?php echo ucfirst(get_the_time('l')) ?>na, <?php the_time('j. F') ?>ta <?php the_time('Y') ?> kello <?php the_time('G:i') ?></time>

				<div class="entry-content">
	
					<div class="entry-content">
						<?php if ( ! has_excerpt() ) { ?>
						<p><?php 
						$lause = preg_match('/^([^.!?]*[\.!?]+){0,2}/', strip_tags($post->post_content), $lyhenne);
						echo $lyhenne[0];
						?></p>
						<?php } else { ?>
						<?php the_excerpt(''); ?>
						<?php } ?>
					</div><!-- .entry-content -->
					
					<?php edit_post_link( __( 'Muokkaa sivua', 'light' ), '<p class="edit">', '</p>' ); ?>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>
		
		<div class="container">
			<?php my_pagination(); ?>
		</div>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
