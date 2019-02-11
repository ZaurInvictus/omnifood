$(document).ready(function () {

  /* FOR THE STICKY NAVIGATION */
  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass();
    }

  }, {
    offset: '60px;' // event happens 60px before we reach chosen section
  });
    
  /* SCROLL ON BUTTONS */
   $('.js--scroll-to-plans').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
   });

});