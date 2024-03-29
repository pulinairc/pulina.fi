<?php
/**
 * The template for displaying front page
 *
 * Contains the closing of the #content div and all content after.
 * Initial styles for front page template.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-03-03 14:38:06
 * @package annastiina
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

get_header(); ?>

<main class="site-main">
  <?php get_template_part( 'template-parts/hero-fp' ); ?>
  <?php get_template_part( 'template-parts/modules/hall-of-fame' ); ?>
  <?php get_template_part( 'template-parts/modules/gateway' ); ?>
  <?php get_template_part( 'template-parts/modules/trivia' ); ?>
  <?php get_template_part( 'template-parts/modules/infographics' ); ?>
</main>

<?php get_footer();
