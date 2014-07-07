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
	wp_enqueue_style( 'layout', get_template_directory_uri() . '/css/layout.css' );
	wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/all.js', array(), '1.0', true );
	
}
add_action( 'wp_enqueue_scripts', 'pulinafourteen_scripts' );

// Artikkelikuva-tuki:
add_theme_support( 'post-thumbnails' );

// Muokattavien valikoiden tuki.
register_nav_menus( array(
	'primary' => __( 'Primary Menu', 'pulinafourteen' ),
) );

// LiveReload/gulp
if ( getenv('WP_ENV') === 'development' ){
  add_action('wp_head', 'livereload');
}
function livereload() {
echo "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>')</script>";
}

// Duden bootstrapiin perustuva navwalker:
require get_template_directory() . '/inc/dude-wp-navwalker.php';