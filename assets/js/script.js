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



   /* ANIMATION ON SCROLL */
   $('.js--wp-1').waypoint(function(direction){
     $('.js--wp-1').addClass('animated fadeIn');
   }, {
     offset: '50%'
   });

   /* ANIMATION ON SCROLL */
   $('.js--wp-2').waypoint(function(direction){
     $('.js--wp-2').addClass('animated fadeInUp');
   }, {
     offset: '50%'
   });

   /* ANIMATION ON SCROLL */
   $('.js--wp-3').waypoint(function(direction){
     $('.js--wp-3').addClass('animated fadeIn');
   }, {
     offset: '50%'
   });

   /* ANIMATION ON SCROLL */
   $('.js--wp-4').waypoint(function(direction){
     $('.js--wp-4').addClass('animated pulse');
   }, {
     offset: '50%'
   });

});