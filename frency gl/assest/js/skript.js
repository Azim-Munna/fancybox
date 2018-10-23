(function($) {
    "use strict"

$(".text_slide").owlCarousel({
         center: true,
         items: 1,
         loop: true,
         autoplay:true,
         margin: 20,
        nav: false,
        mouseDrag:false,
         // smartSpeed:200,slideInUp slideOutUp
         animateOut: 'slideOutUp',
  animateIn: 'slideInUp'
        });
 $(".owl-loaded ").addClass("owl-carousel");

var win_width=$(window).width();
if(win_width>767){
var windowH = $(window).height();
$(".main-section").css("height", windowH + "px");
}
// alert(win_width);
})(jQuery);