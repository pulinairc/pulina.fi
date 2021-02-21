<?php
/**
 * The template for commands
 *
 * Template Name: Commands
 *
 * @Last Modified time: 2021-01-12 16:10:58
 * @package annastiina
 */

namespace Air_Light;

the_post();
get_header(); ?>

<main class="site-main">

<?php get_template_part( 'template-parts/hero', get_post_type() ); ?>

<section class="block block-page block-commands has-dark-bg">
  <div class="container has-anchors">

    <div class="cols has-anchors">
      <div class="col">
        <p>Tältä sivulta löydät <b>kummitus</b>-botin kanavakomennot. Bottiin on ladattu tällä hetkellä yhteensä 33 komentoa. Koodi löytyy <a href="https://github.com/pulinairc/kummitus">GitHubista</a>, eli bottiin saa vapaasti ohjelmoida uusia toiminnallisuuksia halutessaan.</p>
      </div>

      <div class="col">
      </div>

      <div class="col">
        <pre class="language-shell"><code>!komennot</code></pre>
        <p class="command">Antaa tämän sivun linkin.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!battle <i>kaljaa, kahvia</i></code></pre>
        <p class="command">Kertoo annetuista vaihtoehdoista todennäköisyydet.</p>
      </div>

      <div class="col">
        <pre class="language-shell">!do</pre>
        <p class="command">Keksii tekemistä.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!sää <span>kaupunki</span></code></pre>
        <p class="command">Hakee tuoreimman säämittauksen Ilmatieteen laitokselta.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!asetasää <span>kaupunki</span></code></pre>
        <p class="command">Asettaa sään käyttäjällesi, jotta voit jatkossa kirjoittaa vain !sää ilman kaupunkia.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!horo <span>skorpioni</span></code></pre>
        <p class="command">Näyttää Iltalehden päivän horoskoopin.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!lmgtfy <span>sana</span></code></pre>
        <p class="command">Myös !kvg. Googlaa sanan sarkastiseen sävyyn.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!matka <span>helsinki riihimaki</span></code></pre>
        <p class="command">Kertoo kahden kaupungin välisen matkan. Ei tue ääkkösiä juuri nyt.</p>
      </div>

      <div class="col">
        <pre class="language-shell">!olenaa</pre>
        <p class="command">Joo mäki oon servu. :P</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!muistuta <span>02:00 nukkumaan</span></code></pre>
        <p class="command">Muistuttaa asioista haluttuun aikaan. Toimii myös esim. !muistuta 2min mikro</p>
      </div>

      <div class="col">
        <pre class="language-shell">!säännöt</pre>
        <p class="command">Antaa linkin kanavan sääntöihin.</p></div>

      <div class="col">
        <pre class="language-shell"><code>!statsit</code></pre>
        <p class="command">Antaa linkin kanavan tilastoihin. Toimii myös komennolla !tilastot.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!vitsi</code></pre>
        <p class="command">Kertoo vitsin. Sisältää enimmäkseen alkoholiaiheisia vitsejä.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!pvm</code></pre>
        <p class="command">Kertoo päivän, viikon ja nimipäivät. Toimii myös !tänään.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!toptod</code></pre>
        <p class="command">Kertoo päivän kovimmat pulisijat.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!peak</code></pre>
        <p class="command">Kertoo kanavan käyttäjäennätyksen.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!seen <span>rolle</span></code></pre>
        <p class="command">Kertoo milloin käyttäjä on nähty viimeksi ja mitä hän sanoi viimeksi.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!corona <span>finland</span></code></pre>
        <p class="command">Hakee koronavirukseen (COVID-19) liittyviä määriä.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!ud <span>word</span></code></pre>
        <p class="command">Selittää englanninkielisen sanan Urban Dictionarysta.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!us <span>sana</span></code></pre>
        <p class="command">Selittää suomenkielisen sanan Urbaanista Sanakirjasta.</p>
      </div>

      <div class="col">
          <pre class="language-shell"><code>!sk <span>:fi :en käännettävä lause</span></code></pre>
      <p class="command">Kääntää lauseita eri kielille maatunnuksia hyödyntämällä.</p>
    </div>

      <div class="col">
        <pre class="language-shell"><code>!bmi <span>60 1.90</span></code></pre>
        <p class="command">Kertoo painoindeksin painon ja pituuden perusteella.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!np <span>rolle-</span></code></pre>
        <p class="command">Kertoo mitä juuri nyt soi, jos Last.fm käytössä.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!kuha</code></pre>
        <p class="command">Satunnainen lannistajakuha.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!moti</code></pre>
        <p class="command">Satunnainen motivaatiovalas.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!pakko</code></pre>
        <p class="command">Pakko ottaa.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!imdb <span>elokuvan nimi</span></code></pre>
        <p class="command">Kertoo leffan tiedot.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!next <span>The Walking Dead</span></code></pre>
        <p class="command">Kertoo seuraavan episodin ilmestymisajankohdan.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!shrug</code></pre>
        <p class="command">\_(ツ)_/</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!nfact</code></pre>
        <p class="command">Satunnainen numerofakta.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!tfact</code></pre>
        <p class="command">Tähän päivään liittyvä fakta.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!nsfw linkki</code></pre>
        <p class="command">Tarkistaa onko linkki <i>not safe for work</i> eli vääränlainen avata työpaikalla.</p>
      </div>

      <div class="col">
        <pre class="language-shell"><code>!yt hakusana</code></pre>
        <p class="command">Hakee ensimmäisenä hakusanalla löytyvän YouTube-videon.</p>
      </div>

  </div>

  </section>
</main>

<?php get_footer();
