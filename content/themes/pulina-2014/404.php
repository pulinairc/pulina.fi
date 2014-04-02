<?php
/**
 * Sivua ei löydy -sivu.
 *
 * @package pulina-2014
 */

get_header(); ?>

<div class="container">

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section class="error-404 not-found">
				<header class="page-header">
					<h1 class="page-title"><?php _e( 'Hups! Sivua ei löydy.', 'pulina-2014' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content">
					<p><?php _e( 'Mitään ei löytynyt. Kokeile hakua?', 'pulina-2014' ); ?></p>

					<?php get_search_form(); ?>

				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

</div>

<?php get_footer(); ?>
