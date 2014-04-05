<?php
/**
 * Päätemplate. Geneerisin tiedosto mitä voi olla. Vaaditaan style.css:n lisäksi, muuten teema ei näy missään.
 * Tätä käytetään, jos mikään muu ei natsaa. Esim. etusivu jos home.php:ta ei ole olemassa.
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

					<h2 class="entry-time">

						<?php if (function_exists('time_since')) { ?>
						<?php echo time_since(abs(strtotime($post->post_date_gmt . " GMT")), time()) . " sitten."; ?>
						<?php } else { ?>
						<?php the_time('l') ?>na, <?php the_time('j. F') ?>ta <?php the_time('Y') ?>
						<?php } ?>

					</h2>
					<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			
				<div class="entry-content">
					<?php the_content(); ?>
				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
