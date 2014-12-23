<?php
/**
 * 
 * Etusivun template.
 * Template Name: Front page
 *
 * @package light
 */

get_header(); ?>

<iframe src="http://peikko.us/irclog.php" frameborder="0" class="irclog"></iframe>

<div class="slide slide-irclog">
	<div class="shade"></div>

		<div class="container">

			<h2>Tämä on #pulina</h2>

			<p>Vuonna 2008 perustettu kaikille avoin keskustelukanava.</p>

			<p><a href="#mukaan" class="btn">Tule mukaan pulisemaan</a></p>

		</div>

<div class="rullaa-alas" data-0="opacity: 1" data-100="opacity: 0">
	<p><span class="fa fa-angle-down"></span></p>
</div>

</div>

<div class="slide slide-esittely">

	<div class="container">

		<h2>Paras paikka keskustelulle.</h2>

		<p>Suomalainen keksintö, chattiverkosto IRC (puhekielessä "irkki") on ollut olemassa vuodesta 1988. Keskustelukanavia luotiin pääosin omista mielenkiinnonkohteista, esimerkiksi <code>#tietokoneet</code>.</p>

		<p>90-luvulla IRCistä kiinnostunut <i>rolle</i> huomasi, että kanavilla saatetaan keskustella ihan mistä vaan, vaikka kanavan aihe olisi rajattu johonkin piiriin. Nimellä ei siis oikeastaan ollut enää väliä ja rönsyileviä kanavia alkoi olla liikaa. Ei ollut yhtä selkeää kanavaa kaikille, jossa sai jauhaa ihan mistä halusi.</p>

		<p>Näin <code>#pulina</code> sai alkunsa.</p>

	</div>

</div>

<?php get_footer(); ?>