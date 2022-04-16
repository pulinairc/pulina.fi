<?php
/**
 * Gateway.
 *
 * @package annastiina
 */
?>

<section class="block block-gateway">
  <div class="container">

  <div class="cols">
  <div class="col">
    <h2 class="block-title">Irkkiin muilla alustoilla</h2>

    <p class="larger">On ihan ymmärrettävää, että nykyaikana porukka jakautuu eri alustoihin. Voit edelleen käyttää omaa alustaasi, koska Pulina siltaa muuallekin.</p>
    <p>Pulinalla on käytössä <a href="https://github.com/42wim/matterbridge">matterbridge</a>-siltaus, joka yhdistää tällä hetkellä IRCin, Telegramin ja Discordin toisiinsa.</p>

    <p class="button-wrapper"><a href="<?php echo esc_url( get_page_link( 16 ) ); ?>" class="button button-large">Katso muut alustat</a></p>

    <p class="how-to">Pääset yhteisöön mukaan myös Discordilla ja Telegramilla.</p>
    <div class="clients">
      <a href="https://t.me/pulinagateway" class="no-external-link-indicator">
        <?php include get_theme_file_path( '/svg/platform-telegram.svg' ); ?>
      </a>
      <a href="https://discord.gg/KM2drFfBCR" class="no-external-link-indicator">
        <?php include get_theme_file_path( '/svg/platform-discord.svg' ); ?>
      </a>
      </div>
  </div>

  <div class="col col-image">
    <img src="<?php echo esc_url( get_template_directory_uri() ) . '/images/gateway-transparent.png'; ?>" alt="Pulina Gateway" />
  </div>

  </div>
  </div>
</section>
