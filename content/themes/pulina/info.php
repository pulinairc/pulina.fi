<?php

/*
Template Name: Info
*/
?>
<?php
get_header();
?>

<h2 class="pageh2"><a href="<?php the_permalink() ?>" rel="bookmark" title="Linkki tälle sivulle"><?php the_title(); ?></a> <span class="muokkaa"><?php edit_post_link('(muokkaa)', '', ''); ?></span></h2>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<div class="post">
<?php the_content(__('')); ?>

<h2 class="pageh22">Kuka bloggaa?</h2>

<div class="bloggajat">
<?php
function contributors() {
global $wpdb;
 
$authors = $wpdb->get_results("SELECT ID, user_nicename from $wpdb->users ORDER BY display_name");

foreach($authors as $author) {
$post_count = get_usernumposts($author->ID);
echo '<div class="kirjoittajan-tiedot-info">';
echo '<div class="kirjoittaja-info" style="background:url(http://pulina.fi/wp-content/themes/pulina/';
echo the_author_meta('display_name', $author->ID).'.png) no-repeat -30px -45px;"></div>';
echo "<div class=\"kuka-kirjoittaa-info\"><strong>";
echo the_author_meta('display_name', $author->ID).'</strong><br />';
echo the_author_meta('description', $author->ID);
echo '<br />';
echo '<span class="kirjoittanut">';
echo "<a href=\"".get_bloginfo('url')."/author/";
echo the_author_meta('user_login', $author->ID).'">';
   if ($post_count == "0") { echo 'käyttäjä ei ole kirjoittanut vielä yhtään artikkelia'; } elseif ($post_count == "1") { echo 'kirjoittanut yhden artikkelin'; } else { echo 'kirjoittanut '.$post_count.' artikkelia'; }
echo '</a></span>';
echo "</div>";
echo '</div>';
}
}
contributors ();
?>
</div>
</div>

<?php endwhile; else: ?>
<p><?php _e('Mikään ei vastannut hakemaasi.'); ?></p>
<?php endif; ?>

<p class="muokattuviimeksi">Muokattu viimeksi: <?php the_time('l') ?>na, <?php the_time('j. F') ?>ta <?php the_time('Y') ?></p> 

</div>

<?php get_footer(); ?>
