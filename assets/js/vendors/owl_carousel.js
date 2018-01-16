$(document).ready(function() {
  const owl = $('.owl-carousel')
  owl.owlCarousel({
    loop: true,
    margin: 10,
    lazyLoad: true,
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 40
      },
      767: {
        items: 1,
        nav: false,
        margin: 40
      },
      991: {
        items: 2,
        nav: false,
        margin: 40
      },
      1199: {
        items: 3,
        nav: false,
        margin: 40
      }
    }
  })
  $('.carousel-nav-next').click(function() {
    owl.trigger('next.owl.carousel');
  })
  $('.carousel-nav-prev').click(function() {
    owl.trigger('prev.owl.carousel');
  })
})
