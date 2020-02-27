<?php
/**
 * Template Name: Etusivu
 * @package pulinafourteen
 */

get_header(); ?>

	<div id="primary" class="frontpage-content-area">
		<main id="main" class="site-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<div class="container">
			
			<div class="the-page-content">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
			<div class="frontpage">

				<div class="entry-content">
					<?php the_content(); ?>
				</div><!-- .entry-content -->
			
			</div><!--/.frontpage-->

			<div class="infograafit">

				<div class="online">

					<div class="kayttajat-nyt kayttajat">
						<h3>Paikalla juuri nyt</h3>

<?php
$paikalla = file_get_html('https://www.pulina.fi/statsit/index.html');

foreach($paikalla->find('.paikalla') as $numero) 
       echo $numero;
	   
//echo '<div class="nicklist">';
//foreach($paikalla->find('.irkkaaja') as $irkkaaja) 
//	   echo $irkkaaja.', ';
//	   echo rtrim($irkkaaja, ', ');   
//echo '</div>';
?>

					</div>

					<div class="kayttajat-ennatys kayttajat">
						<h3>Käyttäjäpiikki</h3>
						<span class="peak numero">

<?php
$peak = file_get_html('http://peikko.us/peak.db');
$luku = explode('!!!',$peak);
$oikealuku = explode('@',$luku[1]);
$numero = $oikealuku[0];
echo $numero;
?>
						</span>
					</div>

				</div><!--/.online-->

			</div><!--/.infograafit-->

				<div class="irclog">
<div class="scroller">
<ul>
<?php
$scroller = file_get_html('http://peikko.us/lastlog-pulina-2014.php');
echo $scroller;
?>
</ul>
</div>

				</div>
				<div class="type">
				<a href="<?php echo get_home_url(); ?>/irkkiin" class="btn">Lähetä viesti</a>
				<p data-list="Moro, olen uusi täällä!;Hei, mitä tyypit?;Mikäs tää pulina on?;Derp derp derp derp derp;Hahahahahaha :D;Gerrye vauhdissa;samiy <3;!battle pulina, jotain muuta"></p>
				</div>

			<?php if(strtotime('2015-02-16 23:59') > time() ){ ?><!--Expires 16.2.2015!--><div class="ad textad">Pulinat pois ja <a href="http://www.kasinoeuro.net/">casino-onnea</a> kokeilemaan. Siis paras mesta pelailla rahapelejä jos sellainen harrastus kiinnostaa, on tietenkin netticasinot.  Kasinoeuro bonuskoodilla saat parhaat rahanarvoiset edut, jotka vain hölmö jättää lunastamatta. <a href="http://www.pokerihuoneet.net/">Pokerihuoneiden arvostelut</a> kannattaa myös lukea ennen kuin säntää <a href="http://www.kasinosuomi.com/7red">7rediin pelaamaan!</a></div><?php } ?>

			<div class="blog-summaries frontcol">

			<div class="blogposts">

			<h3>Blogissa viimeksi</h3>

			<?php
			$args = array( 'numberposts' => 4 );
			$lastposts = get_posts( $args );
			foreach($lastposts as $post) : setup_postdata($post); ?>
				
				<div class="blog-post">

					<div class="author">
					<?php echo get_avatar(get_the_author_email(), '50' ); ?>
					<p><?php echo get_the_author_meta('nickname'); ?></p>
					</div>

					<div class="excerpt">
					<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<?php if ( ! has_excerpt() ) { ?>
					<p><?php 
					$lause = preg_match('/^([^.!?]*[\.!?]+){0,2}/', strip_tags($post->post_content), $lyhenne);
					echo $lyhenne[0];
					?></p>
					<?php } else { ?>
					<?php the_excerpt(''); ?>
					<?php } ?>
					</div>

				</div>
			<?php endforeach; ?>

			<div class="more">
				<p><a href="<?php echo get_home_url(); ?>/blogi">Lisää bloggauksia &rsaquo;</a></p>
			</div>

			</div><!--/.blogposts-->

			<div class="urlit">

			<h3>Viimeisimmät linkit kanavalla</h3>

				<ul class="linkkilista">

<?php
$html = file_get_html('http://peikko.us/pulinalinkit/index.html');

// example: html->find('ul', 0)->find('li', 0);
$first_level_items = $html->find('ul', 0)->find('li', 0);
foreach($html->find('ul') as $ul) 
{
$i = 0;
       foreach($ul->find('li') as $li) 
       {
       if($i == 6) { break; }
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


				<div class="ministatsit">

<?php
$filu = file_get_html('https://www.pulina.fi/statsit/index.html');

$bold = $filu->find('b');
$visitors = $bold[0];

preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $filu, $matches);
$pulistumaara = $matches[1];

// Miehet
$miehet = $filu->find('/html/body/div/table[17]/tbody/tr[2]/td[4]', 0);
$miehet_array = explode(", ", $miehet);
$miehet_maara = count($miehet_array);

// Naiset
$naiset = $filu->find('/html/body/div/table[17]/tbody/tr[3]/td[4]', 0);
$naiset_array = explode(", ", $naiset);
$naiset_maara = count($naiset_array);

echo '<div class="ministats">';

echo '<div class="kayttajat-yhteensa">';
echo '<h3>Käyttäjämäärä yhteensä</h3>';
echo '<span class="numero">'.$visitors.'</span>';;
echo '</div>';
?>
<?php

// minuutit: / 60;
// tunnit: / 3600
// päivät: / 86400
// viikot: / 604800
// kuukaudet: / 2678400
// vuodet: / 31536000

$luomispaiva=08;
$luomiskuukausi=04;
$luomisvuosi=2008;

// aika nyt:
$nyt=time();

$kanavaluotu=mktime(0,0,0,$luomiskuukausi,$luomispaiva,$luomisvuosi);
$luomispvm=$nyt-$kanavaluotu;

$channelcreated=$luomispvm / 86400; 
$kanavanikapaivissa=round($channelcreated);

echo '<div class="kanavan-ika">';
echo '<h3>Kanavan ikä päivissä</h3>';
echo '<span class="numero">'.$kanavanikapaivissa.'</span>';
echo '</div>';

echo '<div class="rivit">';
echo '<h3>Rivejä yhteensä</h3>';
echo '<span class="numero">'.$pulistumaara.'</span>';
echo '</div>';

echo '</div>'; //.ministats

echo '<div class="sukupuolet">';

echo '<div class="sukupuoli miehet">';
echo '<h3>Miehiä</h3>';
echo '<span class="numero">'.$miehet_maara.'</span><i class="fa fa-male"></i>';
echo '</div>';

echo '<div class="sukupuoli naiset">';
echo '<h3>Naisia</h3>';
echo '<span class="numero">'.$naiset_maara.'</span><i class="fa fa-female"></i>';
echo '</div>';

echo '</div>';

?>
				</div>

				<div class="tanaan-pulistu">
					<div class="pulinat"></div>
				</div>

			</article><!-- #post-## -->
			</div>
			
			</div><!--/.container-->

		<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->
	
<?php get_footer(); ?>
