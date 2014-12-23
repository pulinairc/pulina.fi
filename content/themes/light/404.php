<?php
/**
 * Sivua ei löydy -sivu.
 *
 * @package light
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<div class="slide">
		<div class="container">

			<section class="error-404 not-found">
					<h2 class="entry-title"><?php _e( 'Sivua ei löydy.', 'light' ); ?></h2>
					<p><?php _e( 'Mitään ei löytynyt. Kokeile hakua?', 'light' ); ?></p>

					<?php get_search_form(); ?>

			</section><!-- .error-404 -->

		</div>
		</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
