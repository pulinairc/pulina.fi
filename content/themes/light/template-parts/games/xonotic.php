<?php
require_once( get_theme_file_path( 'inc/simple_html_dom.php') );
$xonotic_listing_url = 'http://dpmaster.deathmask.net/?game=xonotic&server=139.59.208.244:26000';
$xonotic_listing_cachefile = get_theme_file_path( 'inc/cache/xonotic-listing.html' );
$xonotic_listing_cachetime = 900;

if ( ! file_exists( $xonotic_listing_cachefile ) ) {
  touch( $xonotic_listing_cachefile );
  copy( $xonotic_listing_url, $xonotic_listing_cachefile );
}

// If file is older than cache time, overwrite file
if ( time() - filemtime( $xonotic_listing_cachefile ) > 2 * $xonotic_listing_cachetime ) {
  copy( $xonotic_listing_url, $xonotic_listing_cachefile );
}

$html_listing_url = file_get_html( $xonotic_listing_cachefile );
?>
<section class="slide slide-games slide-xonotic shade-darker">

  <div data-video="DKvh_IwG7o4" class="video js-background-video">
    <div class="background">
      <div id="yt-player-xonotic"></div>
    </div>
  </div>
  <div class="video-overlay js-video-overlay" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/maxresdefault.jpg');"></div> 

  <div class="container container-max">

    <div class="content">
      <h2>Xonotic</h2>
      <p>Xonotic on ensimmäisen persoonan ammuntapeli, joka on avointa lähdekoodia ja saatavilla niin Windowsille, Linuxille kuin Macillekin. Peli on saanut voimakkaasti vaikutteita Quakesta sekä Unreal Tournamentista. Projektin tavoitteena on olla "paras kaltaisensa peli", jota kehitetään täysin vapaaehtoisten yhteisön jäsenten voimin. Pulinalla on oma 24/7 pyörivä Xonotic-serveri tulilla, jonne pääsee pelaamaan milloin vain.</p>
    </div>

    <div class="box">
      <div>
        <span class="value value-small value-smaller"><?php echo $html_listing_url->find('#name')[1]; ?></span>
        <span class="label">Palvelimen nimi</span>
      </div>

      <div>
        <span class="value value-small"><?php echo $html_listing_url->find('#players')[1]; ?></span>
        <span class="label">Pelaajia linjoilla</span>
      </div>

      <div>
        <span class="value value-small"><?php echo $html_listing_url->find('#gametype')[1]; ?></span>
        <span class="label">Pelityyppi</span>
      </div>

      <div>
        <span class="value value-small"><?php echo $html_listing_url->find('#map')[1]; ?></span>
        <span class="label">Kenttä</span>
      </div>
    </div>

    <div class="content">
      <p><a href="https://xonotic.org" class="button button-ghost">Lataa Xonotic</a></p>
    </div>
  </div>

</section><!--/.slide-->