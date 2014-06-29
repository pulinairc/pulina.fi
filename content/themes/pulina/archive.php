<?php get_header(); ?>
<?php if (have_posts()) : ?>
<?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
<div <?php post_class() ?> id="post-<?php the_ID(); ?>">

<?php /* jos kyseessä on avainsana */ if (is_tag()) { ?>


<h3>Merkinnät avainsanalle <b><?php echo $tag; ?></b> (<?php $tag = $wp_query->get_queried_object(); echo $tag->count; ?>)</h3>
		
<?php } ?>

<?php /* jos kyseessä on kategoria */ if (is_category()) { ?>

<h3>Arkisto kategoriassa <b><?php echo single_cat_title(); ?> (<?php $cat = get_the_category(); $cat = $cat[0]; echo $cat->category_count; ?>))</h3>

<?php /* If this is a daily archive */ } elseif (is_day()) { ?>

<h3>Artikkelit <?php the_time('j');?>na, <?php the_time('F');?>ssa <?php the_time('Y'); ?> (<?php $cat = get_the_category(); $cat = $cat[0]; echo $cat->category_count; ?>)</h3>

<?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
<h3>Artikkelit <?php the_time('F');?>ssa <?php the_time('Y'); ?> (<?php $cat = get_the_category(); $cat = $cat[0]; echo $cat->category_count; ?>)<h3>

<?php /* If this is a yearly archive */ } elseif (is_year()) { ?><!-- http://www.devlounge.net/articles/custom-archive-queries-for-wordpress --><h3>Arkistot vuodelta <?php the_time('Y'); ?> (<?php echo $year->post_count; ?></b> merkintä<?php if ($year->post_count> 1 ) { echo ""; } else { echo "ä"; } ?></h3>

<?php /* If this is a search */ } elseif (is_search()) { ?>

<h3>Hakutulokset (<?php $cat = get_the_category(); $cat = $cat[0]; echo $cat->category_count; ?>)</h3>

<?php /* If this is an author archive */ } elseif (is_author()) { ?>


<?php /* Testataan artikkelilaskua by:j-tek*/ ?>
<h3> Käyttäjän <?php the_author(); ?> kirjoittamat artikkelit: (<?php echo number_format_i18n( get_the_author_posts() ); ?>)</h3>
<?php /* //Testataan artikkelilaskua by:j-tek*/ ?>


<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?><h3>Arkistot</h3>

<?php } ?>

<?php while (have_posts()) : the_post(); ?>

<div <?php post_class() ?> id="post-<?php the_ID(); ?>">

<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Pysyvä linkki artikkeliin"><?php the_title(); ?></a> <span class="mmuokkaa"
><?php edit_post_link('(muokkaa)', '', ''); ?></span></h2>

<div class="kirjoittajan-tiedot">
<div class="kirjoittaja" style="background:url('<?php bloginfo('template_url'); ?>/<?php the_author(); ?>.png') no-repeat;"></div>
<div class="kuka-kirjoittaa"><strong><?php the_author(); ?></strong><br /><?php the_author_description(); ?></div>
</div>

<div class="aika"><?php the_time('l') ?> <?php the_time('j. F') ?>ta <?php the_time('Y') ?>, <?php the_time('H.i') ?></div>
<div class="komm"><?php comments_popup_link('Ei kommentteja', '1 kommentti', '% kommenttia'); ?></div>
<?php the_content(''); ?>
<p class="views">Tämä artikkeli on <?php if(function_exists('the_views')) { the_views(); } ?> ja sen kirjoitti <b><?php the_author(); ?></b>.</p>
<?php include('facebook-like.php'); ?>
</div>

<?php endwhile; ?>

<div class="navigation">
<div class="alignleft"><?php next_posts_link('&laquo; vanhemmat') ?></div>
<div class="alignright"><?php previous_posts_link('uudemmat &raquo;') ?></div>
</div>

</div>
</div>

<?php else : ?>

<div id="pagecontent" class="post">
	
<h2>Anteeksi.</h2>

<p>Täältä ei löydy mitään. Sivu voi olla tulossa, siirretty, tai poistettu. Yritä myöhemmin uudelleen? Kiitos. Anteeksi. Napalmia.</p>

</div>
</div>

<?php endif; ?>

<?php get_footer(); ?>