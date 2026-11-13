<?php
/**
 * Front page hero
 *
 * @package annastiina
 */

namespace Air_Light; ?>
<section class="block block-hero block-hero-fp">
  <div class="container">
    <div class="cols">
      <div class="col col-content">
        <div class="content">
          <h1 id="content">IRC ei kuole koskaan, jos se meistä on kiinni</h1>
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

          <?php get_template_part( 'template-parts/app-download' ); ?>

        </div>
      </div>

      <div class="col">
        <?php get_template_part( 'template-parts/irc-scroller' ); ?>
      </div>
    </div>
  </div>
</section>
