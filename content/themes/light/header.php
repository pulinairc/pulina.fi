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
<meta name="msapplication-config" content="https://www.pulina.fi/favicons/browserconfig.xml">
<meta name="theme-color" content="#ffffff">

<title><?php wp_title('&#124;', true, 'right'); ?></title>

<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<link rel="apple-touch-icon" sizes="180x180" href="https://www.pulina.fi/favicons/apple-touch-icon.png">
<link rel="mask-icon" href="https://www.pulina.fi/favicons/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="https://www.pulina.fi/favicons/favicon.ico">

<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/screenshot.png">

<!-- HTML5 Shim and Respond.js - IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<?php wp_head(); ?>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-8523880252818258",
          enable_page_level_ads: true
     });
</script>
</head>

<body <?php body_class(); ?>>

<button id="nav-toggle" class="nav-toggle nav-trigger hamburger" type="button" aria-label="<?php esc_attr_e( 'Menu', 'air-light' ); ?>">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
  <span id="nav-toggle-label" class="screen-reader-text" aria-label="<?php esc_attr_e( 'Menu', 'air-light' ); ?>"><?php esc_attr_e( 'Menu', 'air-light' ); ?></span>
</button>

<nav id="sidenav" class="side-nav sidenav s-container ps-active-y" aria-expanded="false" tabindex="-1">

  <button id="nav-toggle" class="nav-toggle nav-trigger hamburger" type="button" aria-label="<?php esc_attr_e( 'Menu', 'air-light' ); ?>">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    <span id="nav-toggle-label" class="screen-reader-text" aria-label="<?php esc_attr_e( 'Menu', 'air-light' ); ?>"><?php esc_attr_e( 'Menu', 'air-light' ); ?></span>
  </button>

  <?php
    wp_nav_menu( array(
      'theme_location'    => 'primary',
      'container'       	=> false,
      'depth'             => 2,
      'menu_class'        => 'sidebar-menu',
      'menu_id' 					=> 'menu',
      'echo'            	=> true,
      'fallback_cb'       => 'wp_page_menu',
      'items_wrap'      	=> '<ul class="%2$s" id="%1$s">%3$s</ul>',
      'walker'            => new Pulina_Walker(),
      )
    );
  ?>

</nav><!-- #sidenav -->

<div id="page" class="hfeed site site-wrapper">

<div class="content site-content navslide">

<?php if( ! is_front_page() ) : ?>
	<iframe src="https://www.pulina.fi/irclog.php" frameborder="0" class="irclog-page"></iframe>
<?php endif; ?>
