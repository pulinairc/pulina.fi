<?php
/**
 * Header, jonka tarkoituksena on näyttää <head> ja siihen asti kun sisältö alkaa.
 *
 * @package pulina-2014
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Digitoimisto Dude Oy, moro@dude.fi">

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

<div class="header">
	<header class="site-header">

		<div class="container">

		<div class="header-area">
			<div class="row">

			<div class="col-sm-3 col-xs-3">
			<div class="site-branding">
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			</div>
			</div><!--/.col-->

			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			    <span class="sr-only"><?php _e( 'Valikko', 'pulina-2014' ); ?></span>
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
			    <span class="icon-bar"></span>
			</button> 
	
			<nav id="site-navigation" class="main-navigation" role="navigation">

	        <?php
    		wp_nav_menu( array(
    		    'menu'              => 'primary',
    		    'theme_location'    => 'primary',
    		    'depth'             => 2,
    		    'container_class'   => 'collapse navbar-collapse navbar-responsive-collapse',
    		    'menu_class'        => 'nav navbar-nav',
                'menu_id' 			=> 'main-menu',
    		    'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
    		    'walker'            => new wp_bootstrap_navwalker())
    		);
            ?>

			</nav><!-- #site-navigation -->

			</div><!--/.row-->
		</div><!--/.header-area-->

		</div><!--/.container-->

	</header>
</div>

	<div id="content" class="site-content">
