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


  /* MOBILE NAVIGATION */
   $('.js--nav-icon').click(function() {
      // var nav = $('.js--main-nav');
      //  var icon =$('.js--nav-icon');
       
      //   nav.slideToggle(200);

      //  if(icon.hasClass('icon-navicon-round')) {
      //       icon.addClass('ion-close-round')
      //       icon.removeClass('icon-navicon-round')
      //  } else {
      //       icon.addClass('icon-navicon-round')
      //       icon.removeClass('ion-close-round')
      //  }
   //});


 /* MY SOLUTION */
    $(".js--nav-icon").click(function(){
      $(".js--main-nav").toggleClass("js--main-nav");
    });

  ///////////////////////////////
  //12. There are some other problems going on with the navigation. How can I fix these?
  //https://jsfiddle.net/d83ykzku/1/

   /* MOBILE NAVIGATION ENDS*/

});

