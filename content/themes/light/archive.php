<?php
/**
 * Arkistosivu
 * Dokumentaatiota: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package light
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<div class="container">

		<?php if ( have_posts() ) : ?>

				<h1 class="maintitle">
					<?php
						if ( is_category() ) :
							single_cat_title();

						elseif ( is_tag() ) :
							single_tag_title();

						elseif ( is_author() ) :
							printf( __( 'Tekijä: %s', 'light' ), '<span class="vcard">' . get_the_author() . '</span>' );

						elseif ( is_day() ) :
							printf( __( 'Päivä: %s', 'light' ), '<span>' . get_the_date() . '</span>' );

						elseif ( is_month() ) :
							printf( __( 'Kuukausi: %s', 'light' ), '<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'light' ) ) . '</span>' );

						elseif ( is_year() ) :
							printf( __( 'Vuosi: %s', 'light' ), '<span>' . get_the_date( _x( 'Y', 'yearly archives date format', 'light' ) ) . '</span>' );

						elseif ( is_tax( 'post_format', 'post-format-aside' ) ) :
							_e( 'Asides', 'light' );

						elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) :
							_e( 'Galleriat', 'light');

						elseif ( is_tax( 'post_format', 'post-format-image' ) ) :
							_e( 'Kuvat', 'light');

						elseif ( is_tax( 'post_format', 'post-format-video' ) ) :
							_e( 'Videot', 'light' );

						elseif ( is_tax( 'post_format', 'post-format-quote' ) ) :
							_e( 'Lainaukset', 'light' );

						elseif ( is_tax( 'post_format', 'post-format-link' ) ) :
							_e( 'Linkit', 'light' );

						elseif ( is_tax( 'post_format', 'post-format-status' ) ) :
							_e( 'Tilapäivitykset', 'light' );

						elseif ( is_tax( 'post_format', 'post-format-audio' ) ) :
							_e( 'Äänet', 'light' );

						elseif ( is_tax( 'post_format', 'post-format-chat' ) ) :
							_e( 'Chatit', 'light' );

						else :
							_e( 'Arkisto', 'light' );

						endif;
					?>
				</h1>

		<?php while ( have_posts() ) : the_post(); ?>

			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			
				<div class="entry-content">
					<?php the_content(); ?>
				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			
	
		<?php endwhile; ?>
		<?php else : ?>

			<section class="no-results not-found">
					<h2 class="entry-title"><?php _e( 'Mitään ei löytynyt', 'light' ); ?></h2>
			
					<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>
			
						<p><?php printf( __( 'Valmiina ensimmäisen kirjoituksen julkaisuun? <a href="%1$s">Aloita täältä</a>.', 'light' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
			
					<?php elseif ( is_search() ) : ?>
			
						<p><?php _e( 'Mitään ei löytynyt hakutermilläsi. Hae uudelleen alta.', 'light' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php else : ?>
			
						<p><?php _e( 'Näyttäisi siltä että sivua ei löydy. Ehkä haku auttaa?', 'light' ); ?></p>
						<?php get_search_form(); ?>
			
					<?php endif; ?>
			</section><!-- .no-results -->

		<?php endif; ?>

		</div><!--/.container-->

		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_footer(); ?>
