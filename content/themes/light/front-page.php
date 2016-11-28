<?php
/**
 *
 * Etusivun template.
 * Template Name: Front page
 *
 * @package light
 */

get_header(); ?>

<iframe src="https://www.pulina.fi/irclog.php" frameborder="0" class="irclog"></iframe>

<div class="slide slide-irclog">
	<div class="shade"></div>

		<div class="container">

			<h2>Tämä on #pulina</h2>

			<p>Suoraviivaisempi kuin Twitter. Reaaliaikaisempi kuin Facebook. "Sosiaalisista medioista" se ensimmäinen. Tervetuloa irkkiin!</p>

			<p><a href="#aloita" class="button button-ghost">Tule mukaan pulisemaan</a></p>

		</div>

<div class="rullaa-alas" data-0="opacity: 1" data-100="opacity: 0">
	<p><svg fill="#fff" width="36px" height="36px" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg></p>
</div>

</div>

<div class="slide slide-esittely firstcontainer">

	<div class="container">

		<h2>Paras paikka keskustelulle.</h2>
		<div class="type"><p data-list="Tuo tuossa yläpuolella on muuten suora lähetys.;Etkö usko?;Kannattais uskoa. Koska se on.;Pulinalla on parhaat jutut.;Pulinalla on myös parhaat tyypit.;Me miittaillaankin joskus.;Tutustu mehin, hopi hopi?;Voit olla anonyymi, jos haluat, ei haittaa.;Tule sellaisena kuin olet."></p></div>

		<p>Suomalainen keksintö, chattiverkosto IRC (puhekielessä "irkki") on ollut olemassa vuodesta 1988. Keskustelukanavia luotiin pääosin omista mielenkiinnonkohteista, esimerkiksi <i>#tietokoneet</i>.</p>

		<p>90-luvulla IRCistä kiinnostunut <i>rolle</i> huomasi, että kanavilla saatetaan keskustella ihan mistä vaan, vaikka kanavan aihe olisi rajattu johonkin tiettyyn. Nimellä ei siis oikeastaan ollut enää väliä ja rönsyileviä kanavia alkoi olla liikaa. Toisaalta ei myöskään ollut yhtä selkeää kanavaa kaikille, jossa sai jauhaa ihan mistä halusi.</p>

		<p>Näin <code>#pulina</code> sai alkunsa.</p>

		<p><a href="<?php echo get_page_link(6); ?>" class="button button-ghost">Lue lisää Pulinan historiasta</a></p>

		<?php if(strtotime('2017-02-26 23:59') > time() ) { ?>
			<div class="mainox ad textad">
				<p>Pulinat pois ja parhaita <a href="http://www.eurokasinot.net/rahapelit">rahapelejä</a>  kokeilemaan. Siis paras mesta pelailla rahapelejä jos sellainen harrastus kiinnostaa, on tietenkin <a href="http://casinoarvostelut.com/">netticasinot</a>. Ennen kun alat pelaamaan kannattaa etsiä käsiisi parhaat <a href="http://www.parascasino.com/bonukset">casino bonukset</a>. Älähän uppoudu tähän puuhaan kuitenkaan liika ja jos tuntuu, että mopo karkaa käsistä turvaudu <a href="http://keskustelu.suomi24.fi/terveys/paihteet-ja-riippuvuudet/peliriippuvuus">tukeen</a> ystävälliseen <a href="http://www.peluuri.fi/">apuun</a>.</p>
			</div>
		<?php } ?>

	</div>

</div><!-- .slide-esittely -->


