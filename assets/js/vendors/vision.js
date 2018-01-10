'use strict'
AOS.init();

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

$(window).scroll(function(){
  var wScroll = $(this).scrollTop()
  var hWindow = $(window).height()

  // Paralax Background
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    $('.head-background').css({'background-position': 'center '+ (-wScroll /3) + 'px'})
  }
})
