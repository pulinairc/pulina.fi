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

    <div class="cols">
      <div class="col">
        <?php get_template_part( 'template-parts/toptod' ); ?>
      </div>
      <div class="col col-content">
        <h2 class="block-title">Pala nostalgiaa</h2>
        <p class="larger">Muistatko ajat, jolloin netissä ei ollut naamakuvia tai oikeita nimiä, vaan kaikki keskustelivat nimimerkeillä? Muistatko Kiss.fm chatin, jossa oli aina vilkasta? Muistatko sen, kun ei tarvinnut tuntea ketään netin keskusteluhuoneessa tai miettiä erityisemmin mitä sanoo, kunhan on kohtelias muita kohtaan? Sitä on pulina.</p>

        <p>Vuonna 1988 kehitetty ja edelleen kehittyvä IRC on täynnä nostalgiaa ja palauttaa hyvät vanhat chat-ajat mieleen. Vaikka et olisikaan ns. Internet-dinosaurus tai "vanhan polven irkkaaja", IRCissä on sitä jotain. Pulina on vapautettu, eikä sen laatua tai määrää ei rajoiteta turhaan käyttäytymissääntöjen puitteissa. Jokainen on tervetullut ja vapaa olemaan sellainen kuin on.</p>

        <p class="how-to">Irkkiin pääsee selaimella, Windowsilla, Macilla, Linuxilla, iPhonella ja Androidilla.</p>
        <div class="clients">
          <?php include get_theme_file_path( '/svg/platform-windows.svg' ); ?>
          <?php include get_theme_file_path( '/svg/platform-apple.svg' ); ?>
          <?php include get_theme_file_path( '/svg/platform-linux.svg' ); ?>
          <?php include get_theme_file_path( '/svg/platform-google.svg' ); ?>
          <?php include get_theme_file_path( '/svg/platform-chrome.svg' ); ?>
        </div>

      </div>
    </div>

  </div>
</section>

</main>

<?php get_footer();
