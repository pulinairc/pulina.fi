<?php
/**
 * @package light
 * Template Name: Ohje
 */

get_header(); ?>

<iframe src="http://peikko.us/irclog.php" frameborder="0" class="irclog-page"></iframe>

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

					<p>Jaa että olet kiinnostunut irkkaamisesta, ihan oikeasti? Hieno juttu! Irkkaaminen on kivaa, eikä enää vain se nörttien juttu. Varmaan jo tiesitkin, että IRC on yksi tietokoneiden historian vanhimpia pikaviestimiä, jo 80-luvulla kehitetty suomalaislähtöinen keksintö. Jos et, kannattaa sivistää itseään ja lukea vaikkapa <a href="http://fi.wikipedia.org/wiki/IRC" target="_blank">Wikipedian sivu IRCistä</a>.</p>

					<p>Pulinalle pääsee kaikista nopeiten ja helpoiten tällä hetkellä käyttämällä <a href="https://kiwiirc.com/client/irc.quakenet.org/?&channels=list&theme=relaxed#pulina" target="_blank">webchattia</a>:

					<p><a href="https://kiwiirc.com/client/irc.quakenet.org/?&channels=list&theme=relaxed#pulina" class="btn join-btn">Irkkiin nyt heti!</a></p>

					<p>Webchat on selaimessa toimivaa IRC-sovellus. <strong>Channels:</strong>-kohdassa tulee olla <i>#pulina</i> ja <strong>Nickname:</strong>-kohtaan voit valita oman nimimerkkisi.</p>

					<p>Jos haluat käyttöösi hieman nätimmän ja monipuolisemman webchatin, kokeile <a href="https://www.irccloud.com/">IRCCloud-palvelua</a>.</p>

					<h3 id="paremmin">Haluan irkata vähän kätevämmin, onko tähän jotain ohjelmaa olemassa?</h3>

					<p>Kyllä vain! Irkkaamiseen löytyy sovelluksia ja appseja heti satapäin. "Oikeaoppinen" tapahan olisi käyttää niinsanottua IRC-shelliä tai bounceria (<strong>lyhyesti:</strong> IRC-nickisi on aina irkissä, vaikka et olisi paikalla ja näin näkisit myös aiemmin puhutut keskustelut heti kun palaat), mutta tämä sivu on tarkoitettu vasta-alkajille, joten nörtit voivat mennä lukemaan <a href="http://www.irssi.org/documentation/manual">irssin manuaalia</a>.</p>

					<p><?php edit_post_link( __( 'Muokkaa', 'light' ), '<span class="edit-link">', '</span>' ); ?></p>
					</div>

				</div><!-- .entry-content -->
			
			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

	<div class="containercol">
					
		<div class="logocol">
			<img src="<?php echo get_home_url(); ?>/content/uploads/2010/06/Microsoft_windows_8_logo_by_n_studios_2-d5keldy-150x150.png	" alt="Softan logo" />
		</div>					
	
		<div class="softa">

			<h4>Windows</h4>

			<p>Windowsille löytyy IRC-sovelluksia läjäpäin, joista kuitenkin mIRC (<a href="http://ihqdaa.kirjiz.net/" target="_blank">"ÄM IRK"</a>) on ollut kautta aikojen yksi suosituimpia.</p>
					
			<ul>
				<li><a href="http://www.mirc.com/" target="_blank">mIRC</a> - Ei vaadi selityksiä. Jos haluat nopeat käyttöohjeet, tsekkaa vuonna kivi ja kuokka tekemäni <a href="http://rollemaa.org/irkkiin/helposti.jpg"><i>mIRCin pikaopas</i></a>.</li>
				<li><a href="http://www.silverex.org/download/" target="_blank">X-Chat / SilverX</a> - Vähän nätimpi kuin mIRC. Ajaa asian. Rollen yksi pitkäaikaisista suosikeista.</li>
				<li><a href="http://portableapps.com/apps/internet/pchat_portable" target="_blank">PChat</a> - XChatiin perustuva ihan pätevä IRC-client.</li>
			</ul>
					
		</div><!--/.softa-->
	
	</div><!--/.containercol-->

	<div class="containercol">
					
		<div class="logocol">
			<img src="<?php echo get_home_url(); ?>/content/uploads/2010/06/Apple_gray_logo-150x150.png" alt="Softan logo" />
		</div>					
	
		<div class="softa">

			<h4>Mac</h4>

			<p>Mäkillä hyviä IRC-clienttejä on muutamia.</p>
					
			<ul>
				<li><a href="http://colloquy.info/" target="_blank">Colloquy</a> - Pikaviestimäinen IRC-sovellus. Saa myös mobiiliin.</li>
				<li><a href="http://limechat.net/mac/" target="_blank">LimeChat</a> - Tämä IRC-sovellus näyttää jopa kuvat suoraan ohjelmassa. Löytyy myös iPad/iPhone-versiot.</li>
				<li><a href="http://www.codeux.com/textual/" target="_blank">Textual</a> - Erittäin nätti ja toimiva, mutta ei ilmainen.</li>
			</ul>
					
		</div><!--/.softa-->
	
	</div><!--/.containercol-->

	<div class="containercol">
					
		<div class="logocol">
			<img src="<?php echo get_home_url(); ?>/content/uploads/2010/06/512px-Tux.svg_-258x300.png" alt="Softan logo" />
		</div>					
	
		<div class="softa">

			<h4>Linux</h4>

			<p>Linuxia käyttävät "true"-irkkaajat käyttävät tietysti irssiä, mutta Linuxille löytyy hyviä IRC-sovelluksia myös niille, joilla ei IRC-shelliä ole. Alla esimerkkejä.</p>
					
			<ul>
				<li><a href="http://xchat.org/" target="_blank">XChat</a> - XChatin saa onneksi myös Linuxillekin.</li>
				<li><a href="http://www.pidgin.im/" target="_blank">Pidgin</a> - Multi-pikaviestinsovellus, joka on tosiaan melko pikaviestimäinen. Mutta irkki toimii.</li>
				<li><a href="https://smuxi.im/" target="_blank">Smuxi</a> - Yksi uusimmista, mutta selkeästi käyttäjäystävällisimmästä päästä.</li>
			</ul>
					
		</div><!--/.softa-->
	
	</div><!--/.containercol-->

	<div class="containercol">
					
		<div class="logocol">
			<img src="<?php echo get_home_url(); ?>/content/uploads/2010/06/android-icon-150x150.png" alt="android-icon" width="150" height="150" class="alignleft size-thumbnail wp-image-1022" />
		</div>					
					
		<div class="softa">

			<h4>Android</h4>

			<p>Androidille löytyy muutamia IRC-clienttejä. Makuasiaksi jää mikä on paras. Testaapas seuraavia:</p>
					
			<ul>
				<li><a href="https://play.google.com/store/apps/details?id=com.androirc" target="_blank">AndroIRC</a> - Ihan pätevä kaikin puolin</li>
				<li><a href="https://play.google.com/store/apps/details?id=net.andchat" target="_blank">AndChat</a> - Yksi parhaista. Rollen suosikki.</li>
				<li><a href="https://play.google.com/store/apps/details?id=com.tapchatapp.android" target="_blank">TapChat</a> - Nätti ja simppeli, mutta maksullinen.</li>
			</ul>
					
		</div><!--/.softa-->
	
	</div><!--/.containercol-->

	<div class="containercol">
					
		<div class="logocol">
			<img src="<?php echo get_home_url(); ?>/content/uploads/2010/06/iPhone-300x300.png" alt="ikoni" />
		</div>					
					
		<div class="softa">

			<h4>iPhone</h4>

			<p>iPhonelle on vähän hankalampi löytää kunnon IRC-clienttiä, ellei ole jailbreakattu iPhone. <a href="https://itunes.apple.com/us/app/prompt/id421507115?mt=8" target="_blank">Prompt</a> on paras niille, joilla on IRC-shelli. iPhone-optimoitua webchattia <a href="http://mibbit.com/" target="_blank">Mibbitiä</a> kannattaa käyttää. Pari hyväksi havaittuja iPuhelin-appseja:</p>
					
			<ul>
				<li><a href="https://code.google.com/p/colloq/" target="_blank">ColloQ</a></li>
				<li><a href="https://itunes.apple.com/us/app/mango-irc-chat-client/id399288543?mt=8" target="_blank">Mango IRC</a> - Nätti ja kätevä. Ei ilmainen, mutta ei mikään kalliskaan.</li>
				<li><a href="https://itunes.apple.com/us/app/rooms-your-irc-chat-client/id288282245?mt=8" target="_blank">Rooms</a></li>
			</ul>

		
		<p class="muuta">Tuleeko jotain muuta laitetta mielen, jolla haluaisit irkata? Voin listata tänne lisääkin. Jos tarvitset apua, heitä ihmeessä <code>/msg rolle Miten irkkaan leivänpaahtimella?</code></p>
					
		</div><!--/.softa-->
	
	</div><!--/.containercol-->

<?php get_footer(); ?>
