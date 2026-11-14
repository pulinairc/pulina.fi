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
const PULINA_APP_FALLBACK_VERSION = '1.22.0';
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

// Which file is which, in the order the guide pages list them.
const PULINA_APP_GUIDE_FILES = array(
  'mac'      => array( 'apple', 'macOS', 'Mac, jossa on Apple-siru (M1 tai uudempi). Avaa tiedosto ja vedä Pulina Ohjelmat-kansioon. Jos Mac estää avaamisen, valitse Järjestelmäasetukset → Tietosuoja ja suojaus → Avaa silti.' ),
  'win'      => array( 'windows', 'Windows', 'Asennusohjelma Windows 10:lle ja 11:lle. Jos Windows varoittaa tuntemattomasta julkaisijasta, valitse Lisätietoja → Suorita silti.' ),
  'appimage' => array( 'linux', 'Linux, mikä tahansa jakelu', 'Ei asennusta: anna tiedostolle suoritusoikeus ja käynnistä se.' ),
  'deb'      => array( 'linux', 'Ubuntu, Debian ja Linux Mint', 'Asenna tuplaklikkaamalla tai komennolla', 'sudo apt install ./Pulina_*_amd64.deb' ),
  'arch'     => array( 'linux', 'Arch Linux ja sen johdannaiset', 'Asenna komennolla', 'sudo pacman -U pulina-*-x86_64.pkg.tar.zst' ),
  'apk'      => array( 'android', 'Android', 'Salli asennus tuntemattomista lähteistä, kun puhelin kysyy.' ),
);

// The files and big buttons each guide page shows.
const PULINA_APP_GUIDE_SETS = array(
  'all'     => array( 'files' => array( 'mac', 'win', 'appimage', 'deb', 'arch', 'apk' ), 'buttons' => array( 'mac', 'win', 'appimage', 'apk' ) ),
  'mac'     => array( 'files' => array( 'mac' ), 'buttons' => array( 'mac' ) ),
  'windows' => array( 'files' => array( 'win' ), 'buttons' => array( 'win' ) ),
  'linux'   => array( 'files' => array( 'appimage', 'deb', 'arch' ), 'buttons' => array( 'appimage' ) ),
  'phone'   => array( 'files' => array( 'apk' ), 'buttons' => array( 'apk' ) ),
);

const PULINA_APP_BUTTON_LABELS = array(
  'mac'      => 'Lataa macOS:lle',
  'win'      => 'Lataa Windowsille',
  'appimage' => 'Lataa Linuxille',
  'apk'      => 'Lataa Androidille',
);

/**
 * [pulina_app os="all|mac|windows|linux|phone"]: download buttons from the newest GitHub release
 * and which file is for which system, for the guide pages.
 */
function pulina_app_guide( $atts ) {
  $atts = shortcode_atts( array( 'os' => 'all' ), $atts, 'pulina_app' );
  $set = PULINA_APP_GUIDE_SETS[ $atts['os'] ] ?? PULINA_APP_GUIDE_SETS['all'];
  $dl = pulina_app_downloads();

  $buttons = '';
  foreach ( $set['buttons'] as $key ) {
    $icon = PULINA_APP_GUIDE_FILES[ $key ][0];
    $buttons .= '<a class="pa-btn pa-btn-light no-external-link-indicator" href="' . esc_url( $dl[ $key ] ) . '">' . pulina_app_icon( $icon ) . '<span>' . esc_html( PULINA_APP_BUTTON_LABELS[ $key ] ) . '</span></a>';
  }

  $rows = '';
  foreach ( $set['files'] as $key ) {
    list( $icon, $system, $how ) = PULINA_APP_GUIDE_FILES[ $key ];
    $command = PULINA_APP_GUIDE_FILES[ $key ][3] ?? '';
    $how = esc_html( $how ) . ( $command ? ' <code>' . esc_html( $command ) . '</code>' : '' );
    $name = basename( wp_parse_url( $dl[ $key ], PHP_URL_PATH ) );
    $rows .= '<li><b>' . pulina_app_icon( $icon, 'pa-ico pa-ico-s' ) . esc_html( $system ) . '</b><span>' . $how . '</span>'
      . '<a class="no-external-link-indicator" href="' . esc_url( $dl[ $key ] ) . '">' . esc_html( $name ) . '</a></li>';
  }
  if ( in_array( $atts['os'], array( 'all', 'phone' ), true ) ) {
    $rows .= '<li><b>' . pulina_app_icon( 'apple', 'pa-ico pa-ico-s' ) . 'iPhone</b><span>Tulossa App Storeen.</span></li>';
  }

  return '<div class="pa-guide"><div class="pa-guide-btns">' . $buttons . '</div>'
    . '<p class="pa-guide-h">Mikä tiedosto minulle?</p><ul class="pa-guide-files">' . $rows . '</ul>'
    . '<p class="pa-guide-all"><a href="' . esc_url( PULINA_APP_RELEASES . '/latest' ) . '">Kaikki versiot ja muutokset GitHubissa</a></p></div>';
}
add_shortcode( 'pulina_app', __NAMESPACE__ . '\pulina_app_guide' );
