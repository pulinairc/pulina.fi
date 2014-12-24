<?php
/**
 * Blogin template.
 *
 * @package light
 */

get_header(); ?>

<div class="note">
<p>Huom. Katselet uusia 24.12.2014 julkaistuja sivuja. Sivut ovat harrastustoimintaa, joten keskeneräisyyttä löytyy. Fiksaillaan kuntoon ajan kanssa. Ei ole niin justiinsa.</p>
</div>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-blog-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<time class="entry-time" datetime="<?php get_the_time('c'); ?>" pubdate="pubdate"><?php echo ucfirst(get_the_time('l')) ?>na, <?php the_time('j. F') ?>ta <?php the_time('Y') ?> kello <?php the_time('G:i') ?></time>

				<div class="entry-content">

					<?php the_content(); ?>
					<?php edit_post_link( __( 'Muokkaa sivua', 'light' ), '<p class="edit">', '</p>' ); ?>

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
