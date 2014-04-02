<?php
/**
 * Arkistosivu
 * Dokumentaatiota: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package pulina-2014
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<div class="archive-title">
				<div class="container">
				<h1>
					<?php
						if ( is_category() ) :
							single_cat_title();

						elseif ( is_tag() ) :
							single_tag_title();

						elseif ( is_author() ) :
							printf( __( 'Tekijä: %s', 'pulina-2014' ), '<span class="vcard">' . get_the_author() . '</span>' );

						elseif ( is_day() ) :
							printf( __( 'Päivä: %s', 'pulina-2014' ), '<span>' . get_the_date() . '</span>' );

						elseif ( is_month() ) :
							printf( __( 'Kuukausi: %s', 'pulina-2014' ), '<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'THEMENAME' ) ) . '</span>' );

						elseif ( is_year() ) :
							printf( __( 'Vuosi: %s', 'pulina-2014' ), '<span>' . get_the_date( _x( 'Y', 'yearly archives date format', 'THEMENAME' ) ) . '</span>' );

						elseif ( is_tax( 'post_format', 'post-format-aside' ) ) :
							_e( 'Asides', 'pulina-2014' );

						elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) :
							_e( 'Galleriat', 'pulina-2014');

						elseif ( is_tax( 'post_format', 'post-format-image' ) ) :
							_e( 'Kuvat', 'pulina-2014');

						elseif ( is_tax( 'post_format', 'post-format-video' ) ) :
							_e( 'Videot', 'pulina-2014' );

						elseif ( is_tax( 'post_format', 'post-format-quote' ) ) :
							_e( 'Lainaukset', 'pulina-2014' );

						elseif ( is_tax( 'post_format', 'post-format-link' ) ) :
							_e( 'Linkit', 'pulina-2014' );

						elseif ( is_tax( 'post_format', 'post-format-status' ) ) :
							_e( 'Tilapäivitykset', 'pulina-2014' );

						elseif ( is_tax( 'post_format', 'post-format-audio' ) ) :
							_e( 'Äänet', 'pulina-2014' );

						elseif ( is_tax( 'post_format', 'post-format-chat' ) ) :
							_e( 'Chatit', 'pulina-2014' );

						else :
							_e( 'Arkistot', 'pulina-2014' );

						endif;
					?>
				</h1>
				</div>
				</div>
				<?php
					// Show an optional term description.
					$term_description = term_description();
					if ( ! empty( $term_description ) ) :
						printf( '<div class="taxonomy-description">%s</div>', $term_description );
					endif;
				?>
			</header><!-- .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php
					/* Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'content', get_post_format() );
				?>

			<?php endwhile; ?>

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

<?php get_footer(); ?>
