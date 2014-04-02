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
							printf( __( 'Tekijä: %s', 'pulinafourteen' ), '<span class="vcard">' . get_the_author() . '</span>' );

						elseif ( is_day() ) :
							printf( __( 'Päivä: %s', 'pulinafourteen' ), '<span>' . get_the_date() . '</span>' );

						elseif ( is_month() ) :
							printf( __( 'Kuukausi: %s', 'pulinafourteen' ), '<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'THEMENAME' ) ) . '</span>' );

						elseif ( is_year() ) :
							printf( __( 'Vuosi: %s', 'pulinafourteen' ), '<span>' . get_the_date( _x( 'Y', 'yearly archives date format', 'THEMENAME' ) ) . '</span>' );

						elseif ( is_tax( 'post_format', 'post-format-aside' ) ) :
							_e( 'Asides', 'pulinafourteen' );

						elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) :
							_e( 'Galleriat', 'pulinafourteen');

						elseif ( is_tax( 'post_format', 'post-format-image' ) ) :
							_e( 'Kuvat', 'pulinafourteen');

						elseif ( is_tax( 'post_format', 'post-format-video' ) ) :
							_e( 'Videot', 'pulinafourteen' );

						elseif ( is_tax( 'post_format', 'post-format-quote' ) ) :
							_e( 'Lainaukset', 'pulinafourteen' );

						elseif ( is_tax( 'post_format', 'post-format-link' ) ) :
							_e( 'Linkit', 'pulinafourteen' );

						elseif ( is_tax( 'post_format', 'post-format-status' ) ) :
							_e( 'Tilapäivitykset', 'pulinafourteen' );

						elseif ( is_tax( 'post_format', 'post-format-audio' ) ) :
							_e( 'Äänet', 'pulinafourteen' );

						elseif ( is_tax( 'post_format', 'post-format-chat' ) ) :
							_e( 'Chatit', 'pulinafourteen' );

						else :
							_e( 'Arkistot', 'pulinafourteen' );

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
