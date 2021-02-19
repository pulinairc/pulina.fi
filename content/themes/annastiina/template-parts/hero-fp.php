<?php
/**
 * Front page hero
 *
 * @package annastiina
 */

namespace Air_Light;
?>
<section class="block block-hero block-hero-fp">
  <div class="container">
    <div class="cols">
      <div class="col col-content">
        <div class="content">
          <h1>IRC ei kuole koskaan, jos se meistä on kiinni</h1>
          <p><b>Irkissä on sitä jotain.</b> Pulinan ideana on ollut alusta asti pitää hengissä IRCin taikaa. Tervetuloa kanavalle!</p>

          <!-- defaults: {
                name: "Pulina",
                host: "irc.quakenet.org",
                port: 6667,
                password: "",
                tls: false,
                rejectUnauthorized: true,
                nick: "pulisija%%",
                username: "",
                realname: "The Lounge User",
                join: "#pulina",
        }, -->

          <form method="get" action="https://chat.pulina.fi" class="form-join">
            <input type="hidden" name="name" value="Pulina">
            <input type="hidden" name="host" value="irc.quakenet.org">
            <input type="hidden" name="join" value="#pulina">
            <input type="hidden" name="realname" value="The Lounge User">
            <input type="hidden" name="rejectUnauthorized" value="false">
            <input type="hidden" name="tls" value="false">
            <input type="hidden" name="port" value="6667">
            <input type="text" class="nick" id="nick" name="nick" value="" placeholder="Nimimerkkisi">
						<button type="submit">/join #pulina</button>
          </form>

        </div>
      </div>

      <div class="col">
        <div class="irc-scroller-wrapper">
          <iframe src="<?php echo esc_url( get_home_url() ); ?>/irclog.php"   frameborder="0" class="irc-scroller" tabindex="-1"></iframe>
          <?php include get_theme_file_path( '/svg/repo-terminal-glow.svg' ); ?>
        </div>
      </div>
    </div>
  </div>
</section>
