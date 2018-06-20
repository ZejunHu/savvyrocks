(function($) {
  "use strict"; // Start of use strict

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    var $nav = $("#mainNav");
    if ($(this).scrollTop() > $nav.height()) {
      $("#mainNavSec").removeClass("d-none ");
      $("#mainNavSec").addClass("nav-scrolled");
    } else {
      $("#mainNavSec").addClass("d-none");
      $("#mainNavSec").removeClass("nav-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
