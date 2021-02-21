<?php
/**
 * Navigation layout.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:22:26
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-02-20 14:31:43
 *
 * @package annastiina
 */

namespace Air_Light;

?>

<div class="main-navigation-wrapper" id="main-navigation-wrapper">

  <nav style="display: none;" id="nav" class="nav-primary" aria-label="<?php echo esc_html( get_default_localization( 'Main navigation' ) ); ?>">

    <?php wp_nav_menu( array(
      'theme_location' => 'primary',
      'container'      => false,
      'depth'          => 4,
      'menu_class'     => 'menu-items',
      'menu_id'        => 'main-menu',
      'echo'           => true,
      'fallback_cb'    => __NAMESPACE__ . '\Nav_Walker::fallback',
      'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
      'has_dropdown'   => true,
      'walker'         => new Nav_Walker(),
    ) ); ?>

  </nav><!-- #nav -->

  <!-- <nav id="nav">
  <ul>
    <li data-nav-custom-content>
      <div>Some custom content</div>
    </li>
    <li data-nav-highlight><a href="#">Home</a></li>
    <li>
      <a href="#">About</a>
      <ul>
        <li><a href="#">Team</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
    <li><a data-nav-close="false" href="#">Add Page</a></li>
  </ul>
</nav> -->

</div>
