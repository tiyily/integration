$(document).ready(function(){

  $(".carousel .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
        dotsEach: true,
        autoWidth:true

      }
  );

  $(".testimonials .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
        dotsEach: true,

      }
  );

  $("#tabs").tabs({active: 0});

});