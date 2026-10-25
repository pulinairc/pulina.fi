<?php
/**
 * Default hero template file.
 *
 * This is the default hero image for page templates, called
 * 'block'. Strictly air specific.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2021-01-12 16:00:20
 * @package annastiina
 */

?>

<section class="block block-hero block-hero-fp block-hero-sub-page">
  <div class="container">
    <div class="cols">
      <div class="col col-content">
        <div class="content">
          <h1 id="content"><?php the_title(); ?></h1>
        </div>
      </div>

      <div class="col">
        <?php get_template_part( 'template-parts/irc-scroller' ); ?>
      </div>
    </div>
  </div>
</section>
