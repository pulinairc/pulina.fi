<?php
/**
 * Gather all bits and pieces together.
 * If you end up having multiple post types, taxonomies,
 * hooks and functions - please split those to their
 * own files under /inc and just require here.
 *
 * @Date: 2019-10-15 12:30:02
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2021-01-12 15:28:58
 *
 * @package annastiina
 */

namespace Air_Light;

/**
 * The current version of the theme.
 */
define( 'AIR_LIGHT_VERSION', '6.6.9' );

/**
 * Theme settings
 */

$theme_settings = [
  /**
   * Image and content sizes
   */
  'image_sizes' => [
    'small' => 300,
    'medium' => 700,
    'large' => 1200,
  ],
  'content_width' => 800,

  /**
   * Logo and featured image
   */
  'default_featured_image' => get_theme_file_uri( 'images/default.jpg' ),
  'logo' => '/svg/logo.svg',

  /**
   * Theme textdomain
   */
  'textdomain' => 'annastiina',

  /**
   * Menu locations
   */
  'menu_locations' => [
      'primary' => __( 'Primary Menu', 'annastiina' ),
  ],

  /**
   * Taxonomies
   *
   * See the instructions:
   * https://github.com/digitoimistodude/annastiina#custom-taxonomies
   */
    'taxonomies' => [
  /**
  'your-taxonomy' => [
  'name' => 'Your_Taxonomy',
  'post_types' => [ 'post', 'page' ],
  ],
  */
  ],

/**
 * Post types
 *
 * See the instructions:
 * https://github.com/digitoimistodude/annastiina#custom-post-types
 */
// TODO Instructions how to add post types

  'post_types' => [
    'ad' => 'Ad',
  ],

  /**
   * Gutenberg -related settings
   */

  // If you want to use classic editor somewhere, define it here
  'use_classic_editor' => [ 'page' ],

  // Don't restrict blocks
  // 'allowed_blocks' => 'all',

  // Restrict to only selected blocks
  'allowed_blocks' => [

    // Set default blocks allowed in every post type
    'default' => [
      'core/archives',
      'core/audio',
      'core/buttons',
      'core/categories',
      'core/code',
      'core/column',
      'core/columns',
      // 'core/coverImage',
      'core/embed',
      'core/file',
      'core/freeform',
      'core/gallery',
      'core/heading',
      'core/html',
      'core/image',
      'core/latestComments',
      'core/latestPosts',
      'core/list',
      'core/more',
      'core/nextpage',
      'core/paragraph',
      'core/preformatted',
      'core/pullquote',
      'core/quote',
      'core/reusableBlock',
      'core/separator',
      'core/shortcode',
      'core/spacer',
      'core/subhead',
      'core/table',
      'core/textColumns',
      'core/verse',
      'core/video',
    ],
      'post' => [
      'core/coverImage', // This block is now allowed only in posts
    ],
  ],
    // Module caching
    'enable_module_caching' => true,
    'exclude_module_from_cache' => [
      'contact-form' => true,
    ],

  // Add your own settings and use them wherever you need, for example THEME_SETTINGS['my_custom_setting']
  'my_custom_setting' => true,
];

$theme_settings = apply_filters( 'air_helper_theme_settings', $theme_settings );

define( 'THEME_SETTINGS', $theme_settings );

/**
 * Required files
 */
require get_theme_file_path( '/inc/hooks.php' );
require get_theme_file_path( '/inc/includes.php' );
require get_theme_file_path( '/inc/template-tags.php' );

// Run theme setup
add_action( 'init', __NAMESPACE__ . '\theme_setup' );
add_action( 'after_setup_theme', __NAMESPACE__ . '\build_theme_support' );

/**
 * Show plugins and other menus for everyone
 */
add_action( 'init', function() {
  remove_filter( 'air_helper_helper_remove_admin_menu_links', 'air_helper_maybe_remove_plugins_from_admin_menu' );
} );

/**
 * Allow installing plugins
 */
add_action( 'init', function() {
  remove_action( 'admin_init', 'air_helper_prevent_access_to_plugins' );
} );


/**
 * Disable airless notice in wp-admin for 3rd party themes
 *
 * Finnish notice: "Aktiivinen teema ei näytä olevan Airiin pohjautuva. Kaikki Air helper -lisäosan ominaisuudet eivät välttämättä toimi."
 */
add_action( 'init', function() {
  if ( is_admin() ) {
    remove_action( 'admin_notices', 'air_helper_we_are_airless' );
  }
}, 999 );

/**
 * Disable "Email delivery is not active or configured. Please contact your agency to fix this issue." notice
 */
add_filter( 'air_helper_mail_delivery', '__return_false' );

/**
 * Show archives
 */
add_filter( 'air_helper_disable_views_tag', '__return_false' );
add_filter( 'air_helper_disable_views_category', '__return_false' );
add_filter( 'air_helper_disable_views_author', '__return_false' );
