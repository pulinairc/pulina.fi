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

			<p>Suoraviivaisempi kuin Twitter. Reaaliaikaisempi kuin Facebook. "Sosiaalisista medioista" se ensimmäinen. Tervetuloa irkkiin!</p>

			<p><a href="#mukaan" class="btn">Tule mukaan pulisemaan</a></p>

		</div>

<div class="rullaa-alas" data-0="opacity: 1" data-100="opacity: 0">
	<p><span class="fa fa-angle-down"></span></p>
</div>

</div>

<div class="slide slide-esittely firstcontainer">

	<div class="container">

		<h2>Paras paikka keskustelulle.</h2>
		<div class="type"><p data-list="Tuo tuossa yläpuolella on muuten suora lähetys.;Etkö usko?;Kannattais uskoa. Koska se on.;Pulinalla on parhaat jutut.;Pulinalla on myös parhaat tyypit.;Me miittaillaankin joskus.;Tutustu mehin, hopi hopi?;Voit olla anonyymi, jos haluat, ei haittaa.;Tule sellaisena kuin olet."></p></div>

		<p>Suomalainen keksintö, chattiverkosto IRC (puhekielessä "irkki") on ollut olemassa vuodesta 1988. Keskustelukanavia luotiin pääosin omista mielenkiinnonkohteista, esimerkiksi <code>#tietokoneet</code>.</p>

		<p>90-luvulla IRCistä kiinnostunut <i>rolle</i> huomasi, että kanavilla saatetaan keskustella ihan mistä vaan, vaikka kanavan aihe olisi rajattu johonkin piiriin. Nimellä ei siis oikeastaan ollut enää väliä ja rönsyileviä kanavia alkoi olla liikaa. Toisaalta ei myöskään ollut yhtä selkeää kanavaa kaikille, jossa sai jauhaa ihan mistä halusi.</p>

		<p>Näin <code>#pulina</code> sai alkunsa.</p>

		<p><a href="<?php echo get_page_link(6); ?>" class="btn">Lue lisää Pulinan historiasta</a></p>

	</div>

</div>

<div class="slide slide-miten slide-ohje slide-vaihe-yksi">

	<div class="container">
	
		<h2>Vaihe 1. Päätä nimimerkki._</h2>

		<p>Valitse helposti tunnistettava sinuun yhdistettävä nimimerkki. Kanavan ylläpitäjiä ovat esimerkiksi rolle ja mustikkasoppa. Irkissä nimimerkki näkyy pienemmyys-suuremmuus-sulkeiden sisällä näin: <code>&lt;rolle&gt;</code>. Käyttäjän koko tiedot näet komennolla <code>/whois rolle</code>. Näillä pääset jo pitkälle.</p>

	</div>

</div>

<div class="slide slide-miten slide-ohje slide-vaihe-kaksi">

	<div class="container">
	
		<h2>Vaihe 2. Yhdistä kanavalle._</h2>

		<p>Luulitko, että pitää vielä jotain säätää? Kyllä on tehty irkkaaminen helpoksi nykyään.</p>

		<p><a href="#" class="btn">Boom, irkkiin!</a></p>

	</div>

</div>

<div class="slide slide-lopetus">

	<div class="container">
	
		<h2>Mitäs muuta?</h2>

		<p>No ei kai tässä sitten muuta kuin keskustelu käyntiin? Pulinan sivuilta löydät <a href="<?php echo get_page_link(6); ?>">tietoa kanavasta</a>, <a href="<?php echo get_page_link(25); ?>">Pulina-paidoista</a>, <a href="<?php echo get_page_link(21); ?>">komennoista</a>. Meillä on myös <a href="<?php echo get_page_link(1010); ?>">blogi</a>. Tavoitteena julkaista kuvagalleria, miittien tapaamissysteemi ja jotain muutakin hienoa. Sitten joskus.</p>

		<p>Sivut loi <a href="http://roni.laukkarinen.info">Rolle</a>.

	</div>

</div>

<?php get_footer(); ?>