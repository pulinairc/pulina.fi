<?php
/**
 * Pulina app showcase: the same session on a computer and a phone, playing in step, and what the app does.
 *
 * @package annastiina
 */

namespace Air_Light;

$features = array(
  'Highlightit'               => 'Kaikki sinulle osoitetut viestit yhdessä listassa, myös poissa ollessasi tulleet.',
  'Reaktiot ja vastaukset'    => 'Vastaa lainaamalla tai reagoi emojilla. Muissa IRC-ohjelmissa ne näkyvät tavallisina viesteinä.',
  'Kuvat, videot ja linkit'   => 'Esikatselut näkyvät suoraan keskustelussa. Oman kuvan voi liittää viestiin.',
  'Jaetut'                    => 'Kanavalle jaetut kuvat ja linkit löytyvät omalta välilehdeltään.',
  'Päivän aktiivisimmat'      => 'Näet, kuka on jutellut tänään eniten, ja aamulla eilisen kärkikolmikon.',
  'Käyttäjälista'             => 'Kanavan väki näkyy keskustelun vieressä, ja juuri nyt juttelevat ovat ylimpänä.',
  'Ilmoitukset'               => 'Valitse kanavakohtaisesti, tuleeko ilmoitus kaikista viesteistä vai vain highlighteista.',
  'Pysyy taustalla'           => 'pulina.fi-tunnuksella yhteys pysyy auki, vaikka kone olisi kiinni.',
  'Pelkkä nimimerkki riittää' => 'Ei palvelinosoitteita eikä asetuksia. Kirjoitat nimimerkin, ja olet kanavalla.',
  'Selkeä käyttöliittymä'     => 'Jokaisen kuva ja nimimerkki näkyvät kerran, ja peräkkäiset viestit asettuvat niiden alle.',
  'Oma profiilikuva'          => 'Lisää oma kuva tai valitse eläinhahmo. Kuva näkyy muille appin käyttäjille.',
  'Komennot ja pikanäppäimet' => 'Irssistä tutut komennot toimivat.',
);
$img = get_template_directory_uri() . '/images/app/';
?>

<section class="block pa-sec2" aria-labelledby="pulina-app-title">
  <div class="pa-wide">
    <div class="pa-stage">
      <div class="pa-head pa-head-split">
        <h2 id="pulina-app-title">Irkkaa Pulinan omalla appilla</h2>
        <p class="pa-lead">Highlightit, reaktiot, kuvat ja ilmoitukset #pulinaan. Muissa IRC-ohjelmissa kaikki näkyy tavallisena tekstinä.</p>
      </div>

      <div class="pa-duo2 pa-sync">
        <figure class="pa-dev pa-dev-phone">
          <div class="pa-hand"><span class="pa-btn-side pa-btn-action"></span><span class="pa-btn-side pa-btn-vol"></span><span class="pa-btn-side pa-btn-power"></span>
            <video src="<?php echo esc_url( $img . 'phone.mp4' ); ?>" poster="<?php echo esc_url( $img . 'phone.jpg' ); ?>" muted playsinline preload="auto" aria-label="Pulina-appi puhelimessa"></video>
          </div>
          <figcaption>Puhelimessa</figcaption>
        </figure>
        <figure class="pa-dev pa-dev-desk">
          <div class="pa-win">
            <video src="<?php echo esc_url( $img . 'desk.mp4' ); ?>" poster="<?php echo esc_url( $img . 'desk.jpg' ); ?>" muted playsinline preload="auto" aria-label="Pulina-appi tietokoneella"></video>
          </div>
          <figcaption>Tietokoneella</figcaption>
        </figure>
      </div>

      <div class="pa-g pa-g4 pa-rules pa-inside">
        <?php foreach ( $features as $title => $text ) : ?>
          <div class="pa-f"><h3><?php echo esc_html( $title ); ?></h3><p><?php echo esc_html( $text ); ?></p></div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
