<?php
/**
 * The template for displaying archive pages
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-03-17 10:17:20
 * @package annastiina
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

get_header(); ?>

<main class="site-main">
  <div class="container">

    <?php get_template_part( 'template-parts/hero-blog' ); ?>

    <section class="block block-blog has-dark-bg">
      <div class="container">
      <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <h2><a href="<?php echo esc_url( get_the_permalink() ); ?>"><?php the_title(); ?></a></h2>
          <p class="time"><time datetime="<?php the_time( 'c' ); ?>"><?php echo get_the_date( get_option( 'date_format' ) ); ?></time></p>

          <div class="content">
            <?php
              the_excerpt();
              entry_footer();
            ?>
          </div>
        </article>
      <?php endwhile; ?>
      </div>
    </section>

</main>

<?php get_footer();
