<?php
/**
 * Päätemplate. Geneerisin tiedosto mitä voi olla. Vaaditaan style.css:n lisäksi, muuten teema ei näy missään.
 * Tätä käytetään, jos mikään muu ei natsaa. Esim. etusivu jos home.php:ta ei ole olemassa.
 *
 * @package pulina-2014
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
					<?php the_content(); ?>
				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
