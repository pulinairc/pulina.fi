<?php
/**
 * Trivia weekly stats
 *
 * @package annastiina
 */

namespace Air_Light;
?>

<?php
    // Require Simple HTML DOM
    require_once get_theme_file_path( 'inc/includes/simplehtmldom_1_9_1/simple_html_dom.php' );

    // Fetch data and set up simple cache
    $triviastats_url = 'https://trivia.pulina.fi/tmonth.html';
    $triviastats_cachefile = get_theme_file_path( 'inc/cache/trivia_tmonth.html' );
    $triviastats_cachetime = 28800; // 8 hours

    // If cache file does not exist, let's create it
    if ( ! file_exists( $triviastats_cachefile ) ) {
      touch( $triviastats_cachefile );
      copy( $triviastats_url, $triviastats_cachefile );
    }

    $html = file_get_html( $triviastats_cachefile );
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
  <div class="trivia trivia-weekly trivia-monthly">
    <h2 class="trivia-title">Kuukauden parhaat pelaajat</h2>
  <ul>
  <?php $c = 0; foreach ( $rowData as $row => $tr ) : ?>
    <?php if ( 0 !== $c && 1 !== $c ) { ?><li><div class="points"><div class="bar"><?php } ?>
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
          <span class="<?php echo $class; ?>"><?php if ( 3 === $i ) { ?>Oikeita vastauksia <?php } ?><?php echo $td['plaintext']; ?><?php if ( 3 === $i ) { ?> kpl<?php } ?></span>
          <?php if ( 2 === $i ) { ?>
            <div class="progress" style="width: <?php echo $td['plaintext'] / 1000000 * 100; ?>%"><span class="value"><?php echo $td['plaintext']; ?></span></div>
          <?php } ?>
        <?php endif; ?>
      <?php $i++; endforeach; ?>
    <?php if ( 0 !== $c && 1 !== $c ) { ?></div></div></li><?php } ?>
  <?php $c++; endforeach; ?>
  </ul>
  </div>
