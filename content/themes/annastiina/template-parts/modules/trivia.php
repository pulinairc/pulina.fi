<?php
/**
 * Trivia.
 *
 * @package annastiina
 */

// Require Simple HTML DOM
require_once get_theme_file_path( 'inc/includes/simplehtmldom_1_9_1/simple_html_dom.php' );
?>

<section class="block block-trivia">
  <div class="container">

  <div class="cols">
  <div class="col">
  <h2 class="block-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -1 24 24" width="100" height="100" preserveAspectRatio="xMinYMin" class="jam jam-medal-f" fill="currentColor"><path d="M4 17.502c.307.2.699.26 1.067.133l2.536-.864a1.23 1.23 0 0 1 .794 0l2.536.864c.368.126.76.067 1.067-.133v3.894l-4-1.358-4 1.358v-3.894zm3.677-2.37l-2.062.703a1 1 0 0 1-1.222-.51L3.388 13.26a1 1 0 0 0-.43-.447l-2-1.06a1 1 0 0 1-.485-1.181l.71-2.273a1 1 0 0 0 0-.596l-.71-2.273a1 1 0 0 1 .486-1.182l1.999-1.06a1 1 0 0 0 .43-.446L4.393.674A1 1 0 0 1 5.615.165l2.062.703a1 1 0 0 0 .646 0l2.062-.703a1 1 0 0 1 1.222.51l1.005 2.066a1 1 0 0 0 .43.447l2 1.06a1 1 0 0 1 .485 1.181l-.71 2.273a1 1 0 0 0 0 .596l.71 2.273a1 1 0 0 1-.486 1.182l-1.999 1.06a1 1 0 0 0-.43.446l-1.005 2.067a1 1 0 0 1-1.222.509l-2.062-.703a1 1 0 0 0-.646 0zM8 5a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1z"/></svg>Pulinan tietäjät</h2>

  <p class="larger">Pulinalla on helmikuusta 2021 eteenpäin myös tietovisailuun keskittyvä kanava #pulina.trivia, jolta löytyy triviabotti nimeltään <b>Pelimestari</b>.</p>

  <p>Trivia on IRCissä klassikkopeli, jota on ajettu aikoinaan mm. #trivia-nimisellä kanavalla. Näiden kuitenkin hiljalleen lopettaessa toimintansa Pulina lähti elvyttämään omaa triviaansa, joka pyöri hetken ajan joskus vuosien 2008-2010 välissä. Laadukkaita suomenkielisiä tietovisakysymyksiä on ladattu botin kysymystietokantaan yhteensä 83347 kpl.</p>

  <p class="button-wrapper"><a href="<?php echo esc_url( get_page_link( 1655 ) ); ?>" class="button button-large">Lue pulinatriviasta lisää</a></p>
</div>

<div class="col">
    <?php
    // Simplepie already declared before
    // Fetch data and set up simple cache
    $triviastats_url = 'https://trivia.pulina.fi/tweek.html';
    $triviastats_cachefile = get_theme_file_path( 'inc/cache/trivia_tweek.html' );
    $triviastats_cachetime = 3600; // 1 hour

    // If cache file does not exist, let's create it
    if ( ! file_exists( $triviastats_cachefile ) ) {
      touch( $triviastats_cachefile );
      copy( $triviastats_url, $triviastats_cachefile );
    }

    $html = file_get_html( $triviastats_url );
    $table = $html->find('table', 1);
    $rowData = array();

    foreach ( $table->find('tr') as $row ) {
      $keeper = array();

      foreach ( $row->find('td, th') as $cell ) {
          $data = array();
          $data['tag'] = $cell->tag;                      //stored Tag and Plain Text
          $data['plaintext'] = $cell->plaintext;
          $keeper[] = $data;
      }
      $rowData[] = $keeper;
  } ?>
  <div class="trivia trivia-top-week">
    <h2>Viikon parhaat pelaajat</h2>
  <ul>
  <?php $c = 0; foreach ( array_slice( $rowData, 0, 12 ) as $row => $tr ) : ?>
    <li><div class="points"><div class="bar">
      <?php $i = 0; foreach ( $tr as $td ) : ?>
        <?php if (
          strpos( $td['plaintext'], '#' ) === false &&
          'Rank' !== $td['plaintext'] &&
          'Nick' !== $td['plaintext'] &&
          'Points' !== $td['plaintext'] &&
          'Questions' !== $td['plaintext']
          ) : ?>
          <?php if ( 1 === $i ) {
            $class = 'nick';
          } elseif ( 2 === $i ) {
            $class = 'value score';
          } elseif ( 3 === $i ) {
            $class = 'answers';
          }
          ?>
          <span class="<?php echo $class; ?>"><?php echo $td['plaintext']; ?></span>
          <?php if ( 2 === $i ) { ?>
            <div class="progress" style="width: <?php echo $td['plaintext'] / 1000000 * 100; ?>%"><span class="value"><?php echo $td['plaintext']; ?></span></div>
          <?php } ?>
        <?php endif; ?>
      <?php $i++; endforeach; ?>
    </div></div></li>
  <?php $c++; endforeach; ?>
  </ul>
  </div>

  </div>
  </div>
  </div>
</section>
