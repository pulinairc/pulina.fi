<?php
/**
 * @package pulinafourteen
 * Template Name: Komennot
 */

get_header(); ?>

<div class="plakaatti">
<p>Komentojen listaaminen jäi vähän kesken. Yritän listailla joskus loppuun. Teen tätä vapaa-ajallani, joten saattaa mennä tovi. Kiitos kärsivällisyydestä! <i>&mdash; Rolle 8.7.2014</i></p>
</div>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<h1 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
			
				<div class="entry-content">

				<div class="row">
				
					<div class="col-md-12">
					<?php the_content(); ?>

					<p>IRC-botit eli kanavan ylläpitäjän ohjelmoimat muiden käyttäjien komentoihin ja viesteihin vastaavat ohjelmat ovat hauskuuttaneet IRC-kanavia vuosikaudet. Ilman botteja IRC ei olisi niin hauska paikka.</p>

					<p>Pulinalla on yksi botti, nimeltään <strong>kummitus</strong>. Botissa on lukuisia toimintoja. Lisää saa pyytämällä. Tältä sivulta pitäisi löytyä kaikki käytössä olevat kätevät komennot.</p>

					<p><span class="poispaalta">Punaisella</span> näkyvät ovat pois päältä. Ominaisuudet näkyvät listassa siinä järjestyksessä kun ne on ladattu bottiin.</p>

					<p><?php edit_post_link( __( 'Muokkaa', 'pulinafourteen' ), '<span class="edit-link">', '</span>' ); ?></p>
					</div>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

	<div class="komennot">

<table class="rwd-table">

  <tr>
  	<th>Ominaisuus</th>
    <th>Komento</th>
    <th>Käyttö</th>
    <th>Mitä tapahtuu</th>
  </tr>

  <tr class="poispaalta">
  	<td data-th="Ominaisuus"><i class="feat">megahal</i></td>
    <td data-th="Komento">ks. Käyttö</td>
    <td data-th="Käyttö">Tekoäly. Puhu kanavalla, puhu botille osoittamalla viestit kummitukselle.</td>
    <td data-th="Mitä tapahtuu">Oppii kanavalla puhuttuja asioita ja vastailee ihmisille oman mielen mukaan.</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">remind</i></td>
    <td data-th="Komento"><code>!muistuta nick aika asia
    </code></td>
    <td data-th="Käyttö">Esimerkkejä: <code>!muistuta omanick "tomorrow 10:00" Soita patelle
    </code> tai <code>!muistuta omanick "2009-12-31 23:59" Hyvää uutta vuotta!</code> tai <code>!muistuta omanick "10 min" Munat pois hellalta</code> tai <code>!muistuta omanick "2 hours" mene töihin</code>. Poista muistutus komennolla <code>!peruuta &lt;id&gt;</code>, aktiiviset muistutukset ja niiden id:t näet komennolla<code>!muistutukset</code>. Jos unohdat tämän, kirjoita <code>!muistuttaja</code>.</td>
    <td data-th="Mitä tapahtuu">Saat muistutuksen hailaittina haluttuun aikaan.</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">math</i></td>
    <td data-th="Komento"><code>!math laskutoimitus</code></td>
    <td data-th="Käyttö">Esimerkkejä: <code>!math 1+1</code> <code>!math 3043*(202+34)</code>
<code>!math sqrt(5)*s(5)</code> <code>!math scale=2; 1/2</code></td>
    <td data-th="Mitä tapahtuu">Laskee laskutoimituksen puolestasi</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">vitsit</i></td>
    <td data-th="Komento"><code>!vitsi</code></td>
    <td data-th="Käyttö">Kirjoita <code>!vitsi</code></td>
    <td data-th="Mitä tapahtuu">Kertoo satunnaisen vitsin massiivisesta vitsitietokannasta. Varoitus: Sisältää enimmäkseen viinavitsejä.</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">sano</i></td>
    <td data-th="Komento"><code>!sano jotain</code></td>
    <td data-th="Käyttö">Esim: <code>!sano Miau</code></td>
    <td data-th="Mitä tapahtuu">Käskee botin sanomaan jotain. Käytetään lähinnä testailuun.</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">linkit</i></td>
    <td data-th="Komento"><code>!linkit</code></td>
    <td data-th="Käyttö">Kirjoita <code>!linkit</code></td>
    <td data-th="Mitä tapahtuu">Kertoo irkistä (jokaiselta kanavalta, jolla rolle on) kerättyjen linkkien osoitteen. Huom, Pulinan etusivulta näkee myös lisää linkkejä, sekä <a href="http://peikko.us/linkit">täältä</a>.</td>
  </tr>

  <tr>
  	<td data-th="Ominaisuus"><i class="feat">urlit</i></td>
    <td data-th="Komento"><code>!urlit</code></td>
    <td data-th="Käyttö">Kirjoita <code>!urlit</code></td>
    <td data-th="Mitä tapahtuu">Kertoo pulinalta kerättyjen linkkien osoitteen. Huom, Pulinan etusivulta näkee myös.</td>
  </tr>

</table>
	
	</div><!--/.containercol-->

<?php get_footer(); ?>
