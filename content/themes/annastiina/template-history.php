<?php
/**
 * Template Name: Kanavan historiikki
 *
 * #pulina's history from the channel logs. js/history.js draws the timeline and the panel,
 * css/history.css styles them. The page content is the lead under the title.
 *
 * @package annastiina
 */

namespace Air_Light;

the_post();
get_header(); ?>

<main class="site-main history">
  <canvas id="wash" aria-hidden="true"></canvas>

  <section class="hero">
    <div class="frame">
      <h1 id="content"><?php echo esc_html( str_replace( ' - ', "\u{00a0}- ", get_post_field( 'post_title' ) ) ); ?></h1>
      <?php the_content(); ?>
    </div>
  </section>

  <div class="frame">
    <div class="story is-loading" id="story">
      <p class="loader" role="status"><span class="loader-pac" aria-hidden="true"></span><span class="loader-dots" aria-hidden="true"></span>Ladataan historiaa</p>
      <aside class="panel">
        <h2 class="p-era"></h2>
        <div class="p-years"></div>
        <div class="p-month"></div>
        <div class="p-count"><span class="odo"></span><span class="unit">riviä</span></div>
        <div id="weeks"></div>
        <div class="p-progress"><span></span></div>
      </aside>
      <div class="timeline" id="timeline"></div>
    </div>
  </div>

  <section class="present">
    <div class="frame">
      <p class="now-live"><span class="live-indicator-block"><span class="live-indicator"><span class="circle blink" aria-hidden="true"></span>Live</span></span></p>
      <h2>Nykyhetki</h2>
      <?php get_template_part( 'template-parts/irc-scroller' ); ?>
    </div>
  </section>

  <section class="get">
    <div class="frame">
      <h2>Lataa Pulina-app ja tule mukaan tekemään Pulinasta parempi paikka</h2>
      <p class="get-lead">Highlightit, reaktiot, kuvat ja ilmoitukset toimivat suoraan. App on suunniteltu helppokäyttöiseksi: ei tarvitse kuin valita nimimerkki, ja olet kanavalla.</p>
      <?php get_template_part( 'template-parts/app-download' ); ?>
    </div>
  </section>

  <div class="tip" id="tip" hidden></div>
</main>

<?php get_footer();
