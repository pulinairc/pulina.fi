<?php get_header(); ?>

<?php if (have_posts()) : ?>
<?php $count = 0; ?>
<?php while (have_posts()) : the_post(); ?>
<?php $count++; ?>

<?php if ($count == 1) { include('ads.php'); } ?>

<div <?php post_class() ?> id="post-<?php the_ID(); ?>">

<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Pysyvä linkki artikkeliin"><?php the_title(); ?></a> <span class="muokkaa"><?php edit_post_link('(muokkaa)', '', ''); ?></span></h2>

<div class="kirjoittajan-tiedot">
<div class="kirjoittaja" style="background:url('<?php bloginfo('template_url'); ?>/<?php the_author(); ?>.png') no-repeat;"></div>
<div class="kuka-kirjoittaa"><strong><?php the_author(); ?></strong><br /><?php the_author_description(); ?></div>
</div>

<div class="aika">
<?php if (function_exists('time_since')) { ?>
<?php echo time_since(abs(strtotime($post->post_date_gmt . " GMT")), time()) . " sitten."; ?>
<?php } else { ?>
<?php the_time('l') ?>, <?php the_time('j. F') ?>ta <?php the_time('Y') ?>
<?php } ?>
</div> 

<div class="komm"><?php comments_popup_link('Kommentoi ensimmäisenä', '1 kommentti - kommentoi', '% kommenttia - kommentoi'); ?></div>
<?php the_content(''); ?>

<?php include('facebook-like.php'); ?>
</div>


<?php endwhile; ?>

<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); ?>
<?php } else { ?>
<div class="navigation">
<div class="alignleft"><?php next_posts_link('&laquo; vanhemmat') ?></div>
<div class="alignright"><?php previous_posts_link('uudemmat &raquo;') ?></div>
</div>
<?php } ?>

<?php else : ?>

<div id="pagecontent" class="post">
	
<h2 class="pageh2">Anteeksi.</h2>

<p>Täältä ei löydy mitään. Sivu voi olla tulossa, siirretty, tai poistettu. Yritä myöhemmin uudelleen? Kiitos. Anteeksi. Napalmia.</p>

</div>
</div>

<?php endif; ?>

</div>

<?php get_footer(); ?>

