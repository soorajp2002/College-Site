
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      800: {
        items: 3
      },
      1200: {
        items: 4
      }    
    }
  })