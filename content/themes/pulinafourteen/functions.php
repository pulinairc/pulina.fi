<?php
/**
 * Funktiot ja määreet.
 *
 * @package pulinafourteen
 */

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @param string $title Default title text for current view.
 * @param string $sep Optional separator.
 * @return string The filtered title.
 */
function pulinafourteen_wp_title( $title, $sep ) {
	if ( is_feed() ) {
		return $title;
	}
	
	global $page, $paged;

	// Add the blog name
	$title .= get_bloginfo( 'name', 'display' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) ) {
		$title .= " $sep $site_description";
	}

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 ) {
		$title .= " $sep " . sprintf( __( 'Page %s', 'pulinafourteen' ), max( $paged, $page ) );
	}

	return $title;
}
add_filter( 'wp_title', 'pulinafourteen_wp_title', 10, 2 );

/* -----------------------------------------------------------------------------
    DUDE-scriptit
----------------------------------------------------------------------------- */

add_theme_support( 'automatic-feed-links' );
load_theme_textdomain( 'pulinafourteen', get_template_directory() . '/languages' );

/**
 * Scriptit ja tyylit.
 */
function pulinafourteen_scripts() {
	wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/jquery.js', array(), '1.10.2', true );
	//wp_enqueue_script( 'smooth-scroll', get_template_directory_uri() . '/js/jquery.smooth-scroll.min.js', array(), '1.4.13', true );
	//wp_enqueue_script( 'unslider', get_template_directory_uri() . '/js/unslider.min.js', array(), '1.0', true );
	//wp_enqueue_script( 'eventswipe', get_template_directory_uri() . '/js/jquery.event.swipe.min.js', array(), '1.0', true );
	wp_enqueue_style( 'pulinafourteen-style', get_stylesheet_uri() );
	wp_enqueue_script( 'jquery-validate', get_template_directory_uri() . '/js/jquery.validate.pack.js', array(), '', true );
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.css' );
	wp_enqueue_style( 'gotham', get_template_directory_uri() . '/fonts/gotham/stylesheet.css' );
	wp_enqueue_style( 'skeleton-base', get_template_directory_uri() . '/css/skeleton-base.css' );
	wp_enqueue_style( 'skeleton', get_template_directory_uri() . '/css/skeleton.css' );
	wp_enqueue_style( 'skeleton-layout', get_template_directory_uri() . '/css/skeleton-layout.css' );
	wp_enqueue_style( 'layout', get_template_directory_uri() . '/css/layout.css' );
	wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '1.0', true );
	wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/scripts.min.js', array(), '1.0', true );
	wp_enqueue_script( 'placeholders', get_template_directory_uri() . '/js/placeholders.min.js', array(), '3.0.2', true );
	wp_enqueue_script( 'pulinafourteen-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if(is_page_template('template-onepage-layout.php') ) {
	wp_enqueue_script( 'smoothscrolltrigger', get_template_directory_uri() . '/js/smoothscroll.trigger.js', array(), '1.0', true );
	}
	
}
add_action( 'wp_enqueue_scripts', 'pulinafourteen_scripts' );

// Artikkelikuva-tuki:
add_theme_support( 'post-thumbnails' );

// Muokattavien valikoiden tuki.
register_nav_menus( array(
	'primary' => __( 'Primary Menu', 'pulinafourteen' ),
) );

// Bootstrap-valikko:
require get_template_directory() . '/inc/bootstrap-wp-navwalker.php';
