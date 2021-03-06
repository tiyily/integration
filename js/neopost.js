$(document).ready(function(){
  content_banner();
  resize_menu_connect_full();

  /*Header sticky*/
  var iScrollPos = 0;
  var header = $('header').height();

  $(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos) {
        $('header').removeClass('sticky');
        $('.search').css('margin-top', '0');
    } else {
       $('header').addClass('sticky');
       $('.search').css('margin-top', header);
    }
    iScrollPos = iCurScrollPos;
  });


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
      $(".filter-sidebar legend + div").hide(1000);
    }
    else{
      $legend.addClass("is-open");
      $(".filter-sidebar legend + div").show(1000);
    }
  });

  /*Filter Calendar opening animation*/
  $(".filter-date > a").click(function(e){
    e.preventDefault();
    $this = $(this);
    if($this.hasClass("is-open")){
      $this.removeClass("is-open");
      $(".filter-date-list").slideUp(1000);
    }
    else{
      $this.addClass("is-open");
      $(".filter-date-list").slideDown(1000);
    }
  });

  /*Filter Calendar closing animation*/
  $(".filter-date a.close").click(function(e){
    e.preventDefault();
    if($(".filter-date > a").hasClass("is-open")){
      $(".filter-date > a").removeClass("is-open");

      $(".filter-date-list").slideUp(1000);
    }
    else{
      $(".filter-date > a").addClass("is-open");
      $(".filter-date-list").slideDown(1000);
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

  if(isMobile() == 'm'){
    $(".product-library > ul").addClass('owl-carousel');
    $(".list-img ul").addClass('owl-carousel');
    $(".nav-second").addClass('nav-second-mobile');
    $(".bloc-range").each(function(){
      $(this).addClass('owl-carousel');
    });
  }
  else{
    $(".product-library > ul").removeClass('owl-carousel');
    $(".list-img ul").removeClass('owl-carousel');
    $(".nav-second").removeClass('nav-second-mobile');
  }

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

  $(".bloc-range.owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
        nav: true,
        dots: false,
      }
  );

  $(".product .owl-carousel").owlCarousel(
      {
        items: 1,
        loop: true,
        autoWidth: true,
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

  $('.nav-second-mobile .nav-second-open').click(function(e){
    e.preventDefault();
    $this = $(this);
    if($this.hasClass('is-open')){
       $this.removeClass('is-open');
       $this.prev('ul').slideUp(1000);
    }
    else{
      $this.addClass('is-open');
      $this.prev('ul').slideDown(1000);
    }
  });

  /* Form file styling*/
  $('.form-file input').simpleFileInput({
    placeholder : 'Choose a file',
    buttonText : 'Choose a file',
    width : '100%'
  });

  /* Product Img Gallery*/
  lightbox.option({
    'albumLabel': ""
  });


  bg_grid_2();

});

$(window).resize(function(){
  content_banner();
  isMobile();
  resize_menu_connect_full();
  bg_grid_2();
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

  $windowWidth = $(window).width();
  console.log("window : " + $windowWidth + " document : " + $(document).width());

  if ($('.grid-2 .full').length) {

    if($windowWidth > 1180){
      $fullWidth = $('body').width() - $('aside').width() - (($('body').width() - 1180) / 2);
      $('.grid-2 .full').css('width',$fullWidth);
    }else{
      $('.grid-2 .full').css('width','100%');
    }
  }

  if($('.grid-2 .video-iframe').length){
      $fullVideo = $('body').width() - $('aside').width() - (($('body').width() - 1180) / 2) - $(".grid-2 .overlay").outerWidth();
     
      if($fullVideo <= 360){$fullVideo = "100%";}
      $(".grid-2 .video-iframe").css('width', $fullVideo);
  }

  if($('.grid-2 .quote-side').length){
    if($windowWidth > 768 && $windowWidth < 1180){
      $('.grid-2 .quote-side .owl-carousel').css('width', $('body').width() - $('aside').width() - 30);
    }
  }
}

function resize_menu_connect_full(){
  if($(".menu-connect-full").length){
    $menuHeight = $(".menu").outerHeight();
    $(".menu-connect-full").css('height',$menuHeight);
  }
}

function bg_grid_2(){
  if($('aside .related').length){
    var total = $('aside .related').length;
    $('aside .related').each(function(index) {
      $this = $(this);
      var position = $this.position();
      if (index === total - 1) {
       var fullHeight = $('.content').height() - position.top;
        $this.find('.full').css('height', fullHeight).css('top', position.top);

      }else{
        $this.find('.full').css('height', $this.outerHeight()).css('top', position.top);

      }
    });
  }
}