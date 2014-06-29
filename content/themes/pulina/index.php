<?php get_header(); ?>
<?php if (have_posts()) : ?>
<?php while (have_posts()) : the_post(); ?>
<div <?php post_class() ?> id="post-<?php the_ID(); ?>">

<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Pysyvä linkki artikkeliin"><?php the_title(); ?></a> <span class="muokkaa"><?php edit_post_link('(muokkaa)', '', ''); ?></span></h2>

<div class="aika"><?php the_time('l') ?> <?php the_time('j. F') ?>ta <?php the_time('Y') ?>, <?php the_time('H.i') ?></div> 
<div class="komm"><?php comments_popup_link('Ei kommentteja', '1 kommentti', '% kommenttia'); ?></div>
<?php the_content(''); ?>
<p class="views">Tämä artikkeli on luettu <b><?php echo_post_views(get_the_ID()); ?></b> kertaa ja sen kirjoitti <b><?php the_author(); ?></b>.<br />
Artikkelissa käytetyt avainsanat: <?php the_tags('') ?></p>
<?php include('facebook-like.php'); ?>
</div>

<?php include('ads.php'); ?>

<?php comments_template(); ?>

</div>

<?php endwhile; ?>

<div class="navigation">
<div class="alignleft"><?php next_posts_link('&laquo; vanhemmat') ?></div>
<div class="alignright"><?php previous_posts_link('uudemmat &raquo;') ?></div>
</div>

<?php else : ?>

<div id="pagecontent" class="post">
	
<h2 class="pageh2">Anteeksi.</h2>

<p>Täältä ei löydy mitään. Sivu voi olla tulossa, siirretty, tai poistettu. Yritä myöhemmin uudelleen? Kiitos. Anteeksi. Napalmia.</p>

</div>
</div>
<?php endif; ?>

<?php get_footer(); ?>

