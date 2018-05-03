(function($) {
  "use strict"; // Start of use strict
  //
  // $('#submitForm').submit(function(e) {
  //   // Stop form from submitting normally
  //   e.preventDefault();
  //   $.ajax('https://api.mailgun.net/v3/sandbox54544e84665444178799a3ad074d93a0.mailgun.org/messages',
  //   {
  //     type:"POST",
  //     username: 'api',
  //     password: 'key-7b0e90b1869ff36858c4d8e740ba2798',
  //     crossDomain: true,
  //     dataType: 'json',
  //     headers: {
  //       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
  //       "Access-Control-Allow-Origin": "http://localhost:3000/",
  //       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  //       "Access-Control-Allow-Credentials": "true",
  //       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
  //     } ,
  //     data:{
  //       "html": '<h1>Test messages</h1>',
  //       "subject": "Hey Tiffeny",
  //       "from": "Mailgun Sandbox <kevin@kevin.com>",
  //       "to": "richard <info@savvyrocks.ca>",
  //       "subject": "Hello Tiffeny",
  //       "text": "Congratulations Tiffeny, you just sent an email with Mailgun!  You are truly awesome!"
  //     },
  //     success:function(a,b,c){
  //       alert( 'mail sent: ', b );
  //     }.bind(this),
  //     error:function( xhr, status, errText ){console.log( 'mail sent failed: ', xhr.responseText );}
  //   })
  // });

  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true
  });
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

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

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  // $(document).scroll(function () {
  // 	  var $nav = $("#mainNavSec");
  // 	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  // 	});

})(jQuery); // End of use strict
