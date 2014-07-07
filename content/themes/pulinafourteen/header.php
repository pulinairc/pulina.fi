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
?>