<?php
/**
 * Template for displaying the footer
 *
 * Description for template.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:33:49
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-02-20 22:41:15
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package annastiina
 */

namespace Air_Light;

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer has-dark-bg">

  <div class="container">
    <p>
      <a href="https://chat.pulina.fi"><code>/join #pulina</code></a>
      <br />
      Kanavalla irkkaavat tekevät pulinan. Vuodesta 2008.
    </p>

    <ul class="social">
      <li>
        <a href="https://www.twitter.com/pulinairc">
          <span class="screen-reader-text">Seuraa Twitterissä</span>
          <?php include get_theme_file_path( '/svg/twitter.svg' ); ?>
        </a>
      </li>
      <li>
        <a href="https://www.github.com/pulinairc">
          <span class="screen-reader-text">Seuraa GitHubissa</span>
          <?php include get_theme_file_path( '/svg/github.svg' ); ?>
        </a>
      </li>
    </ul>
  </div>

  <p class="back-to-top"><a href="#page" class="js-trigger top no-text-link no-external-link-indicator" data-mt-duration="300"><span class="screen-reader-text"><?php echo esc_html( get_default_localization( 'Back to top' ) ); ?></span><?php include get_theme_file_path( '/svg/chevron-up.svg' ); ?></a></p>

</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>
</body>

</html>
