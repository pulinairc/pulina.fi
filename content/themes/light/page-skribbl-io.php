<?php
/**
 *
 * Template Name: Skribbl-io
 *
 * @package light
 */

get_header(); ?>

<section class="slide slide-games slide-skribbl shade-even-darker">

  <div data-video="_SQmdP-Dvag" class="video js-background-video">
    <div class="background">
      <div id="yt-player-skribbl"></div>
    </div>
  </div>
  <div class="video-overlay js-video-overlay" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/maxresdefault-skribbl.jpg');"></div> 

  <div class="container">

    <h2>Skribbl.io</h2>
    <p>Skribbl on "piirrä ja arvaa" peli, josta löytyy suomenkieliset sanat. Kukin piirtää vuorollaan saamansa sanan, jota muut sitten yrittävät arvata. Piirtäjä piirtää, eli ei sitten kirjoitella!</p>

    <div class="how-to">
      <h3>Näin pelaat</h3>

      <ol>
        <li>Kerää porukka kasaan IRCissä</li></ul>
        <li>Luo huone</li>
        <li>Sitten vaan peliä!</li>
      </ol>
    </div>

    <p><a href="https://skribbl.io/" class="button button-ghost">Piirtämään tästä</a></p>
  </div>

</section><!--/.slide-->

<?php get_footer(); ?>