<div class="slide slide-halloffame">
  <div class="bg"></div>

	<div class="container">

		<h2>Hall of fame</h2>

		<p>Tässä näet tämän päivän kovimmat pulisijat. Lista päivittyy lähes reaaliajassa. Reaaliaikaiset tilastot näet myös kanavakomennolla <i>!toptod</i>. Kanavan viralliset kokonaistilastot löytyvät <a href="http://peikko.us/statsit/pulina/">täältä</a> ja lisää tilastolinkkejä saa komennolla <i>!statsit</i>.</p>

    <?php
    	$html = file_get_contents('http://peikko.us/toptod.html');
    	$items = explode(' ', $html);

    	echo '<ol>';

    	foreach ($items as $key => $item) {
    		$list_item = trim($item);

    		if ( $list_item === '' || $list_item === ' ' || empty( $list_item ) ) :
    		else :

    			$get_points = explode('(', $list_item);
    			$point_raw = explode(')', $get_points[1]);
    			$point_success = explode(')', $point_raw[0]);
    			$points = $point_success[0];
    			$nick = $get_points[0];

    			// Progress calculation
    			$maxpoints = '2000';
    			$count_percent_part1 = $points * 100;
    			$percent = $count_percent_part1 / $maxpoints;
          $nearest_ten = ceil($percent / 10) * 10;

    			if ( ! preg_match('/\./', $item) ) :
    	    		echo '<li>
    	    		<div class="points">
    	    			<div class="bar"><div class="progress progress-' . $nearest_ten . '" style="width: ' . $percent . '%;"><b>' . $nick . '</b> <span class="value">' . $points . '</span></div></div>
    	    		</div>
    	    		</li>';
    	    	endif;

    		endif;
    	}
    	echo '</ol>';
    	?>

	</div>

</div><!-- .slide-halloffame -->


<div class="slide slide-telegram">

  <div class="container">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><defs><linearGradient id="a" x1=".667" y1=".167" x2=".417" y2=".75"><stop stop-color="#37aee2" offset="0"/><stop stop-color="#1e96c8" offset="1"/></linearGradient><linearGradient id="b" x1=".66" y1=".437" x2=".851" y2=".802"><stop stop-color="#eff7fc" offset="0"/><stop stop-color="#fff" offset="1"/></linearGradient></defs><circle cx="120" cy="120" r="120" fill="url(#a)"/><path fill="#c8daea" d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"/><path fill="#a9c9dd" d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"/><path fill="url(#b)" d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"/></svg>

    <p><a href="https://telegram.org/" target="_new">Telegram</a> on kuin WhatsApp, mutta avoin alusta ja toimii joka laitteella. Telegram-ryhmästä on tullut eräänlainen "varjopulina" tien päällä sekä kuvien jakamiseen. Telegrammissa on aktiivinen 30+ käyttäjän rypäs pulinalaisia. Jos haluat mukaan, pistä kanavalla viestiä niin kutsumme sinut.</p>

    <p class="activity">Viimeksi hölisty <strong><?php

    $telegram_bot_api_url = file_get_contents('https://api.telegram.org/' . getenv('TELEGRAM_BOTTOKEN') . '/getUpdates?offset=-1&limit=1');
    $data = json_decode($telegram_bot_api_url, true);

    foreach ( array_reverse($data['result']) as $result ) :
      // Test data:
      // echo var_dump($result['message']['date']) . '<br /><br />';

      echo time2str( $result['message']['date'] );
    endforeach; ?></strong></p>

    <p><a href="http://chat.pulina.fi" target="_new" class="button button-ghost">Pyydä kutsua IRC-kanavalla</a></p>

  </div><!-- .container -->

</div>


<div class="slide slide-miitit slide-linkit">

	<div class="container">

		<h2>Seuraavat miitit</h2>

      <ul class="linkkilista">
          <?php if ( have_rows( 'miitit_toistuva', 'option' ) ) :
            while( have_rows( 'miitit_toistuva', 'option' ) ) : the_row();
            if ( get_sub_field( 'miitin_otsikko' ) ) : ?>
                <?php if ( ! get_sub_field( 'miitti_on_mennyt' ) ) : ?>
                  <li><?php if ( get_sub_field( 'miitin_doodle-linkki' ) ) : ?><a href="<?php echo get_sub_field( 'miitin_doodle-linkki' ); ?>" target="_new"><?php endif; ?>
                    <?php echo get_sub_field( 'miitin_otsikko' ); ?>
                    <?php if ( get_sub_field( 'miitin_doodle-linkki' ) ) : ?></a><?php endif; ?>
                  </li>
                <?php endif; ?>
              <?php endif;
            endwhile;
          endif;
        ?>
      </ul>

			<p><a href="<?php echo get_page_link(1236); ?>" class="button">Vanhat miitit</a></p>

      <div class="more">
				<p><a href="<?php echo get_admin_url(); ?>admin.php?page=miittikentat">Lisää uusi miitti &raquo;</a></p>
			</div>

	</div>

