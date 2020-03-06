<?php
/**
 *
 * Template Name: Komennot
 *
 * @package light
 */

get_header(); ?>

<section class="block block-commands">

  <div class="row">
    <p><code>!komennot</code>
      <span class="description">Antaa tämän sivun linkin.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/commands.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!battle <span>kaljaa, kahvia</span></code>
      <span class="description">Kertoo annetuista vaihtoehdoista todennäköisyydet.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/battle.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!do</code>
      <span class="description">Keksii tekemistä.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/do.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!sää <span>kaupunki</span></code>
      <span class="description">Hakee sään ilmatieteen laitokselta.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/fmi.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!asetasää <span>kaupunki</span></code>
      <span class="description">Asettaa sään käyttäjällesi, jotta voit jatkossa kirjoittaa vain !sää.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/fmi.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!horo <span>skorpioni</span></code>
      <span class="description">Näyttää Iltalehden päivän horoskoopin.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/horo.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!lmgtfy <span>sana</span></code>
      <span class="description">Googlaa sanan sarkastiseen sävyyn.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/lmgtfy.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!matka <span>helsinki riihimaki</span></code>
      <span class="description">Kertoo kahden kaupungin välisen matkan. Ei tue ääkkösiä juuri nyt.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/matka.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!olenaa</code>
      <span class="description">Joo mäki oon servu. :P</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/olenaa.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!muistuta <span>02:00 nukkumaan</span></code>
      <span class="description">Muistuttaa asioista haluttuun aikaan.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/remind.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!säännöt</code>
      <span class="description">Antaa linkin kanavan sääntöihin.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/rules.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!statsit</code>
      <span class="description">Antaa linkin kanavan tilastoihin. Toimii myös komennolla !tilastot.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/statsurl.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!vitsi</code>
      <span class="description">Kertoo vitsin.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/vitsi.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!pvm</code>
      <span class="description">Kertoo päivän, viikon ja nimipäivät.</span>
      <a href="https://github.com/pulinairc/statbot/blob/master/scripts/pvm.tcl" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!toptod</code>
      <span class="description">Kertoo päivän kovimmat pulisijat.</span>
      <a href="https://github.com/pulinairc/statbot/blob/master/scripts/toptod.tcl" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!peak</code>
      <span class="description">Kertoo kanavan käyttäjäennätyksen.</span>
      <a href="https://github.com/pulinairc/statbot/blob/master/scripts/peak.tcl" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!seen <span>rolle</span></code>
      <span class="description">Kertoo milloin käyttäjä on nähty viimeksi ja mitä hän sanoi viimeksi.</span>
      <a href="https://github.com/pulinairc/statbot/blob/master/scripts/sseen.tcl" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>

  <div class="row">
    <p>
      <code>!pelit</code>
      <span class="description">Ohjaa Pelit-sivulle.</span>
      <a href="https://github.com/pulinairc/kummitus/blob/master/modules/games.py" aria-label="Lähdekoodi"><?php include get_theme_file_path( '/svg/github.svg' ); ?></a>
    </p>
  </div>  
</section>

<?php get_footer(); ?>
