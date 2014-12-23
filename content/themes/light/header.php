<?php
/**
 * Header, jonka tarkoituksena on näyttää <head> ja siihen asti kun sisältö alkaa.
 *
 * @package light
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="HandheldFriendly" content="True">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?php wp_title('&#124;', true, 'right'); ?></title>

<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png">

<!-- HTML5 Shim and Respond.js - IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div class="header-container">

	<div class="container">

		<header class="site-header navslide">
	
				<div class="logoarea">
					<ul id="navToggle" class="burger navslide">
						<li></li>
						<li></li>
						<li></li>
					</ul>
	
				</div>
	
		</header>

		<div class="menu-button one-page"><i class="fa fa-bars"></i></div>

		<div class="menu-container">
	        <?php
    		wp_nav_menu( array(
    		    'menu'              => 'primary',
    		    'theme_location'    => 'primary',
    		    'container'       	=> 'nav',
    		    'depth'             => 2,
    		    'container_class'   => 'navslide nav nav-collapse',
    		    'menu_class'        => 'menu',
                'menu_id' 			=> 'menu',
                'echo'            	=> true,
    		    'fallback_cb'       => 'wp_page_menu',
    		    // breakpointin pitää olla sama kuin layout.scss:n $responsivenav!
    		    'items_wrap'      	=> '<ul class="%2$s" id="%1$s" data-breakpoint="872">%3$s</ul>',
    		    'walker'            => new dude_navwalker())
    		);
            ?>
        </div>

	</div><!--/.container-->
	
</div><!--/.header-container-->

<div id="page" class="hfeed site">

<div class="content site-content navslide">
