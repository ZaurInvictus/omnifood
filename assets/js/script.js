$(document).ready(function() {

 $('.js--section-features').waypoint(function(direction) {
   if(direction == "down") {
       $('nav').addClass('sticky');
   } else {
       $('nav').removeClass();
   }

   }, {
     offset: '60px;' // event happens 60px before we reach chosen section
 });


  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window') 
  // }, {
  //   offset: '25%'
  // })
});