<?php
/**
 * Header, jonka tarkoituksena on näyttää <head> ja siihen asti kun sisältö alkaa.
 *
 * @package pulinafourteen
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="HandheldFriendly" content="True">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="author" content="Roni Laukkarinen, www.dude.fi">

<title><?php wp_title('&#124;', true, 'right'); ?></title>

<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">
<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/images/icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/images/icon-ipad.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/images/icon-retina.png">

<?php wp_head(); ?>

<?php if(is_front_page() || is_home() || is_page('1008') ) { ?>

<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.animateNumber.js"></script>

<?php
require_once(TEMPLATEPATH . '/inc/simplehtmldom/simple_html_dom.php');

// Paikalla juuri nyt:
$paikalla = file_get_html('http://peikko.us/pulina.html');
foreach($paikalla->find('.paikalla') as $numero);

// Käyttäjäpiikki:
$peak = file_get_html('http://peikko.us/peak.db');
$luku = explode('!!!',$peak);
$oikealuku = explode('@',$luku[1]);
$peaknumero = $oikealuku[0];

// Tänään sanoja kertynyt
$raakapojot = file_get_html('http://peikko.us/toptod.save');
$today = date('d-m-Y');
$numerot = preg_replace('/'.addslashes($today).'/',"", $raakapojot); 
$nummerot = preg_replace("/[^0-9]/"," ", $numerot); 
$piste = explode(" ", $nummerot);
$todaystats = array_sum($piste);

// Käyttäjämäärä yhteensä
$filu = file_get_html('http://peikko.us/statsit/pulina/index.html');
$bold = $filu->find('b');
$visitors = $bold[0];

// Kanavan ikä päivissä
$luomispaiva=08;
$luomiskuukausi=04;
$luomisvuosi=2008;
$nyt=time();
$kanavaluotu=mktime(0,0,0,$luomiskuukausi,$luomispaiva,$luomisvuosi);
$luomispvm=$nyt-$kanavaluotu;
$channelcreated=$luomispvm / 86400; 
$kanavanikapaivissa=round($channelcreated);

// Rivejä yhteensä
preg_match('/Rivien yhteismäärä: (?P<digit>\d+)/', $filu, $matches);
$pulistumaara = $matches[1];

// Miehiä
$miehet = $filu->find('/html/body/div/table[17]/tbody/tr[2]/td[4]', 0);
$miehet_array = explode(", ", $miehet);
$miehet_maara = count($miehet_array);

// Naisia
$naiset = $filu->find('/html/body/div/table[17]/tbody/tr[3]/td[4]', 0);
$naiset_array = explode(", ", $naiset);
$naiset_maara = count($naiset_array);
?>
<script>
$(document).ready(function() {

$(".progressBar").load('<?php echo get_template_directory_uri(); ?>/inc/tanaan-pulistu.php');
   var refreshId = setInterval(function() {
      $(".progressBar").load('<?php echo get_template_directory_uri(); ?>/inc/tanaan-pulistu.php');
      $(".irclog").load('<?php echo get_template_directory_uri(); ?>/inc/scroller.php');
   }, 1000);
   $.ajaxSetup({ cache: true });
   
   //Chromelle, ettei lataa loputtomiin:
   // setTimeout("window.stop()",30000);

$('.paikalla').animateNumber({
number: '<?php echo strip_tags($numero); ?>',
easing: 'linear',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
1500
)

$('.peak').animateNumber({
number: '<?php echo strip_tags($peaknumero); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
2000
)

$('.kayttajat-yhteensa .numero b').animateNumber({
number: '<?php echo strip_tags($visitors); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
2500
)

$('.kanavan-ika .numero').animateNumber({
number: '<?php echo strip_tags($kanavanikapaivissa); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
3000
)

$('.rivit .numero').animateNumber({
number: '<?php echo strip_tags($pulistumaara); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
3500
)

$('.miehet .numero').animateNumber({
number: '<?php echo strip_tags($miehet_maara); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
4000
)

$('.naiset .numero').animateNumber({
number: '<?php echo strip_tags($naiset_maara); ?>',
easing: 'easeInQuad',
number_step: function(now, tween) {
var floored_number = Math.floor(now),
target = $(tween.elem);
target.text(floored_number + ' %');
}
},
4500
)

$('.pulinat').goalProgress({
    goalAmount: 8000,
    currentAmount: <?php echo round($todaystats); ?>,
    textBefore: '',
    textAfter: ''
});

});
</script>
<?php } ?>

</head>

<body <?php body_class(); ?>>

<div class="header-container container">

	<header class="site-header navslide">

			<div class="logoarea">
				<ul id="navToggle" class="burger navslide">
					<li></li>
					<li></li>
					<li></li>
				</ul>

				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			</div>

	</header>

				<?php 

				$args = array(
					'theme_location'  => '',
					'menu'            => '',
					'container'       => 'nav',
					'container_class' => 'navslide',
					'container_id'    => '',
					'menu_class'      => 'menu',
					'menu_id'         => '',
					'echo'            => true,
					'fallback_cb'     => 'wp_page_menu',
					'before'          => '',
					'after'           => '',
					'link_before'     => '',
					'link_after'      => '',
					'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					'depth'           => 0,
					'walker'          => ''
				);

				wp_nav_menu($args); ?>
	
</div>

<div id="page" class="hfeed site">

<div class="content navslide">

<?php
echo '<div class="topic">
<p><span class="topictext">Topic:</span> ';
$topicfile=file('http://peikko.us/pulinatopic.php');
foreach ($topicfile as $topic)  {
echo $topic;
}
echo '
</p>
</div>';
include ('inc/ilmot.php');
?>