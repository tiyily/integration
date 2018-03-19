$(document).ready(function(){
  content_banner();

  /* Play button on banner behaviour */
  $(".video-play").click(function(){
      $this = $(this);
      $this.parent().addClass("video-show");

  });

  /*Filter Sidebar opening animation*/
  $(".filter-sidebar legend a").click(function(e){
    e.preventDefault();
    $legend = $(".filter-sidebar legend");
    if($legend.hasClass("is-open")){
      $legend.removeClass("is-open");
      $(".filter-sidebar legend + div").hide(2000);
    }
    else{
      $legend.addClass("is-open");
      $(".filter-sidebar legend + div").show(2000);
    }
  });

  /*Accordeon Animation*/
  $(".accordeon a").click(function(e){
    e.preventDefault();
    $h2 = $(this).parent();
    if($h2.hasClass("is-open")){
      $h2.removeClass("is-open");
      $h2.next('.accordeon-answer').slideUp(500);
    }
    else{
      $h2.addClass("is-open");
       $h2.next('.accordeon-answer').slideDown(500);
    }
  });

  $(".banner-carousel .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
      }
  );

  $(".carousel-image .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
        nav: true,
        autoWidth: true,
      }
  );

  $(".promotion .owl-carousel").owlCarousel(
      {
        items: 5,
        loop: true,
        nav: true,
      }
  );


});

$(window).resize(function(){
  content_banner();
});


/* Allow banner in content*/
function content_banner(){
  if ($('.grid-2 .full-img').length) {

    $windowWidth = $(window).width();

    if($windowWidth > 1180){
      $fullWidth = $('body').width() - $('aside').width() - (($('body').width() - 1180) / 2);
      $('.grid-2 .full-img').css('width',$fullWidth);
    }else{
      $('.grid-2 .full-img').css('width','100%');
    }
  }
}