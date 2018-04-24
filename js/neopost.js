$(document).ready(function(){
  content_banner();
  resize_menu_connect_full();

  /* Play button on banner behaviour */
  $(".video-play").click(function(e){
      e.preventDefault();
      $this = $(this);
      $this.next(".video-iframe").slideDown(1000);
      $this.fadeOut(500);
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

  /* Accordeon Animation */
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

  /* Carousel */

  $(".banner-carousel .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
      }
  );

  $(".carousel-image .owl-carousel").owlCarousel(
      {
        items: 1,
        responsiveClass:true,
        responsive:{
          0:{
            nav:false,
            loop: false
          },
          769:{
              nav:true,
              loop: true
          }
        }
      }
  );

  $(".promotion .owl-carousel").owlCarousel(
      {
        nav: true,
        dots: false,

        responsiveClass:true,
        responsive:{
          0:{
            items: 1
          },
          769:{
             items: 2
          },
          935:{
             items: 3
          },
          1070:{
             items: 4
          },
          1180:{
             items: 5
          }
        }
      }
  );

   $(".carousel-text .owl-carousel").owlCarousel(
      {
        items: 1,
      }
  );

   $(".quote .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
      }
  );

  if(isMobile() == 'm'){
    $(".product-library > ul").addClass('owl-carousel');
    $(".list-img ul").addClass('owl-carousel');
  }
  else{
    $(".product-library > ul").removeClass('owl-carousel');
    $(".list-img ul").removeClass('owl-carousel');
  }

  $(".product .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
      }
  );

  $(".list-img .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
      }
  );

   $(".card.owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
      }
  );

  $("#tabs").tabs({active: 0});
  $("#accordion").accordion({active: false,collapsible: true});

  /* Menu mobile behaviour */
  /* Open mobile menu*/
  $('.menu-mobile > a').click(function(e){
    e.preventDefault();
    $('.menu-mobile > ul').toggle('slide');
  });

  /* Close mobile menu*/
  $('.menu-mobile .menu-close .close').click(function(e){
    e.preventDefault();
    $('.menu-mobile > ul').toggle('slide');
    $(this).closest('.menu-container').find('ul').toggle('slide');
  });

  /*Navigate menu mobile*/
  $('.menu-mobile .menu-link-container a').click(function(e){
    e.preventDefault();
    $(this).next('.menu-container').find('ul').toggle('slide');
  });

  $('.menu-mobile .menu-back .back').click(function(e){
    e.preventDefault();
    $(this).closest('.menu-container').find('ul').toggle('slide');
  });

});

$(window).resize(function(){
  content_banner();
  isMobile();
  resize_menu_connect_full();
});

function isMobile(){
  $isMobile = "";
  $windowSize = window.innerWidth;
  switch(true){
    case $windowSize >= 1180 : $isMobile = "d"; break;
    case $windowSize < 1180 && $windowSize > 768 : $isMobile = "t"; break;
    case $windowSize <= 768 : $isMobile = "m"; break;
  }
  return($isMobile);
}


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

function resize_menu_connect_full(){
  if($(".menu-connect-full").length){
    $menuHeight = $(".menu").outerHeight();
    $(".menu-connect-full").css('height',$menuHeight);
  }
}