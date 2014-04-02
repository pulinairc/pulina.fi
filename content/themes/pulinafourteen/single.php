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

					<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			
				<div class="entry-content">
					<?php the_content(); ?>
				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div><!--/.the-blog-post-->

				<div class="jakonapit">
					
					<!-- Facebook -->
					<div class="nappi">
						<div id="fb-root"></div>
						<script>(function(d, s, id) {
						  var js, fjs = d.getElementsByTagName(s)[0];
						  if (d.getElementById(id)) return;
						  js = d.createElement(s); js.id = id;
						  js.src = "//connect.facebook.net/fi_FI/all.js#xfbml=1&appId=526300140759831";
						  fjs.parentNode.insertBefore(js, fjs);
						}(document, 'script', 'facebook-jssdk'));</script>
						<div class="fb-like" data-href="<?php the_permalink(); ?>" data-send="false" data-layout="button_count" data-width="130" data-show-faces="false"></div>
					</div>

					<!-- Twitter -->
					<div class="nappi">
						<a href="https://twitter.com/share" class="twitter-share-button" data-via="rolle" data-lang="fi" data-related="hullujusa,rolle" data-hashtags="digitoimistodude">Twiittaa</a>
						<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
					</div>

					<!-- Google+ -->

					<!-- Place this tag where you want the +1 button to render. -->

					<div class="nappi">
						<div class="g-plusone" data-size="medium"></div>
						
						<!-- Place this tag after the last +1 button tag. -->
						<script type="text/javascript">
						  window.___gcfg = {lang: 'fi'};
						
						  (function() {
						    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
						    po.src = 'https://apis.google.com/js/plusone.js';
						    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
						  })();
						</script>
					</div>

				</div>

<div class="post-meta">
	<p class="cat"><?php $category = get_the_category(); if($category[0]){ echo '<a href="'.get_category_link($category[0]->term_id ).'">'.$category[0]->cat_name.'</a>'; } ?></p>
	<?php the_tags('<ul class="tags"><li>','</li><li>','</li></ul>'); ?>
</div>

    <div id="author">
    	<div class="row">

	        <div class="col-md-2 avatararea">
	        <?php if (function_exists('get_avatar')) { echo get_avatar( get_the_author_meta('email'), '100' ); }?>
	        </div>
	        <div class="col-md-10">
	            <h3>Tietoa kirjoittajasta</h3>
	            <p><?php the_author_meta('description'); ?></p>
	        </div>

        </div><!--/.row-->
    </div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
