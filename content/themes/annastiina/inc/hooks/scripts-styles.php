<?php
/**
 * Enqueue and localize theme scripts and styles
 *
 * @package annastiina
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-02-20 14:11:48
 */

namespace Air_Light;

/**
 * Move jQuery to footer
 */
function move_jquery_into_footer( $wp_scripts ) {
  if ( ! is_admin() ) {
    $wp_scripts->add_data( 'jquery',         'group', 1 );
    $wp_scripts->add_data( 'jquery-core',    'group', 1 );
    $wp_scripts->add_data( 'jquery-migrate', 'group', 1 );
  }
} // end annastiina_move_jquery_into_footer

/**
 * Enqueue scripts and styles.
 */
function enqueue_theme_scripts() {
  if ( 'development' === getenv( 'WP_ENV' ) ) {
    $annastiina_template = 'global';
  } else {
    $annastiina_template = 'global.min';
  }

  // Styles.
  wp_enqueue_style( 'styles', get_theme_file_uri( "css/{$annastiina_template}.css" ), array(), filemtime( get_theme_file_path( "css/{$annastiina_template}.css" ) ) );

  // Scripts.
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts', get_theme_file_uri( 'js/dist/front-end.js' ), array(), filemtime( get_theme_file_path( 'js/dist/front-end.js' ) ), true );

  // Required comment-reply script
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }

  wp_localize_script( 'scripts', 'annastiina_screenReaderText', array(
    'expand'          => get_default_localization( 'Open child menu' ),
    'collapse'        => get_default_localization( 'Close child menu' ),
    'expand_for'      => get_default_localization( 'Open child menu for' ),
    'collapse_for'    => get_default_localization( 'Close child menu for' ),
    'expand_toggle'   => get_default_localization( 'Open main menu' ),
    'collapse_toggle' => get_default_localization( 'Close main menu' ),
    'external_link'   => get_default_localization( 'External site:' ),
    'target_blank'    => get_default_localization( 'opens in a new window' ),
  ) );

  // Add domains/hosts to disable external link indicators
  wp_localize_script(
    'scripts',
    'annastiina_externalLinkDomains',
    [
      'localhost:3000',
      'airdev.test',
      'dudetest.xyz',
    ]
  );
} // end annastiina_scripts

/**
 * Load polyfills for legacy browsers
 */
function enqueue_polyfills() {
  $legacy_scripts = 'js/dist/legacy.js';
  // Include polyfills
  $script = '
  var supportsES6 = (function () {
  try {
    new Function("(a = 0) => a");
    return true;
  } catch (err) {
    return false;
  }
  }());
  var legacyScript ="' . esc_url( get_theme_file_uri( $legacy_scripts ) ) . '";
  if (!supportsES6) {
    var script = document.createElement("script");
    script.src = legacyScript;
    document.head.appendChild(script);
  }';

  if ( file_exists( get_theme_file_path( $legacy_scripts ) ) ) {
    wp_register_script( 'annastiina_legacy', '', [], filemtime( get_theme_file_path( $legacy_scripts ) ), false );
    wp_enqueue_script( 'annastiina_legacy' );
    wp_add_inline_script( 'annastiina_legacy', $script, true );
  }
}
