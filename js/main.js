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
  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      active: false,
    });
  });
  new Swiper(".reviews__swiper-container", {
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
  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      active: false,
    });
  });
  function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2),
      zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  $(function () {
    $("#tabs").tabs().addClass("ui-tabs-vertical");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
  });
});