</div>

<div class="slide slide-linkit">

	<div class="container">

		<h2>Viimeisimmät linkit</h2>

<ul class="linkkilista">
<?php

require_once('inc/simple_html_dom.php');
$html = file_get_html('http://peikko.us/pulinalinkit/index.html');

// example: html->find('ul', 0)->find('li', 0);
$first_level_items = $html->find('ul', 0)->find('li', 0);
foreach($html->find('ul') as $ul)
{
$i = 0;
       foreach($ul->find('li') as $li)
       {
       if($i == 6) { break; }
       $korvattavat = array('/Ã¤/','/Ã¶/', '/â/');
	   $tilalle = array('ä','ö', '-');
	   $li = preg_replace($korvattavat, $tilalle, $li);
       echo $li;
       $i++;
       }
}

?>
</ul>

			<div class="more">
				<p><a href="http://peikko.us/pulinalinkit">Lisää linkkejä &rsaquo;</a></p>
			</div>

	</div>

</div>

		<div class="slide slide-infograafi">

			<div class="container">

				<div class="wow fadeIn numero" data-wow-delay="0.22s">
					<span class="arvo meter_1"><?php $paikalla = file_get_html('http://peikko.us/pulina.html'); foreach($paikalla->find('.paikalla') as $numero) echo $numero; ?></span>
					<span class="asia">Paikalla nyt</span>
				</div>

				<div class="wow fadeIn numero" data-wow-delay="0.44s">
					<span class="arvo meter_2"><?php
$peak = file_get_html('http://peikko.us/peak.db');
$luku = explode('!!!',$peak);
$oikealuku = explode('@',$luku[1]);
$numero = $oikealuku[0];
echo $numero;
?></span>
					<span class="asia">yhtäaikainen käyttäjäennätys</span>
				</div>

				<div class="wow fadeIn numero" data-wow-delay="0.66s">
					<span class="arvo meter_3"><?php
$filu = file_get_html('http://peikko.us/statsit/pulina/index.html');
$bold = $filu->find('b');
$visitors = $bold[0];
echo $visitors; ?></span>
					<span class="asia">käyttäjää yhteensä</span>
				</div>

				<div class="wow fadeIn numero" data-wow-delay="0.88s">
					<span class="arvo meter_4"><?php
$filu = file_get_html('http://peikko.us/statsit/pulina/index.html');

$bold = $filu->find('b');
$visitors = $bold[0];

preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $filu, $matches);
$pulistumaara = $matches[1];
echo $pulistumaara; ?></span>
					<span class="asia">riviä pulistu</span>
				</div>

			</div>

		</div><!--/.slide-->

