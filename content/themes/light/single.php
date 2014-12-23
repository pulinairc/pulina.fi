<?php
/**
 * Yksittäinen blogipostaus.
 *
 * @package light
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-blog-post">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h2 class="entry-title"><?php the_title(); ?></h2>
					<time class="entry-time" datetime="<?php get_the_time('c'); ?>" pubdate="pubdate"><?php echo ucfirst(get_the_time('l')) ?>na, <?php the_time('j. F') ?>ta <?php the_time('Y') ?> kello <?php the_time('G:i') ?></time>

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
						<div class="gplus-button">
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

					<div class="nappi">
						
						<div class="linkedin-button">
							<script type="text/javascript" src="http://platform.linkedin.com/in.js"></script><script type="in/share" data-url="<?php the_permalink(); ?>" data-counter="right"></script>
						</div>

					</div>

				</div><!--/.jakonapit-->

<div class="post-meta">
	<p class="cat"><i class="fa fa-folder"></i> <?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'olut' ) ); ?></p>
	<?php the_tags('<i class="fa fa-tags"></i> <ul class="tags"><li>','</li><li>','</li></ul>'); ?>
</div>
			
			<?php edit_post_link( __( 'Muokkaa sivua', 'light' ), '<p class="edit">', '</p>' ); ?>
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
