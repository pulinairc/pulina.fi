<?php
/**
 * Navigation layout.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:22:26
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-02-20 14:22:02
 *
 * @package annastiina
 */

namespace Air_Light;

?>

<div class="main-navigation-wrapper" id="main-navigation-wrapper">

<nav id="nav">
  <ul>
    <li data-nav-custom-content>
      <div>Some custom content</div>
    </li>
    <li data-nav-highlight><a href="#">Home</a></li>
    <li>
      <a href="#">About</a>
      <ul><!-- or active attribute can be here -->
        <li><a href="#">Team</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
    <li><a data-nav-close="false" href="#">Add Page</a></li>
  </ul>
</nav>

</div>
