/*
#############################
#   Main JS for ____________   #
#############################
*/
window.params = {
  widthFull: 750,
  maxRowHeight: 0,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};
if (params.isMobile) $('nav').add('header').addClass('mobile');


/*$(window).stellar();*/
if (!params.isMobile) {
  /*$('.offer').mousemove(function(e){
      var amountMovedX = (e.pageX * -1 / 12);
      var amountMovedY = (e.pageY * -1 / 12);
      $('.viewport').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
  });*/

}






jQuery(document).ready(function($) {
  $('.offer').headroom();

  $("img.lazy").lazyload();

  $('.nav_b').add('.anchor').on('click', function(event) {
      event.preventDefault();

      var target = $(this).attr('href');
      var top = $(target).position().top;
      $(window).resize(function(event) {
       top = $(target).position().top;
      });

      $('html, body').animate({
          scrollTop: top
      }, 800);
  });

var top = $('.valves_row_2').offset().top + 20;
var bottom = $('.valves_row_3').offset().top + 30;

$('.valves__item--fixed').css('top', top);

$(function() { // add class on scroll
  var $document = $(document),
      $element = $('.valves__item--fixed'),
      className = 'hasScrolled',
      className2 = 'endScrolled';


  $document.scroll(function() {
    $element.toggleClass(className, $document.scrollTop() >= top);
    $element.toggleClass(className2, $document.scrollTop() >= bottom);
    $('.valves__item--fixed').css('top', top);
    $('.valves__item--fixed.hasScrolled').css('top', '60px');
    $('.valves__item--fixed.hasScrolled.endScrolled').css('top', bottom);
  });

});


/*-----------------------------------------------------------------*/  
  $('.magnific').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',
    modal: false,

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


  $(function(){
    $('input[type=file]').on('change', function(event) {
      var val = $(this).val()//.split('\\').pop();
      $(this).siblings('span').find('span.file_title').html(val);
    });
  })


  $(function(){
    $('.mobile_menu').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('active').siblings('ul').toggleClass('active');
    });
  })


  $(function(){
    $('.s_icon').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('active').parent().toggleClass('active');
    });
  })

  $(function(){
    $('.clients_slider').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true
    })

    // On before slide change
    $('.clients_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.client_box[index="'+ (nextSlide+1) +'"]').addClass('active').siblings().removeClass('active');
    });

    $('.client_box').on('click', function(event) {
      event.preventDefault();
      $('.clients_slider').slick('slickGoTo', $(this).attr('index')-1);
    });
  })


  $('.mfp-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    modal: false,
    mainClass: 'my-mfp-slide-bottom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });


});




