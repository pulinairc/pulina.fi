<?php
/**
 * Pulina app downloads and icons for the front page.
 *
 * @package annastiina
 */

namespace Air_Light;

// Flip when the App Store and Google Play listings are live.
const PULINA_STORES_OPEN = false;

const PULINA_APP_RELEASES = 'https://github.com/pulinairc/pulina-app/releases';
const PULINA_APP_FALLBACK_VERSION = '1.21.2';
const PULINA_STORE_URLS = array(
  'ios'  => 'https://apps.apple.com/',
  'play' => 'https://play.google.com/store/',
);

// File name endings of each download in a release.
const PULINA_APP_FILES = array(
  'mac'      => '_aarch64.dmg',
  'win'      => '_x64-setup.exe',
  'appimage' => '_amd64.AppImage',
  'deb'      => '_amd64.deb',
  'arch'     => '-x86_64.pkg.tar.zst',
  'apk'      => '_android.apk',
);

/**
 * Download links of the newest release, from the GitHub API at most once an hour.
 */
function pulina_app_downloads() {
  $cached = get_transient( 'pulina_app_downloads' );
  if ( is_array( $cached ) ) {
    return $cached;
  }

  $links = pulina_app_fallback_downloads();
  $response = wp_remote_get( 'https://api.github.com/repos/pulinairc/pulina-app/releases/latest', array( 'timeout' => 5 ) );
  $release = is_wp_error( $response ) ? null : json_decode( wp_remote_retrieve_body( $response ), true );

  foreach ( $release['assets'] ?? array() as $asset ) {
    foreach ( PULINA_APP_FILES as $key => $ending ) {
      if ( str_ends_with( $asset['name'], $ending ) ) {
        $links[ $key ] = $asset['browser_download_url'];
      }
    }
  }

  set_transient( 'pulina_app_downloads', $links, $release ? HOUR_IN_SECONDS : 5 * MINUTE_IN_SECONDS );
  return $links;
}

function pulina_app_fallback_downloads() {
  $v = PULINA_APP_FALLBACK_VERSION;
  $base = PULINA_APP_RELEASES . "/download/v{$v}/";
  return array(
    'mac'      => "{$base}Pulina_{$v}_aarch64.dmg",
    'win'      => "{$base}Pulina_{$v}_x64-setup.exe",
    'appimage' => "{$base}Pulina_{$v}_amd64.AppImage",
    'deb'      => "{$base}Pulina_{$v}_amd64.deb",
    'arch'     => "{$base}pulina-{$v}-1-x86_64.pkg.tar.zst",
    'apk'      => "{$base}Pulina_{$v}_android.apk",
  );
}

/**
 * An inline platform icon from svg/app-*.svg.
 */
function pulina_app_icon( $name, $class = 'pa-ico' ) {
  $svg = file_get_contents( get_theme_file_path( "svg/app-{$name}.svg" ) );
  return str_replace( '<svg ', '<svg class="' . esc_attr( $class ) . '" ', $svg );
}

/**
 * A store or download badge; without a link it is shown as coming soon.
 */
function pulina_app_badge( $icon, $small, $big, $href = '' ) {
  $inner = pulina_app_icon( $icon ) . '<span><small>' . esc_html( $small ) . '</small><b>' . esc_html( $big ) . '</b></span>';
  if ( ! $href ) {
    return '<span class="pa-badge is-soon" aria-disabled="true">' . $inner . '</span>';
  }
  return '<a class="pa-badge no-external-link-indicator" href="' . esc_url( $href ) . '">' . $inner . '</a>';
}
