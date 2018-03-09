$(document).ready(function(){

//Drupal Behaviour ?
  /*var mainMenuHeight = $("#mainMenu ul").outerHeight() + 3 ;
  $(".accountBg").css('height', mainMenuHeight);

  $("#mainMenu li").hover(
    function(){
      $this = $(this);
      var headerHeight = $("header").outerHeight();
      $this.find($(".subMenuContainer")).css('top',headerHeight);
      if($this.hasClass('account')){
        $(".accountBg").addClass("hover");
      }
    },
    function(){
        $(".accountBg").removeClass("hover");
    }
  ) ; 

  $("#carousel .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
        dotsEach: true,
        autoplay: true,

      }
  );

  // Software carousel
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

  $("#tabs").tabs({active: 0});*/

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