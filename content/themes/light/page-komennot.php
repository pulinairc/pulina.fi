<?php
/**
 * @package light
 * Template Name: Komennot
 */

get_header(); ?>

	<div id="primary" class="content-area firstcontainer">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">

			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h1 class="entry-title"><?php the_title(); ?></h1>

				<div class="entry-content">

				<div class="row">

					<div class="col-md-12">
					<?php the_content(); ?>

					<p>IRC-botit eli kanavan ylläpitäjän ohjelmoimat muiden käyttäjien komentoihin ja viesteihin vastaavat ohjelmat ovat hauskuuttaneet IRC-kanavia vuosikaudet. Ilman botteja IRC ei olisi niin hauska paikka.</p>

					<p>Pulinalla on yksi botti, nimeltään <strong>kummitus</strong>. Botissa on lukuisia toimintoja. Lisää saa pyytämällä. Tältä sivulta pitäisi löytyä kaikki käytössä olevat kätevät komennot.</p>

					<p><span class="poispaalta">Punaisella</span> näkyvät ovat pois päältä. Ominaisuudet näkyvät listassa siinä järjestyksessä kun ne on ladattu bottiin.</p>

          <p>Jos joku mättää, botin keskeisimmät toiminnot löytyvät <a href="https://github.com/pulinairc/kummitus">avoimena lähdekoodina GitHubista</a>, joten siitä vaan koodaamaan paranteluja.</p>

					<p><?php edit_post_link( __( 'Muokkaa', 'light' ), '<span class="edit-link">', '</span>' ); ?></p>
					</div>

				</div><!-- .entry-content -->

			</article><!-- #post-## -->
			</div>

			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

	<div class="komennot">

<div class="container">
<table class="rwd-table">

  <tr>
  	<th>Ominaisuus</th>
    <th>Komento</th>
    <th>Tietoa</th>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">remind</i></td>
    <td data-th="Komento"><code>!muistuta <i>nick aika asia</i></code></td>
    <td data-th="Tietoa">Saat muistutuksen hailaittina haluttuun aikaan. Voimassaolevat muistutukset näet komennolla <code>!muistutukset</code> ja esimerkkejä komennoista <code>!muistuttaja</code></td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">math</i></td>
    <td data-th="Komento"><code>!math laskutoimitus</code></td>
    <td data-th="Tietoa">Laskee laskutoimituksen puolestasi. Esimerkkejä: <code>!math 1+1</code> <code>!math 3043*(202+34)</code>
