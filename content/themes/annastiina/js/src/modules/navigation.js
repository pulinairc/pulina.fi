// TODO: Refactor file
/* eslint-disable default-case, eqeqeq, no-restricted-globals, no-undef, no-var, vars-on-top, prefer-const, max-len, prefer-destructuring, no-redeclare, no-plusplus, no-use-before-define, no-unused-vars, block-scoped-var, func-names */
/*
An accessible menu for WordPress

https://github.com/theme-smith/accessible-nav-wp
Kirsten Smith (kirsten@themesmith.co.uk)
Licensed GPL v.2 (http://www.gnu.org/licenses/gpl-2.0.html)

This work derived from:
https://github.com/WordPress/twentysixteen (GPL v.2)
https://github.com/wpaccessibility/a11ythemepatterns/tree/master/menu-keyboard-arrow-nav (GPL v.2)
*/

(function ($) {
  const menuContainer = $('body');
  const menuToggle = menuContainer.find('#nav-toggle');

  // Toggles the menu button
  (function () {
    if (!menuToggle.length) {
      return;
    }

    menuToggle.on('click', function () {
      // Change screen reader expanded state
      $(this).attr(
        'aria-expanded',
        $(this).attr('aria-expanded') === 'false' ? 'true' : 'false',
      );

      // Change screen reader open/close labels
      $('#nav-toggle-label').text(
        // eslint-disable-next-line no-undef
        $('#nav-toggle-label').text() === annastiina_screenReaderText.expand_toggle
          ? annastiina_screenReaderText.collapse_toggle
          : annastiina_screenReaderText.expand_toggle,
      );

      $(this).attr(
        'aria-label',
        $(this).attr('aria-label') === annastiina_screenReaderText.expand_toggle
          ? annastiina_screenReaderText.collapse_toggle
          : annastiina_screenReaderText.expand_toggle,
      );
    });
  }());
}(jQuery));
