/**
 * Air theme JavaScript.
 */

// Import modules (comment to disable)
import MoveTo from 'moveto';
import LazyLoad from 'vanilla-lazyload';
import getLocalization from './modules/localization';
import styleExternalLinks from './modules/external-link';
import './modules/gutenberg-helpers';
import './modules/webchat-login-form';
import './modules/prism';
import './modules/copy-to-clipboard';
import 'what-input';
import AnchorJS from 'anchor-js';

// Navigation
import hcOffcanvasNav from 'hc-offcanvas-nav';

// Define Javascript is active by changing the body class
document.body.classList.remove('no-js');
document.body.classList.add('js');

// Style external links
styleExternalLinks();

// Init lazyload
// Usage example on template side when air-helper enabled:
// <?php vanilla_lazyload_tag( get_post_thumbnail_id( $post->ID ) ); ?>
// Refer to documentation:
// 1) https://github.com/digitoimistodude/air-helper#image-lazyloading-1
// 2) https://github.com/verlok/vanilla-lazyload#-getting-started---html
var annastiina_LazyLoad = new LazyLoad();
// After your content has changed...
annastiina_LazyLoad.update();

// jQuery start
(function ($) {
  // Accessibility: Ensure back to top is right color on right background
  // Note: Needs .has-light-bg or .has-dark-bg class on all blocks
  var stickyOffset = $('.back-to-top').offset();
  var $contentDivs = $('.block, .site-footer');
  $(document).scroll(function () {
    $contentDivs.each(function (k) {
      var _thisOffset = $(this).offset();
      var _actPosition = _thisOffset.top - $(window).scrollTop();
      if (
        _actPosition < stickyOffset.top &&
        _actPosition + $(this).height() > 0
      ) {
        $('.back-to-top')
          .removeClass('has-light-bg has-dark-bg')
          .addClass(
            $(this).hasClass('has-light-bg') ? 'has-light-bg' : 'has-dark-bg'
          );
        return false;
      }
    });
  });

  // Detect Visible section on viewport from bottom
  // @link https://codepen.io/BoyWithSilverWings/pen/MJgQqR
  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // Accessibility: Ensure back to top is right color on right background
  $(window).on('resize scroll', function () {
    $('.block, .site-footer').each(function () {
      if ($(this).isInViewport()) {
        $('.back-to-top')
          .removeClass('has-light-bg has-dark-bg')
          .addClass(
            $(this).hasClass('has-light-bg') ? 'has-light-bg' : 'has-dark-bg'
          );
      }
    });
  });

  // Hide or show the 'back to top' link
  $(window).scroll(function () {
    // Back to top
    var offset = 300; // Browser window scroll (in pixels) after which the 'back to top' link is shown
    var offset_opacity = 1200; // Browser window scroll (in pixels) after which the link opacity is reduced
    var scroll_top_duration = 700; // Duration of the top scrolling animation (in ms)
    var link_class = '.back-to-top';

    if ($(this).scrollTop() > offset) {
      $(link_class).addClass('is-visible');
    } else {
      $(link_class).removeClass('is-visible');
    }

    if ($(this).scrollTop() > offset_opacity) {
      $(link_class).addClass('fade-out');
    } else {
      $(link_class).removeClass('fade-out');
    }
  });

  // Document ready start
  $(function () {

    // Toptod polling
    $('#toptod').fadeIn();
    $("#toptod").load('https://peikko.us/toptod-content-annastiina.php');
      var refreshId = setInterval(function() {
    $("#toptod").load('https://peikko.us/toptod-content-annastiina.php',
      function() {
        $("#content").fadeIn();
      }
    );}, 1000);

  });
})(jQuery);

// window.addEventListener('load', function () {
document.addEventListener('DOMContentLoaded', function () {

  // Anchors
  const headingAnchors = new AnchorJS();
  headingAnchors.options = {
    placement: 'left',
    visible: 'always',
    truncate: 20,
  };

  const paragraphAnchors = new AnchorJS();
  paragraphAnchors.options = {
    placement: 'right',
    visible: 'hover',
    icon: '¶',
    truncate: 20,
  };

  headingAnchors.add('.has-anchors h1');
  headingAnchors.add('.has-anchors h2');
  headingAnchors.add('.has-anchors h3');
  headingAnchors.add('.has-anchors h4');
  headingAnchors.add('.has-anchors h5');
  headingAnchors.add('.has-anchors h6');
  paragraphAnchors.add('.has-anchors p');

  // Side nav
  var Nav = new hcOffcanvasNav('#nav', {
    disableAt: false,
    customToggle: '.nav-toggle',
    navTitle: false,
    levelTitles: true,
    levelTitleAsBack: true,
    position: 'right',
    pushContent: '#page',
    insertClose: false,
    labelBack: 'Takaisin',
    activeToggleClass: 'is-active',
  });

  // Moveto triggers
  const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    }
  };
  const moveTo = new MoveTo({
      ease: 'easeInQuad'
    },
    easeFunctions
  );
  const triggers = document.getElementsByClassName('js-trigger');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});
