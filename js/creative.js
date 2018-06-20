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
  sr.reveal('.sr-image-left', {
    origin: 'left',
    distance: '8rem',
    duration: 500,
    easing: 'linear'
  });
  sr.reveal('.sr-image-right', {
    origin: 'right',
    distance: '8rem',
    duration: 1000,
    easing: 'linear'
  });

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

  // $('.carousel .carousel-item').each(function(){
  //   var next = $(this).next();
  //   if (!next.length) {
  //   next = $(this).siblings(':first');
  //   }
  //   next.children(':first-child').clone().appendTo($(this));
  //
  //   if (next.next().length>0) {
  //   next.next().children(':first-child').clone().appendTo($(this));
  //   }
  //   else {
  //     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  //   }
  // });

  // $(document).scroll(function () {
  // 	  var $nav = $("#mainNavSec");
  // 	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  // 	});

})(jQuery); // End of use strict
