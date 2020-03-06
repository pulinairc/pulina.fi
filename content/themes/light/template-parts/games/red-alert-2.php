<?php
require_once( get_theme_file_path( 'inc/simple_html_dom.php') );
$cncnet_url = 'https://cncnet.org/red-alert-2';
$cncnet_cachefile = get_theme_file_path( 'inc/cache/cncnet.html' );
$cncnet_cachetime = 5000;

if ( ! file_exists( $cncnet_cachefile ) ) {
  touch( $cncnet_cachefile );
  copy( $cncnet_url, $cncnet_cachefile );
}

// If file is older than cache time, overwrite file
if ( time() - filemtime( $cncnet_cachefile ) > 2 * $cncnet_cachetime ) {
  copy( $cncnet_url, $cncnet_cachefile );
}

$html = file_get_html( $cncnet_cachefile );
?>
<section class="slide slide-games slide-red-alert-2 shade-darker">

  <div data-video="BmYE3JDL59g" class="video js-background-video">
    <div class="background">
      <div id="yt-player-red-alert-2"></div>
    </div>
  </div>
  <div class="video-overlay js-video-overlay" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/red-alert-2.jpg');"></div> 

  <div class="container container-max">

    <div class="content">
      <h2>Red Alert 2 Mental Omega</h2>
      <p></p>
    </div>

    <div class="box">
      <div>
        <span class="value value-small value-small">#pulina</span>
        <span class="label">Huoneen nimi</span>
      </div>

      <div>
        <span class="value value-small">Strategia</span>
        <span class="label">Pelityyppi</span>
      </div>

      <div>
        <span class="value value-small">8</span>
        <span class="label">Maksimimäärä pelaajia</span>
      </div>
    </div>

    <div class="content">
    <p><a href="<?php echo get_home_url(); ?>/red-alert-2" class="button button-ghost">Näin pelaat</a></p>
    </div>
  </div>

</section><!--/.slide-->