<?php get_header(); ?>

<h2 class="pageh2"><a href="<?php the_permalink() ?>" rel="bookmark" title="Linkki tälle sivulle"><?php the_title(); ?></a> <span class="muokkaa"><?php edit_post_link('(muokkaa)', '', ''); ?></span></h2>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

<div class="post">
<?php the_content(__('')); ?>
</div>

<?php endwhile; else: ?>
<p><?php _e('Mikään ei vastannut hakemaasi.'); ?></p>
<?php endif; ?>

</div>

<?php get_footer(); ?>
