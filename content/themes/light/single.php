<?php
/**
 * Yksittäinen blogipostaus.
 *
 * @package light
 */

get_header(); ?>

	<div id="primary" class="content-area firstcontainer">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">

			<div class="the-blog-post">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-title"><?php the_title(); ?></h2>
					<time class="entry-time" datetime="<?php get_the_time('c'); ?>" pubdate="pubdate"><?php echo ucfirst(get_the_time('l')) ?>na, <?php the_time('j.'); ?> <?php the_time('F'); ?>ta <?php the_time('Y') ?> kello <?php the_time('G:i') ?></time>

				<div class="entry-content">
					<?php the_content(); ?>

    <div id="author">

	        <div class="avatararea">
	        	<?php if (function_exists('get_avatar')) { echo get_avatar( get_the_author_meta('email'), '82' ); } ?>
				<h3><?php echo get_the_author_meta('first_name'); ?> <?php echo get_the_author_meta('last_name'); ?></h3>
				<p><?php the_author_meta('description'); ?></p>
	        </div>

    </div>

	<div class="post-navigation">
    	<div class="prev">
    		<?php previous_post_link( '&lt; %link' ); ?>
    	</div>
    	<div class="next">
    		<?php next_post_link( '%link &gt;' ); ?>
    	</div>
    </div>

					<?php edit_post_link( __( 'Muokkaa sivua', 'light' ), '<p class="edit">', '</p>' ); ?>

				</div><!-- .entry-content -->

			</article><!-- #post-## -->
			</div><!--/.the-blog-post-->

<div class="post-meta">
	<p class="cat"><i class="fa fa-list"></i> <?php $category = get_the_category(); if($category[0]){ echo '<a href="'.get_category_link($category[0]->term_id ).'">'.$category[0]->cat_name.'</a>'; } ?></p>
	<?php the_tags('<ul class="tags"><li>','</li><li>','</li></ul>'); ?>
</div>

			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

					<div class="comments-wrap">
						<div class="container">
							<?php comments_template(); ?>
						</div>
					</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
