<?php
/**
 * Hall of fame.
 *
 * @package annastiina
 */

namespace Air_Light;

?>

<section class="block block-hall-of-fame">
  <div class="container">

    <div class="cols">
      <div class="col">
        <?php get_template_part( 'template-parts/modules/toptod' ); ?>
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
