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

  jQuery( '.viewport' ).parallax({
    mouseport: jQuery(".offer")
  }); 
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

var top = $('.valves_row_2').offset().top;
var bottom = $('.valves_row_3').offset().top;

console.log(top);
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



  $(function() {
    $( ".accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
    });
  });



jQuery(document).ready(function($) {
  function buildGallerySlider(){

    var windowWidth = $(window).width();
    var itemCount = Math.ceil(windowWidth/320);

    var requiredWidth = itemCount*320;
    //var galleryMargin = (requiredWidth - windowWidth)/2;
    var galleryMargin = requiredWidth - windowWidth;

    var galleryBlock = $('#photogallery .images');

    if (requiredWidth > windowWidth) {
      galleryBlock.css({'margin': '0 -'+galleryMargin+'px 0 0'});

      //var itemCountScroll = itemCount-1;
    var itemCountScroll = 1;
    
    } else {
      galleryBlock.css({'margin': '0'});

      var itemCountScroll = itemCount;
    }

    galleryConfig = {
      adaptiveHeight: true,
      autoplay: false,
      autoplaySpeed: 12000,
      arrows: false,
      dots: false,
      fade: false,
      infinite: true,
      initialSlide: 1,
      pauseOnHover: true,
      slide: '.col',
      slidesToShow: itemCount,
      slidesToScroll: itemCountScroll,
      speed: 1000,
      touchMove: true,
      useCSS: true
    };

    gallerySlider = $('#photogallery .images').slick(galleryConfig);
  

  var rNext = true;
  var rPrev = true; 

  $('.rNext').on({
    mouseenter: function(){
    rNext = true;
    fRepNext();
    },
    mouseleave: function(){
    rNext = false;
    }
  });

  $('.rPrev').on({
    mouseenter: function(){
    rPrev = true;
    fRepPrev();
    },
    mouseleave: function(){
    rPrev = false;
    }
  });

  function fRepNext(){
    $('#photogallery .images').slick("slickSetOption", "speed", "3000").slick("slickSetOption", "cssEase", "linear").slick("slickNext").slick("slickSetOption", "speed", "1000");
    if (rNext){
    setTimeout(fRepNext, 0);
    }
  }

  function fRepPrev(){
    $('#photogallery .images').slick("slickSetOption", "speed", "3000").slick("slickSetOption", "cssEase", "linear").slick("slickPrev").slick("slickSetOption", "speed", "1000");
    if (rPrev){
    setTimeout(fRepPrev, 0);
    }
  };


  $('#photogallery .images .col').magnificPopup({
       delegate: '.item',
       type: 'image',
       fixedContentPos: false,
       removalDelay: 300,
       mainClass: 'mfp-fade',
      gallery:{
        enabled:true
      }
    });
  
  };

  buildGallerySlider();

  $(window).resize(function(){
    gallerySlider.slick('unslick');
    buildGallerySlider();
  });

});


  if ($('#map-canvas').length > 0) {
    function googleMap_initialize() {

        var mapCenterCoord = new google.maps.LatLng(55.722227, 37.259083);
        var mapMarkerCoord = new google.maps.LatLng(55.722227, 37.259083);

        var mapOptions = {
          center: mapCenterCoord,
          zoom: 11,
          //draggable: false,
          disableDefaultUI: true,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var markerImage = new google.maps.MarkerImage('images/blue-marker.svg');
        var marker = new google.maps.Marker({
          icon: markerImage,
          position: mapMarkerCoord, 
          map: map,
          title:"NHI Group"
        });
        $(window).resize(function (){
          map.setCenter(mapCenterCoord);
        });
    };
    googleMap_initialize();

  };


});




