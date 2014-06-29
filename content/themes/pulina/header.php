<!DOCTYPE html>
<html>
<head>
	<title>#pulina - Parasta mitä IRC voi tarjota. <?php wp_title(); ?></title>	
	<meta name="generator" content="WordPress <?php bloginfo('version'); ?>" />
	<meta charset="utf-8">
	<style type="text/css" media="screen">
		@import url( <?php bloginfo('stylesheet_url'); ?> );
	</style>
	<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
	<link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
	<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="<?php bloginfo('atom_url'); ?>" />
	<link rel="Shortcut Icon" href="<?php echo get_settings('siteurl'); ?>/favicon.ico" type="image/x-icon" />	
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<?php wp_head(); ?>

	<script src="http://www.pulina.fi/popup.js"></script>
	<script src="http://www.pulina.fi/jquery-1.7.1.min.js"></script>
	<script src="http://www.pulina.fi/jquery.tooltip.min.js"></script>

<script>
$(document).ready(function() {

$("#counter").load('http://pulina.fi/wp-content/themes/pulina/tanaan-pulistu.php');
   var refreshId = setInterval(function() {
      $("#counter").load('http://pulina.fi/wp-content/themes/pulina/tanaan-pulistu.php');
   }, 1000);
   $.ajaxSetup({ cache: true });
   
   //Chromelle, ettei lataa loputtomiin:
   setTimeout("window.stop()",30000);

$('a,b,span').tooltip({ 
    track: true, 
    delay: 0, 
    showURL: false, 
    fade: 250 
});

});  
</script>

</head>
<body>

<!--<a href="http://keskustelu.pulina.fi" id="keskustelufoorumiin" title="Pulina!">Tule keskustelemaan uudelle keskustelufoorumillemme!</a>-->

<div id="header">
<h1><a href="<?php echo get_option('home'); ?>/"><span><?php bloginfo('name'); ?></span></a></h1>
<h2><?php bloginfo('description'); ?></h2>
</div>

<div id="menu">
<ul>
<li><a href="<?php echo get_option('home'); ?>/"<?php if (is_home()) { ?> class="selected"<?php } else { ?><?php } ?>>Blogi</a></li>
<li><a href="<?php echo get_option('home'); ?>/tietoa"<?php $slug = basename(get_permalink()); if($slug == 'tietoa') { ?> class="selected"<?php } else { ?><?php } ?>>Info</a></li>
<li><a href="<?php echo get_settings('siteurl'); ?>/irkkiin"<?php $slug = basename(get_permalink()); if($slug == 'irkkiin') { ?> class="selected"<?php } else { ?><?php } ?>>Miten?</a></li>
<li><a href="<?php echo get_settings('siteurl'); ?>/kartta"<?php $slug = basename(get_permalink()); if($slug == 'kartta') { ?> class="selected"<?php } else { ?><?php } ?>>Missä?</a></li>
<li><a href="<?php echo get_settings('siteurl'); ?>/komennot"<?php $slug = basename(get_permalink()); if($slug == 'komennot') { ?> class="selected"<?php } else { ?><?php } ?>>Komennot</a></li>
<li><a href="<?php echo get_settings('siteurl'); ?>/paidat"<?php $slug = basename(get_permalink()); if($slug == 'paidat') { ?> class="selected"<?php } else { ?><?php } ?>>Paidat</a></li>
<li><a href="http://miitit.pulina.fi"<?php $slug = basename(get_permalink()); if($slug == 'miitit') { ?> class="selected"<?php } else { ?><?php } ?>>Miitit</a></li>
<li><a href="<?php echo get_settings('siteurl'); ?>/puhechat"<?php $slug = basename(get_permalink()); if($slug == 'puhechat') { ?> class="selected"<?php } else { ?><?php } ?>>Puhechat</a></li>
<?php if (is_user_logged_in()){ ?><li><a class="profiili" href="<?php echo get_settings('siteurl'); ?>/wp-admin/profile.php">Profiilisi</a></li><?php } else { ?><?php } ?>
</ul>
</div>
<div id="contentstart">

<?php //echo '<br class="kesken-br" /><div class="kesken"><b>Sivustoa huolletaan parhaillaan</b>, joten hetken ajan saattaa näyttää oudolta. Kiitos kärsivällisyydestäsi.</div>'; ?>

<?php if (is_home()) { ?>
<div id="wat">

<h2>Mitä kummaa?</h2>

<p>#pulina (tuttavallisemmin ihan <b>Pulina</b>) jo yhteisöksi ja jopa elämäntavaksi muodostunut ystävällinen <a href="http://rollemaa.org/irc" title="Tästä linkistä saat lisää tietoa IRCistä">IRC-kanava</a> Quakenet -keskusteluverkossa.</p>

<?php //echo '<p><b>Tilastot lataavat akkujaan.</b></p>'; ?>
<?php include_once('/home/web_70/sites/pulina.fi/www/wp-content/themes/pulina/ministats.php'); ?>
<?php 
echo '. Pelkkää pulinaa jo <b>';
include_once ('pulina.php');
echo "</b>. <a href=\"http://peikko.us/statsit/pulina\">Lisää tilastoja &rarr;</a></div>";
?>
<?php //echo '<div class="ministats">Nippelitiedot latailevat akkuja. Kokonaistilastot ovat <a href="http://rolle.tux.fi/statsit/pulina">täällä</a>.</div>'; ?>
</div>

<?php } else { ?><?php } ?>

<?php if (is_home()) { ?>

<?php
echo '<div class="topic"><span class="topictext">Topic:</span> ';
$topicfile=file('http://peikko.us/pulinatopic.php');
foreach ($topicfile as $topic)  {
echo $topic;
}
echo '</div>';
?>

<div class="statbox">
<div id="counter">asd</div>
</div>

<?php include('paikalla.php'); ?>

<div id="donate">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="http://pulina.fi/wp-content/themes/pulina/donate.png" name="submit" alt="PayPal - The safer, easier way to pay online!" />
</form>
</div>

<?php } else { ?><?php } ?>

<div id="content">
