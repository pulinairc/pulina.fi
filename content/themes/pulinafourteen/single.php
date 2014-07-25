<?php
/**
 * Yksittäinen blogipostaus.
 *
 * @package pulinafourteen
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-blog-post">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-time">

						<meta itemprop="datePublished" content="<?php the_time('Y-m-d') ?>"><?php echo ucfirst(get_the_time('l')) ?>na, <?php the_time('j. F') ?>ta <?php the_time('Y') ?></meta>

					</h2>
					
					<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			
				<div class="entry-content">
					<?php the_content(); ?>
					<p><?php edit_post_link( __( 'Muokkaa', 'pulinafourteen' ), '<span class="edit-link">', '</span>' ); ?></p>	
				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div><!--/.the-blog-post-->

<div class="post-meta">
	<?php the_tags('<ul class="tags"><li>','</li><li>','</li></ul>'); ?>
</div>
			
			</div><!--/.container-->


		</main><!-- #main -->
	</div><!-- #primary -->
	
    <div id="author">

	        <div class="authorinfo">
	            <h3>Tietoa kirjoittajasta</h3>
	            <p><?php the_author_meta('description'); ?></p>
	        </div>

	        <div class="avatararea">
	        <?php if (function_exists('get_avatar')) { echo get_avatar( get_the_author_meta('email'), '100' ); }?>
	        </div>

    </div>

		<?php endwhile; // end of the loop. ?>

		<div class="comments-wrap">
			<div class="container">
				<?php comments_template(); ?>
			</div>
		</div>



<?php get_footer(); ?>