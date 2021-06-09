$(document).ready(() => {
  new Swiper(".profitable__swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
    },
  });
  new Swiper(".home-page-news__swiper-container", {
    slidesPerView: 4,
    spaceBetween: 27,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
    },
  });
});
