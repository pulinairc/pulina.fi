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
      <div class="col col-content">
        <div class="content">
          <h1>IRC ei kuole koskaan, jos se meistä on kiinni</h1>
          <p><b>Irkissä on sitä jotain.</b> Pulinan ideana on ollut alusta asti pitää hengissä IRCin taikaa. Tervetuloa kanavalle!</p>

          <!-- defaults: {
                name: "Pulina",
                host: "irc.quakenet.org",
                port: 6667,
                password: "",
                tls: false,
                rejectUnauthorized: true,
                nick: "pulisija%%",
                username: "",
                realname: "The Lounge User",
                join: "#pulina",
        }, -->

          <form method="get" action="https://chat.pulina.fi" class="form-join">
            <input type="hidden" name="name" value="Pulina">
            <input type="hidden" name="host" value="irc.quakenet.org">
            <input type="hidden" name="join" value="#pulina">
            <input type="hidden" name="realname" value="The Lounge User">
            <input type="hidden" name="rejectUnauthorized" value="false">
            <input type="hidden" name="tls" value="false">
            <input type="hidden" name="port" value="6667">
            <input type="text" class="nick" id="nick" name="nick" value="" placeholder="Nimimerkkisi">
						<button type="submit">/join #pulina</button>
          </form>

        </div>
      </div>

      <div class="col">
        <div class="irc-scroller-wrapper">
          <iframe src="<?php echo esc_url( get_home_url() ); ?>/irclog.php"   frameborder="0" class="irc-scroller" tabindex="-1"></iframe>
          <?php include get_theme_file_path( '/svg/repo-terminal-glow.svg' ); ?>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="block block-hall-of-fame">
  <div class="container">

    <!-- Toptod markup here, TODO: Add correct screen-reader-text markup to peikko.us/toptod.php -->
    <h2>!toptod, eli päivän aktiivisimmat</h2>

      <ol><li>
          <div class="points">
            <div class="bar"><div class="progress progress-120" style="width: 120%;"><b>mustikkasoppa</b> <span class="value">2400</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-50" style="width: 45.2%;"><b>Nefastos</b> <span class="value">904</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-50" style="width: 43.1%;"><b>ivy_</b> <span class="value">862</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-40" style="width: 33.55%;"><b>kummitus</b> <span class="value">671</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-30" style="width: 25.8%;"><b>rolle</b> <span class="value">516</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-20" style="width: 18.15%;"><b>lapyo</b> <span class="value">363</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-20" style="width: 13%;"><b>hendrix</b> <span class="value">260</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-20" style="width: 12.2%;"><b>nmr</b> <span class="value">244</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-20" style="width: 11.35%;"><b>R1NN1</b> <span class="value">227</span></div></div>
          </div>
          </li><li>
          <div class="points">
            <div class="bar"><div class="progress progress-10" style="width: 7.6%;"><b>LM-</b> <span class="value">152</span></div></div>
          </div>
          </li></ol>
    </div>
    <!-- Toptod markup ends -->

  </div>
</section>

</main>

<?php get_footer();
