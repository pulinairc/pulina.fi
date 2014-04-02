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
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
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


<div id="page" class="hfeed site">

	<div class="container">

		<header class="site-header">

		<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
		<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
	
			<nav id="site-navigation" class="main-navigation" role="navigation">

				<?php wp_nav_menu(); ?>

			</nav><!-- #site-navigation -->

		</header>

	</div>


	<div id="content" class="site-content">