<code>!math sqrt(5)*s(5)</code> <code>!math scale=2; 1/2</code></td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">vitsit</i></td>
    <td data-th="Komento"><code>!vitsi</code></td>
    <td data-th="Tietoa">Kertoo satunnaisen vitsin massiivisesta vitsitietokannasta. Varoitus: Sisältää enimmäkseen viinavitsejä.</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">sano</i></td>
    <td data-th="Komento"><code>!sano jotain</code></td>
    <td data-th="Tietoa">Käskee botin sanomaan jotain. Käytetään lähinnä testailuun. Esim: <code>!sano Miau</code></td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">linkit</i></td>
    <td data-th="Komento"><code>!linkit</code></td>
    <td data-th="Tietoa">Kertoo irkistä (jokaiselta kanavalta, jolla rolle on) kerättyjen linkkien osoitteen. Huom, Pulinan etusivulta näkee myös lisää linkkejä, sekä <a href="http://peikko.us/linkit">täältä</a>.</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">urlit</i></td>
    <td data-th="Komento"><code>!urlit</code></td>
    <td data-th="Tietoa">Kertoo pulinalta kerättyjen linkkien osoitteen. Huom, Pulinan etusivulta näkee myös.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">pics</i></td>
    <td data-th="Komento"><code>!pics</code></td>
    <td data-th="Tietoa">Antaa osoitteen paikkaan, josta näkee random-irkkikuvat koottuna yhteen paikkaan.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">kotisivu</i></td>
    <td data-th="Komento"><code>!kotisivu</code></td>
    <td data-th="Tietoa">Jos jostain syystä unohdat pulinan kotisivujen osoitteen, tämä kertoo sen (www.pulina.fi).</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">statsit</i></td>
    <td data-th="Komento"><code>!statsit</code></td>
    <td data-th="Tietoa">Antaa osoitteen kanavan tilastosivuille.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">kuukausistatsit</i></td>
    <td data-th="Komento"><code>!kuukausistatsit</code></td>
    <td data-th="Tietoa">Kanavan tilastot (kuluva kuukausi).</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">komennot</i></td>
    <td data-th="Komento"><code>!komennot</code></td>
    <td data-th="Tietoa">Tämän sivun osoite, eli tietoa komennoista.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">pvm</i></td>
    <td data-th="Komento"><code>!pvm</code></td>
    <td data-th="Tietoa">Kertoo kuluvan päivän sekä nimipäivät. Tekee saman automaattisesti päivän vaihtuessa.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">toptod</i></td>
    <td data-th="Komento"><code>!toptod</code></td>
    <td data-th="Tietoa">Kuluvan päivän ennätykset, top-lista siitä kuka on ollut eniten äänessä. Tulee vain privaattina noticena käyttäjälle.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">välimatkat</i></td>
    <td data-th="Komento"><code>!matka</code></td>
    <td data-th="Tietoa">Laskee matkan kahden paikan välillä (Suomen sisällä), sekä keston jos numero on annettu ("Välimatka Helsinki - Kotka on 133 km, ajoaika 100 km/h vauhdilla 1 h 19 minuutti"). Esim. <code>!matka helsinki kotka 100</code></td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">battle</i></td>
    <td data-th="Komento"><code>!battle</code></td>
    <td data-th="Tietoa">Kertoo todennäköisyydet eri asioille. Pilkulla voi erottaa vaikka kymmenen eri asiaa. Chuck Norris on aina 100%. Esim. <code>!battle kahvi,tee</code></td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">keksi</i></td>
    <td data-th="Komento"><code>!do</code></td>
    <td data-th="Tietoa">Ehdottelee tekemistä, jos vaikka sattuu olemaan tylsää.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">horo</i></td>
    <td data-th="Komento"><code>!horo</code></td>
    <td data-th="Tietoa">Kertoo päivän horoskoopin Iltalehden sivuilta. Esim. <code>!horo skorpiooni</code> tai jos olet laiska, riittää vain horoskoopin alku, esim. <code>!horo sko</code></td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">randommovies</i></td>
    <td data-th="Komento"><code>!leffa</code></td>
    <td data-th="Tietoa">Ehdottaa satunnaista leffaa katsottavaksi.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">eggdrop-fmi</i></td>
    <td data-th="Komento"><code>!sää</code></td>
    <td data-th="Tietoa">Kertoo päivän sään Ilmatieteenlaitoksen sivuilta, päivän pituuden, auringonnousun sekä laskun ja antaa ennusteen huomiselle. Esim. <code>!sää helsinki</code> tai jos ei jostain syystä toimi tai sinulla on ongelmia ääkkösten kanssa, myös <code>!keli helsinki</code> pitäisi toimia. <a href="https://github.com/ronilaukkarinen/eggdrop-fmi">Lähdekoodi löytyy GitHubista</a>.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">peak</i></td>
    <td data-th="Komento"><code>!peak</code></td>
    <td data-th="Tietoa">Kertoo kanavan käyttäjäennätyksen ja milloin se tapahtui viimeksi.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">seend</i></td>
    <td data-th="Komento"><code>!seen nick</code></td>
    <td data-th="Tietoa">Kertoo milloin käyttäjä nähtiin viimeksi, millä kanavalla ja mikä oli viimeisin viesti.</td>
  </tr>

  <tr>
    <td data-th="Ominaisuus"><i class="feat">telkku</i></td>
    <td data-th="Komento"><code>!tv kanava</code></td>
    <td data-th="Tietoa">Kertoo mitä telkkarista tulee. Käytössä olevat kanavat: tv1, tv2, mtv3, nelonen, subtv, yleteema, jim, mtv, hero, fox, ava. <a href="https://github.com/ronilaukkarinen/telkku">Lähdekoodi löytyy GitHubista</a>.</td>
  </tr>

</table>
</div>

	</div><!--/.containercol-->

<?php get_footer(); ?>
