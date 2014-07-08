<?php
/**
 * Template Name: Etusivu
 * @package pulinafourteen
 */

get_header(); ?>

	<div id="primary" class="frontpage-content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
			<div class="frontpage">

				<div class="entry-content">
					<?php the_content(); ?>
				</div><!-- .entry-content -->
			
			</div><!--/.frontpage-->

			<div class="infograafit">

				<div class="online">

					<div class="kayttajat-nyt kayttajat">
						<h3>Paikalla juuri nyt</h3>
						<?php include('inc/paikalla.php'); ?>
					</div>

					<div class="kayttajat-ennatys kayttajat">
						<h3>Käyttäjäpiikki</h3>
						<span class="peak numero"><?php include('inc/peak.php'); ?></span>
					</div>

				</div><!--/.online-->

			</div><!--/.infograafit-->

				<div class="irclog">
					<?php include('inc/scroller.php'); ?>
				</div>
				<div class="type">
				<a href="<?php echo get_home_url(); ?>/irkkiin" class="btn">Lähetä viesti</a>
				<p data-list="Moro, olen uusi täällä!;Hei, mitä tyypit?;Mikäs tää pulina on?;Derp derp derp derp derp;Hahahahahaha :D;Gerrye vauhdissa;samiy <3;!battle pulina, jotain muuta"></p>
				</div>

			<div class="blog-summaries frontcol">

			<div class="blogposts">

			<h3>Blogissa viimeksi</h3>

			<?php
			$args = array( 'numberposts' => 3 );
			$lastposts = get_posts( $args );
			foreach($lastposts as $post) : setup_postdata($post); ?>
				
				<div class="blog-post">

					<div class="author">
					<?php echo get_avatar(get_the_author_email(), '50' ); ?>
					<p><?php echo get_the_author_meta('nickname'); ?></p>
					</div>

					<div class="excerpt">
					<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<?php if ( ! has_excerpt() ) { ?>
					<p><?php 
					$lause = preg_match('/^([^.!?]*[\.!?]+){0,2}/', strip_tags($post->post_content), $lyhenne);
					echo $lyhenne[0];
					?></p>
					<?php } else { ?>
					<?php the_excerpt(''); ?>
					<?php } ?>
					</div>

				</div>
			<?php endforeach; ?>

			<div class="more">
				<p><a href="<?php echo get_home_url(); ?>/blogi">Lisää bloggauksia &rsaquo;</a></p>
			</div>

			</div><!--/.blogposts-->

			<div class="urlit">

			<h3>Viimeisimmät linkit kanavalla</h3>

				<ul class="linkkilista">
					<?php include('inc/viimeisimmat-urlit.php'); ?>
				</ul>

			<div class="more">
				<p><a href="http://peikko.us/pulinalinkit">Lisää linkkejä &rsaquo;</a></p>
			</div>

			</div>

			</div>


				<div class="ministatsit">
					<?php include('inc/ministats.php'); ?>
				</div>

				<div class="tanaan-pulistu">
					<div class="pulinat"></div>
				</div>

			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
