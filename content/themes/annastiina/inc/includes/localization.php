<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2019-12-03 11:03:31
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-02-03 12:04:46
 *
 * @package annastiina
 */

namespace Air_Light;

add_filter( 'air_helper_pll_register_strings', function() {
  $strings = [
    // 'Key: String' => 'String',
  ];

  /**
   * Uncomment if you need to have default annastiina accessibility strings
   * translatable via Polylang string translations.
   */
  // foreach ( get_default_localization_strings() as $key => $value ) {
  // $strings[ "Accessibility: {$key}" ] = $value;
  // }

  return $strings;
} );

function get_default_localization_strings( $language = 'en' ) {
  $strings = [
    'en'  => [
      'Open main menu'        => __( 'Open main menu', 'annastiina' ),
      'Close main menu'       => __( 'Close main menu', 'annastiina' ),
      'Main navigation'       => __( 'Main navigation', 'annastiina' ),
      'Back to top'           => __( 'Back to top', 'annastiina' ),
      'Open child menu'       => __( 'Open child menu', 'annastiina' ),
      'Open child menu for'   => __( 'Open child menu for', 'annastiina' ),
      'Close child menu'      => __( 'Close child menu', 'annastiina' ),
      'Close child menu for'  => __( 'Close child menu for', 'annastiina' ),
      'Skip to content'       => __( 'Skip to content', 'annastiina' ),
      'External site:'        => __( 'External site:', 'annastiina' ),
      'opens in a new window' => __( 'opens in a new window', 'annastiina' ),
      'Page not found.'       => __( 'Page not found.', 'annastiina' ),
      'The reason might be mistyped or expired URL.' => __( 'The reason might be mistyped or expired URL.', 'annastiina' ),
      'Search'                => __( 'Search', 'annastiina' ),
    ],
    'fi'  => [
      'Open main menu'        => 'Avaa päävalikko',
      'Close main menu'       => 'Sulje päävalikko',
      'Main navigation'       => 'Päävalikko',
      'Back to top'           => 'Takaisin ylös',
      'Open child menu'       => 'Avaa alavalikko',
      'Open child menu for'   => 'Avaa alavalikko kohteelle',
      'Close child menu'      => 'Sulje alavalikko',
      'Close child menu for'  => 'Sulje alavalikko kohteelle',
      'Skip to content'       => 'Siirry suoraan sisältöön',
      'External site:'        => 'Ulkoinen sivusto:',
      'opens in a new window' => 'avautuu uuteen ikkunaan',
      'Page not found.'       => 'Hups. Näyttää, ettei sivua löydy.',
      'The reason might be mistyped or expired URL.' => 'Syynä voi olla virheellisesti kirjoitettu tai vanhentunut linkki.',
      'Search'                => 'Haku',
    ],
  ];

  return ( array_key_exists( $language, $strings ) ) ? $strings[ $language ] : $strings['en'];
} // end get_default_localization_strings

function get_default_localization( $string ) {
  if ( function_exists( 'ask__' ) && array_key_exists( "Accessibility: {$string}", apply_filters( 'air_helper_pll_register_strings', [] ) ) ) {
    return ask__( "Accessibility: {$string}" );
  }

  return esc_html( get_default_localization_translation( $string ) );
} // end get_default_localization

function get_default_localization_translation( $string ) {
  $language = get_bloginfo( 'language' );
  if ( function_exists( 'pll_the_languages' ) ) {
    $language = pll_current_language();
  }

  $translations = get_default_localization_strings( $language );

  return ( array_key_exists( $string, $translations ) ) ? $translations[ $string ] : '';
} // end get_default_localization_translation
