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

// Featured image for Theme Checker (it's a requirement for theme to pass in official Theme directory)
// NB! Our dev version uses newtheme.sh build script which cleans ups things including this next line
$thumbnail = wp_get_attachment_url( get_post_thumbnail_id() ) ?: THEME_SETTINGS['default_featured_image'];

get_header(); ?>

<main class="site-main">

<section class="block block-hero block-hero-fp">

  <div class="container">
    <div class="cols">
      <div class="col">
        <div class="content">
          <h1>Keskustelun taikaa</h1>
          <p><b>IRCissä on sitä jotain.</b> Pulinan ideana on ollut alusta asti pitää hengissä IRCin taikaa. Tervetuloa pulinalle!</p>
        </div>
      </div>

      <div class="col">
        <div class="irclog-wrapper">
          <iframe src="<?php echo esc_url( get_home_url() ); ?>/irclog.php"   frameborder="0" class="irclog" tabindex="-1"></iframe>
          <?php include get_theme_file_path( '/svg/repo-terminal-glow.svg' ); ?>
        </div>
      </div>
    </div>
  </div>
</section>

</main>

<?php get_footer();
