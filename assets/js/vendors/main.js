$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true
  });
});

// Web Complete Loaded
$(window).on('load', function(e) {
  setTimeout(function(){
    $(".pre-loader").fadeOut(200);
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      disable: 'phone'
    });
  }, 200);
})

if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
  skrollr.init({
    smoothScrolling: true,
    smoothScrollingDuration: 500
  });
}

particlesJS.load('particles-js', 'assets/particles.json');

$(window).scroll(function(){
  var wScroll = $(this).scrollTop()
  var hWindow = $(window).height()

  // Back to top show
  if (wScroll > $(window).height()) {
    $(".back-to-top").fadeIn();
  }
  else {
    $(".back-to-top").fadeOut();
  }

  // Paralax Background
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    $('.introduction').css({'background-position': 'center '+ (-wScroll /3) + 'px'})

    if (wScroll > $('.sending-money').offset().top - hWindow) {
      var wSendingMoneyScroll = wScroll - $('.sending-money').offset().top + hWindow;
      $('.sending-money').css({'background-position': 'center '+ (-wSendingMoneyScroll /3 + hWindow/3) + 'px'})
    }
  }
})

$(window).resize(function() {
  if ($(window).width() <= 767) {
    $('.introduction').css({'background-position': 'center 0'})
    $('.sending-money').css({'background-position': 'center 0'})
  }
})

// Expand menu
var isTopBarExpand = false
$('.top-bar .expand-button').click(function() {
  if (!isTopBarExpand) {
    isTopBarExpand = true;
    $('#top-bar').addClass('is-expand');
  }
  else {
    isTopBarExpand = false;
    $('#top-bar').removeClass('is-expand');
  }
})

// Back to Top
$(".back-to-top").click(function () {
   $("html, body").animate({scrollTop: 0}, 1100);
});
