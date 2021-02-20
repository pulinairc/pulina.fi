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

<section class="block block-hero block-hero-fp block-hero-blog<?php if ( is_singular( 'post' ) ) : ?> block-hero-single<?php endif; ?>">
  <div class="container">
    <div class="cols">
      <div class="col col-content">
        <div class="content">
          <?php if ( is_singular( 'post' ) ) : ?>
            <h1 id="content"><?php the_title(); ?></h1>
            <p class="time"><time datetime="<?php the_time( 'c' ); ?>"><?php echo get_the_date( get_option( 'date_format' ) ); ?></time></p>
          <?php elseif ( is_archive() ) : ?>
            <h1 id="content"><?php echo wp_kses_post( substr( get_the_archive_title(), strpos( get_the_archive_title(), ': ' ) + 2 ) ); ?></h1>
          <?php else : ?>
            <h1 id="content">Blogi</h1>
          <?php endif; ?>
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
