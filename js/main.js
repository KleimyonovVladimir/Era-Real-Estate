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
  // $(function myMap() {
  //   var mapCanvas = document.getElementById("map");
  //   var mapOptions = {
  //     center: new google.maps.LatLng(51.5, -0.2),
  //     zoom: 10,
  //   };
  //   var map = new google.maps.Map(mapCanvas, mapOptions);
  // });

  // $(function myMap() {
  //   var mymap = L.map('mapid').setView([51.505, -0.09], 13);
  //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //     maxZoom: 18,
  //     id: 'mapbox/streets-v11',
  //     tileSize: 512,
  //     zoomOffset: -1,
  //     accessToken: 'your.mapbox.access.token'
  //   }).addTo(mymap);
  // });




  $(function () {
    $("#tabs").tabs().addClass("ui-tabs-vertical");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
  });
});
