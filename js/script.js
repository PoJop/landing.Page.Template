$(window).scroll(function() {
  $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});

$(document).ready(function() {
  $("a.nav").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 80}, 1100);
    return false;
  });
});

$(document).ready(function() {
	$('.menu_icon').click(function(event){
		$('.menu_icon, .menu_body').toggleClass('active')
		$('body').toggleClass('lock')
	});
});

$(document).ready(function() {
$('.nav').click(function(event) {
		$('.menu_icon, .menu_body').removeClass('active')
		$('body').removeClass('lock')
	});
});
// $(document).ready(function() {
//     $(window).scroll(function(event) {
//         let scroll = $(this).scrollTop();
//         let opacity = 0 + (scroll / 10);
//         if (opacity > 0) {
//             $('.header_1').css('opacity', opacity);
//         }
//     });
// });


$(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
        $('.menu_icon_flex').addClass('scroll_burger');
    }
    else {
        $('.menu_icon_flex').removeClass('scroll_burger')
    }
});

 $(window).scroll(function(){
     if ($(window).scrollTop() > 0) {
         $('.header').addClass('color');
     }
     else {
         $('.header').removeClass('color')
     }
 });

 $(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});



$(window).on('beforeunload',function(){
	    $(window).scrollTop = (0);
});