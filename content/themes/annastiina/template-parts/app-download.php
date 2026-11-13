<?php
/**
 * Front page hero: join in the browser, or download the Pulina app for the visitor's own system.
 *
 * @package annastiina
 */

namespace Air_Light;

$dl = pulina_app_downloads();
$link = function ( $url, $text, $icon = '' ) {
  $ico = $icon ? pulina_app_icon( $icon, 'pa-ico pa-ico-s' ) : '';
  return '<a class="no-external-link-indicator" href="' . esc_url( $url ) . '">' . $ico . esc_html( $text ) . '</a>';
};
$linux_files = $link( $dl['appimage'], '.AppImage' ) . ', ' . $link( $dl['deb'], '.deb' ) . ', ' . $link( $dl['arch'], '.pkg.tar.zst' );
$mac = $link( $dl['mac'], 'macOS', 'apple' );
$win = $link( $dl['win'], 'Windows', 'windows' );
$linux = '<span>' . pulina_app_icon( 'linux', 'pa-ico pa-ico-s' ) . 'Linux <span class="pa-files">(' . $linux_files . ')</span></span>';

// The systems the big button does not offer. A Linux visitor gets the other Linux files.
$others = array(
  'mac'   => $win . $linux,
  'win'   => $mac . $linux,
  'linux' => $mac . $win . '<span>' . pulina_app_icon( 'linux', 'pa-ico pa-ico-s' ) . 'Myös ' . $link( $dl['deb'], '.deb' ) . ' ja ' . $link( $dl['arch'], '.pkg.tar.zst' ) . '</span>',
);
$primary = array(
  'mac'   => array( 'macOS:lle', 'apple', $dl['mac'] ),
  'win'   => array( 'Windowsille', 'windows', $dl['win'] ),
  'linux' => array( 'Linuxille', 'linux', $dl['appimage'] ),
);

// Phone column variants: the one matching the visitor, or "other".
if ( PULINA_STORES_OPEN ) {
  $ios = pulina_app_badge( 'appstore', 'Lataa', 'App Store', PULINA_STORE_URLS['ios'] );
  $play = pulina_app_badge( 'googleplay', 'Lataa', 'Google Play', PULINA_STORE_URLS['play'] );
  $apk = 'Android-paketti myös ' . $link( $dl['apk'], '.apk' ) . '-tiedostona';
  $phones = array(
    'android' => array( $play . $ios, $apk ),
    'other'   => array( $ios . $play, $apk ),
  );
} else {
  $phones = array(
    'ios'   => array( pulina_app_badge( 'appstore', 'Tulossa pian', 'App Store' ), 'Android-versio ' . $link( $dl['apk'], 'ladattavissa nyt' ) ),
    'other' => array( pulina_app_badge( 'android', 'Lataa nyt', 'Android', $dl['apk'] ), 'iPhone ja Google Play tulossa pian' ),
  );
}
?>

<div class="pa-h pa-h4 pa-detect" data-os="mac" data-pick="other">
  <p class="pa-h-label">Liity selaimella, ilman asennusta</p>

  <form method="get" action="https://chat.pulina.fi" class="form-join">
    <input type="hidden" name="name" value="Pulina">
    <input type="hidden" name="host" value="irc.quakenet.org">
    <input type="hidden" name="join" value="#pulina">
    <input type="hidden" name="realname" value="The Lounge User">
    <input type="hidden" name="rejectUnauthorized" value="false">
    <input type="hidden" name="tls" value="false">
    <input type="hidden" name="port" value="6667">
    <label class="pa-sr" for="nick">Nimimerkki</label>
    <input type="text" class="nick" id="nick" name="nick" value="" placeholder="Nimimerkkisi">
    <button type="submit">/join #pulina</button>
  </form>

  <div class="pa-h-or"><span>tai lataa Pulina-appi</span></div>

  <div class="pa-h-cols">
    <div class="pa-h-col pa-col-pc">
      <p class="pa-h-col-h">Tietokoneelle</p>
      <?php foreach ( $primary as $os => list( $to, $icon, $url ) ) : ?>
        <a class="pa-btn pa-btn-light no-external-link-indicator" data-for="<?php echo esc_attr( $os ); ?>" href="<?php echo esc_url( $url ); ?>"><?php echo pulina_app_icon( $icon ); // phpcs:ignore ?><span>Lataa <?php echo esc_html( $to ); ?></span></a>
      <?php endforeach; ?>
      <?php foreach ( $others as $os => $html ) : ?>
        <p class="pa-others" data-others="<?php echo esc_attr( $os ); ?>"><?php echo $html; // phpcs:ignore ?></p>
      <?php endforeach; ?>
    </div>

    <div class="pa-h-col pa-col-phone">
      <p class="pa-h-col-h">Puhelimeen</p>
      <?php foreach ( $phones as $who => list( $badges, $more ) ) : ?>
        <div class="pa-phone-v" data-phone="<?php echo esc_attr( $who ); ?>">
          <div class="pa-badges"><?php echo $badges; // phpcs:ignore ?></div>
          <p class="pa-h-col-more"><?php echo $more; // phpcs:ignore ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <a class="pa-own" href="<?php echo esc_url( get_page_link( 1852 ) ); ?>">Haluan irkata omalla tavallani &rarr;</a>
</div>
