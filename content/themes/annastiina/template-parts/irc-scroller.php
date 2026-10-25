<?php
/**
 * Live #pulina scroller, filled by js/irc-scroller.js from /irclog/stream.
 *
 * @package annastiina
 */

namespace Air_Light;

?>
<div class="irc-scroller-wrapper">
  <div class="irc-scroller" role="log" aria-live="off" aria-label="#pulina-kanavan viimeisimmät viestit" data-stream="<?php echo esc_url( home_url( '/irclog/stream' ) ); ?>"></div>
  <?php include get_theme_file_path( '/svg/repo-terminal-glow.svg' ); ?>
</div>
