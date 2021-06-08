$(document).ready(() => {
  $(".profitable__carousel").owlCarousel({
    loop: true,
    margin: 27,
    nav: true,
    navText: ['<img src="img/left.svg">', '<img src="./img/right.svg">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