<div class="slide slide-github">

  <div class="container">

    <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="50px" viewBox="0 0 160.054 70.73" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><defs><style>.fil0{fill:#000;fill-rule:nonzero}</style></defs><g id="Ebene_x0020_1"><g id="_153574520"><path id="_153577136" class="fil0" d="M20.507 19.037c2.476 0 5.339-.62 8.59-1.857v7.97c-.723.258-1.755.542-3.096.852.413 1.186.62 2.295.62 3.327 0 3.302-.994 6.178-2.98 8.628s-4.553 3.909-7.7 4.372c-2.063.31-3.095 1.42-3.095 3.328 0 .67.335 1.341 1.006 2.012.877.98 2.166 1.6 3.869 1.857 7.377 1.135 11.066 4.205 11.066 9.209 0 7.997-4.772 11.995-14.316 11.995-3.921 0-7.146-.696-9.673-2.09C1.598 66.888 0 64.127 0 60.36c0-4.333 2.399-7.3 7.196-8.899v-.155c-1.753-1.083-2.63-2.734-2.63-4.952 0-2.89.825-4.695 2.476-5.417v-.155c-1.651-.567-3.121-1.858-4.411-3.87C1.186 34.747.464 32.425.464 29.949c0-3.715 1.316-6.81 3.947-9.286 2.528-2.322 5.546-3.482 9.054-3.482 2.528 0 4.875.619 7.042 1.857zm.31 40.704c0-2.631-2.167-3.946-6.501-3.946-4.179 0-6.268 1.367-6.268 4.101 0 2.682 2.27 4.024 6.81 4.024 3.972 0 5.958-1.393 5.958-4.179zM8.898 30.025c0 3.56 1.625 5.34 4.875 5.34 3.147 0 4.72-1.806 4.72-5.417 0-1.496-.36-2.786-1.083-3.87-.877-1.186-2.089-1.78-3.637-1.78-3.25 0-4.875 1.91-4.875 5.727z"/><path id="_153577064" class="fil0" d="M37.302 11.53c-1.496 0-2.773-.567-3.83-1.702-1.058-1.135-1.587-2.476-1.587-4.024 0-1.6.53-2.966 1.587-4.101C34.529.568 35.806 0 37.302 0c1.445 0 2.696.568 3.753 1.703 1.058 1.135 1.587 2.502 1.587 4.101 0 1.548-.529 2.889-1.587 4.024-1.057 1.135-2.308 1.702-3.753 1.702z"/><path id="_153576992" class="fil0" d="M32.891 51.925c.103-1.031.155-2.785.155-5.262V22.596c0-2.424-.051-4.101-.155-5.03h8.745c-.104.98-.155 2.606-.155 4.876v23.757c0 2.631.051 4.54.155 5.726H32.89z"/><path id="_153576920" class="fil0" d="M57.648 17.566h6.733v7.507c-.258 0-.735-.026-1.432-.078a26.827 26.827 0 0 0-1.973-.077h-3.327V39.31c0 3.457 1.134 5.185 3.404 5.185 1.6 0 3.044-.438 4.334-1.315v7.738c-1.909 1.032-4.205 1.548-6.887 1.548-3.766 0-6.371-1.341-7.816-4.024-1.083-2.012-1.625-5.184-1.625-9.519V25.073h.077v-.155l-1.16-.077c-.671 0-1.548.077-2.632.232v-7.507h3.792v-3.018c0-1.444-.077-2.605-.232-3.482h8.976c-.154.98-.231 2.09-.231 3.327v3.173z"/><path id="_153576848" class="fil0" d="M84.83 17.334c-2.218 0-4.54.774-6.964 2.321V6.114c0-2.94.051-4.875.154-5.803h-8.822c.155.825.233 2.76.233 5.804V47.05c0 2.373-.078 3.999-.233 4.875h8.977c0-.155-.051-.786-.155-1.896a32.575 32.575 0 0 1-.154-2.979V28.013c1.805-1.702 3.56-2.553 5.262-2.553 1.96 0 3.456.98 4.488 2.94.774 1.548 1.161 3.483 1.161 5.804L88.7 44.651c0 1.754-.13 4.179-.387 7.274h9.363c-.206-1.29-.31-3.663-.31-7.12v-10.6c0-4.49-1.005-8.307-3.017-11.454-2.27-3.611-5.443-5.417-9.519-5.417z"/><path id="_153576776" class="fil0" d="M112.227 52.235c-4.076 0-7.094-1.806-9.054-5.418-1.548-2.94-2.322-6.783-2.322-11.53V24.687c0-3.508-.103-5.881-.31-7.12h9.287c-.155 1.135-.258 3.56-.31 7.275l-.077 10.447c0 2.94.336 5.055 1.006 6.345.774 1.6 2.193 2.4 4.256 2.4 1.445 0 3.07-.852 4.876-2.554V22.442c0-.877-.052-1.883-.155-3.018-.104-1.136-.155-1.754-.155-1.858h8.976c-.102.877-.154 2.502-.154 4.876v23.68c0 3.043.052 4.978.154 5.803h-8.434V49.14c-2.374 2.063-4.901 3.095-7.584 3.095z"/><path id="_153576704" class="fil0" d="M147.053 52.157c-2.785 0-5.107-1.006-6.965-3.017v2.785h-8.202c.155-.876.232-2.502.232-4.875V6.114c0-3.044-.077-4.979-.232-5.804h8.822c-.104.928-.155 2.863-.155 5.804v13.464c2.373-1.495 4.695-2.244 6.965-2.244 4.075 0 7.274 1.806 9.595 5.417 1.96 3.147 2.94 6.965 2.94 11.453 0 4.592-1.03 8.59-3.094 11.995-2.477 3.972-5.779 5.958-9.906 5.958zm-1.16-26.697c-1.703 0-3.483.85-5.34 2.553v13.388c1.65 1.599 3.276 2.4 4.875 2.4 2.012 0 3.534-1.11 4.566-3.329.825-1.754 1.238-3.843 1.238-6.268 0-5.83-1.78-8.744-5.34-8.744z"/><path id="_153576632" class="fil0" d="M38.92 59.343c-.49-.666-1.122-1.088-1.981-1.088-.824 0-1.613.632-1.613 1.491 0 2.227 5.242 1.297 5.242 5.734 0 2.648-1.648 4.524-4.348 4.524-1.824 0-3.156-1.052-4.068-2.578l1.666-1.63c.35 1.017 1.28 1.928 2.384 1.928 1.052 0 1.701-.894 1.701-1.911 0-1.368-1.262-1.753-2.297-2.156-1.7-.702-2.946-1.561-2.946-3.613 0-2.192 1.63-3.963 3.858-3.963 1.175 0 2.805.58 3.612 1.473l-1.21 1.789z"/><path id="_153576560" class="fil0" d="M47.826 70.004c-4.033 0-6.54-3.086-6.54-6.98 0-3.927 2.595-6.943 6.54-6.943s6.54 3.016 6.54 6.944c0 3.893-2.507 6.979-6.54 6.979zm0-11.38c-2.437 0-3.876 2.156-3.876 4.296 0 2.034 1.018 4.541 3.876 4.541 2.858 0 3.875-2.507 3.875-4.541 0-2.14-1.438-4.296-3.875-4.296z"/><path id="_153576488" class="fil0" d="M64.464 59.939c-.72-.877-1.806-1.403-2.911-1.403-2.473 0-3.893 2.28-3.893 4.56 0 2.226 1.473 4.453 3.875 4.453 1.105 0 2.21-.579 2.929-1.403v3.069c-.965.456-1.93.789-2.999.789-3.717 0-6.47-3.209-6.47-6.856 0-3.753 2.648-7.067 6.523-7.067 1.034 0 2.051.281 2.946.772v3.086z"/><path id="_153576416" class="fil0" d="M68.74 69.653h-2.577v-13.22h2.577z"/><path id="_153576344" class="fil0" d="M73.316 66.865l-1.087 2.788H69.51l5.155-13.572h2l5.014 13.572h-2.753l-1.017-2.788h-4.594zm2.227-6.909h-.035l-1.456 4.805h3.14l-1.649-4.805z"/><path id="_153576272" class="fil0" d="M85.044 67.409h3.648v2.244h-6.225v-13.22h2.578z"/><path id="_153576200" class="fil0" d="M103.418 59.939c-.719-.877-1.806-1.403-2.91-1.403-2.473 0-3.893 2.28-3.893 4.56 0 2.226 1.472 4.453 3.875 4.453 1.104 0 2.21-.579 2.928-1.403v3.069c-.964.456-1.929.789-2.998.789-3.718 0-6.47-3.209-6.47-6.856 0-3.753 2.647-7.067 6.522-7.067 1.035 0 2.052.281 2.946.772v3.086z"/><path id="_153576128" class="fil0" d="M111.027 70.004c-4.033 0-6.54-3.086-6.54-6.98 0-3.927 2.595-6.943 6.54-6.943s6.54 3.016 6.54 6.944c0 3.893-2.507 6.979-6.54 6.979zm0-11.38c-2.438 0-3.875 2.156-3.875 4.296 0 2.034 1.017 4.541 3.875 4.541s3.875-2.507 3.875-4.541c0-2.14-1.438-4.296-3.875-4.296z"/><path id="_153576056" class="fil0" d="M118.827 56.432h3.683c3.822 0 6.382 2.858 6.382 6.628 0 3.718-2.63 6.593-6.4 6.593h-3.665v-13.22zm2.578 10.977h.42c3.174 0 4.402-1.754 4.402-4.367 0-2.875-1.473-4.365-4.401-4.365h-.42v8.732z"/><path id="_153575504" class="fil0" d="M132.73 69.653h-2.578v-13.22h2.578z"/><path id="_153574688" class="fil0" d="M134.605 56.081h1.859l6.961 9.241h.035v-8.89h2.578v13.484h-1.859l-6.961-9.24h-.035v8.977h-2.578z"/><path id="_153575624" class="fil0" d="M159.59 62.622v.333c0 3.735-1.911 7.049-6.014 7.049-3.858 0-6.295-3.261-6.295-6.908 0-3.77 2.507-7.014 6.452-7.014 2.245 0 4.209 1.14 5.226 3.156l-2.28 1.227c-.526-1.192-1.648-2.104-3.016-2.104-2.49 0-3.717 2.543-3.717 4.735 0 2.19 1.245 4.628 3.735 4.628 1.613 0 2.963-1.402 3.016-2.998h-2.806v-2.104h5.699z"/></g></g></svg>

    <p>Pulinan botti ja koodit ovat GitHubissa avointa lähdekoodia (myös tämä verkkosivusto), joten jos koodiosaamista löytyy, tule mukaan kehittämään kanavan tekniikasta parempaa!</p>

    <p><a href="https://github.com/pulinairc/" target="_new" class="button button-ghost">Koodaamaan</a></p>

  </div><!-- .container -->

</div>

<div class="slide slide-twitter">

  <div class="container">

    <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="50px" viewBox="0 0 803 149"><path d="M501.79 91.544c-.118.02-.239.012-.358.033l.618-.101c-.096.014-.164.053-.26.068zM87.908 120.608c0 4.03-1.445 7.485-4.336 10.36-2.89 2.878-6.354 4.316-10.4 4.316H44.04c-12.136 0-22.508-4.288-31.122-12.873C4.303 113.824 0 103.491 0 91.394V32.558c0-4.147 1.434-7.628 4.303-10.454 2.868-2.821 6.373-4.235 10.509-4.235 4.015 0 7.467 1.44 10.33 4.32 2.873 2.874 4.314 6.325 4.314 10.359v21.304H70.93c3.765 0 6.99 1.334 9.683 4.005 2.69 2.667 4.03 5.866 4.03 9.605 0 3.73-1.34 6.937-4.02 9.606-2.68 2.665-5.899 4.001-9.648 4.001h-41.52v10.31c0 4.045 1.411 7.48 4.25 10.31 2.833 2.826 6.274 4.24 10.322 4.24h29.138c4.044 0 7.515 1.442 10.406 4.319 2.891 2.879 4.336 6.332 4.336 10.36zM429.09 120.608c0 4.03-1.445 7.485-4.334 10.36-2.889 2.878-6.354 4.316-10.399 4.316h-13.232c-12.136 0-22.508-4.288-31.122-12.873-8.613-8.585-12.916-18.92-12.916-31.017V32.558c0-4.147 1.432-7.628 4.303-10.454 2.868-2.821 6.37-4.235 10.51-4.235 4.013 0 7.466 1.44 10.328 4.32 2.873 2.874 4.313 6.325 4.313 10.359v21.304h25.576c3.765 0 6.99 1.336 9.68 4.005 2.692 2.667 4.03 5.866 4.03 9.605 0 3.73-1.338 6.935-4.017 9.604-2.68 2.665-5.9 4.001-9.646 4.001H386.54V91.38c0 4.044 1.412 7.478 4.25 10.31 2.833 2.825 6.274 4.239 10.32 4.239h13.24c4.042 0 7.516 1.442 10.405 4.319 2.891 2.879 4.335 6.332 4.335 10.36zM352.073 120.608c0 4.03-1.445 7.485-4.334 10.36-2.889 2.878-6.354 4.316-10.398 4.316h-13.233c-12.136 0-22.508-4.288-31.12-12.873-8.613-8.587-12.916-18.92-12.916-31.017V32.558c0-4.147 1.435-7.628 4.303-10.454 2.869-2.821 6.371-4.235 10.51-4.235 4.013 0 7.466 1.44 10.328 4.32 2.873 2.874 4.313 6.325 4.313 10.359v21.304h25.576c3.765 0 6.99 1.336 9.68 4.005 2.693 2.667 4.03 5.866 4.03 9.605 0 3.73-1.337 6.935-4.017 9.604-2.68 2.665-5.9 4.001-9.646 4.001h-25.62V91.38c0 4.044 1.411 7.478 4.249 10.31 2.833 2.825 6.274 4.239 10.32 4.239h13.24c4.043 0 7.516 1.442 10.405 4.319 2.883 2.879 4.33 6.332 4.33 10.36zM229.95 94.22c0 11.317-4.023 20.991-12.08 29.022-8.056 8.029-17.757 12.042-29.105 12.042-10.382 0-19.517-3.498-27.41-10.503-7.783 7.005-16.868 10.503-27.246 10.503-11.347 0-21.054-4.013-29.112-12.042-8.053-8.029-12.079-17.705-12.079-29.023V65.537c0-3.882 1.348-7.138 4.055-9.779 2.694-2.643 5.94-3.964 9.717-3.964 3.786 0 7.026 1.321 9.722 3.964 2.7 2.643 4.052 5.905 4.052 9.787v28.693c0 3.783 1.325 6.986 3.97 9.63 2.651 2.644 5.87 3.959 9.654 3.959 3.677 0 6.839-1.315 9.488-3.958 2.649-2.645 3.97-5.85 3.97-9.631V65.705c0-3.773 1.358-7.031 4.06-9.785 2.713-2.747 6.018-4.126 9.915-4.126 3.785 0 7.033 1.348 9.744 4.048 2.71 2.694 4.062 5.932 4.062 9.703v28.693c0 3.783 1.326 6.986 3.975 9.63 2.645 2.644 5.813 3.959 9.485 3.959 3.786 0 7.005-1.315 9.648-3.958 2.65-2.645 3.974-5.85 3.974-9.631V65.545c0-3.771 1.352-7.009 4.055-9.703 2.698-2.698 5.942-4.048 9.717-4.048 3.784 0 7.028 1.348 9.724 4.042 2.7 2.694 4.05 5.928 4.05 9.701v28.682zM269.735 29.34c0 4.027-1.44 7.482-4.33 10.358-2.89 2.877-6.353 4.32-10.391 4.32-4.049 0-7.51-1.443-10.401-4.32-2.88-2.874-4.325-6.331-4.325-10.357 0-4.032 1.444-7.483 4.325-10.36 2.891-2.88 6.354-4.317 10.4-4.317 4.04 0 7.504 1.437 10.391 4.317 2.891 2.877 4.331 6.33 4.331 10.36zM269.735 120.591c0 4.036-1.44 7.493-4.33 10.374-2.89 2.88-6.353 4.317-10.391 4.317-4.049 0-7.51-1.436-10.401-4.317-2.88-2.879-4.325-6.338-4.325-10.374V66.49c0-4.036 1.444-7.493 4.325-10.372 2.891-2.88 6.354-4.321 10.4-4.321 4.04 0 7.504 1.44 10.391 4.321 2.891 2.877 4.331 6.336 4.331 10.372v54.102zM604.226 67.464c0 3.732-1.342 6.937-4.028 9.608-2.681 2.666-5.899 4.001-9.65 4.001h-20.11c-3.756 0-6.947 1.31-9.573 3.932-2.632 2.616-3.941 5.796-3.941 9.543v27.104c0 3.738-1.336 6.952-4.016 9.621-2.68 2.68-5.89 4.01-9.64 4.01-3.746 0-6.963-1.33-9.639-4.006-2.68-2.671-4.017-5.874-4.017-9.619v-27.09c0-11.221 3.99-20.814 11.978-28.775 7.988-7.959 17.611-11.943 28.867-11.943h20.096c3.753 0 6.968 1.336 9.647 4.007 2.682 2.67 4.026 5.868 4.026 9.607z" fill="#3cf"/><path d="M475.19 135.282c-11.589 0-22.51-4.403-31.128-13.21-8.61-8.81-11.92-18.406-11.92-30.82 0 0-.839-39.477 43.807-39.477 34.932 0 45.566 24.538 45.566 36.652 0 9.63-4.405 13.047-14.43 13.047h-44.647s-1.617 10.216 18.722 10.216h25.48c6.514 0 11.794 5.28 11.794 11.796 0 6.515-5.28 11.794-11.794 11.794h-31.45zM462.735 82.67h29.314c0-9.632-14.58-9.632-14.58-9.632s-14.734-.002-14.734 9.632zM802.977 68.725c-7.604 1.3-18.633-.05-24.476-2.482 12.143-1.006 20.364-6.525 23.532-14.018-4.376 2.694-17.97 5.628-25.467 2.831a91.218 91.218 0 0 0-1.192-4.959c-5.708-21.013-25.29-37.946-45.794-35.898a86.69 86.69 0 0 1 5.024-1.863c2.245-.809 15.498-2.972 13.413-7.644-1.764-4.12-17.953 3.099-20.998 4.049 4.024-1.508 10.68-4.11 11.387-8.741-6.161.845-12.212 3.763-16.884 8.004 1.69-1.816 2.97-4.03 3.24-6.418-16.443 10.518-26.048 31.705-33.816 52.272-6.1-5.924-11.521-10.587-16.37-13.183-13.61-7.296-29.888-14.92-55.433-24.416-.786 8.46 4.177 19.717 18.47 27.192-3.094-.418-8.757.52-13.28 1.595 1.841 9.703 7.868 17.686 24.192 21.544-7.459.49-11.32 2.2-14.81 5.851 3.395 6.747 11.695 14.677 26.6 13.046-16.587 7.159-6.765 20.41 6.731 18.431-23.01 23.805-59.301 22.039-80.141 2.146 54.401 74.21 172.672 43.883 190.289-27.594 13.218.106 20.97-4.576 25.783-9.745z" fill="#3cf"/></svg>

    <p>Twitteriä on käytetty linkkinä kanavan ja ulkomaailman välillä, mm. botin kautta. Tällä hetkellä Twitter on lähinnä tiedotuskanava yksi muiden joukossa. Jos sinulla on ideoita Twitterin suhteen tai haluat mukaan tweettaamaan, pistä ylläpidolle viestiä. Kannattaa tietysti myös ihan vaan seurata Twitterissä.</p>

    <p><a href="https://www.twitter.com/pulinainfo" target="_new" class="button button-ghost">Seuraa Twitterissä</a></p>

  </div><!-- .container -->

</div>

<div class="slide slide-miten slide-ohje slide-vaihe-yksi" id="aloita">

	<div class="container">

		<h2>Vaihe 1. Päätä nimimerkki._</h2>

		<p>Valitse helposti tunnistettava sinuun yhdistettävä nimimerkki. Käyttäjän koko tiedot näet komennolla <code>/whois rolle</code>. Näillä pääset jo pitkälle.</p>

	</div>

</div>

<div class="slide slide-miten slide-ohje slide-vaihe-kaksi">

	<div class="container">

		<h2>Vaihe 2. Yhdistä kanavalle._</h2>

		<p>Luulitko, että pitää vielä jotain säätää? <a href="http://chat.pulina.fi">chat.pulina.fi</a> tai alta napista, sitten nimimerkin täydennys ja olet irkissä! Kyllä on tehty irkkaaminen helpoksi nykyään.</p>

		<p><a href="http://chat.pulina.fi" class="button">Boom, irkkiin!</a></p>

	</div>

</div>

<div class="slide slide-lopetus">

	<div class="container">

		<h2>Mitäs muuta?</h2>

		<p>No ei kai tässä sitten muuta kuin keskustelu käyntiin? Pulinan sivuilta löydät <a href="<?php echo get_page_link(6); ?>">tietoa kanavasta</a>, <a href="<?php echo get_page_link(25); ?>">Pulina-paidoista</a>, <a href="<?php echo get_page_link(21); ?>">komennoista</a>. Meillä on myös <a href="<?php echo get_page_link(1010); ?>">blogi</a>. On meillä <a href="https://www.facebook.com/pulinairc/">Facebookkikin</a> ja joitakin ryhmiäkin siellä, mutta se on niin kuollutta ja lamea että siitä ei puhuta.</p>

		<p>Sivut loi <a href="http://roni.laukkarinen.info">Rolle</a>.

	</div>

</div>

<?php get_footer(); ?>
