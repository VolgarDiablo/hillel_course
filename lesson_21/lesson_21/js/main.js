import "./../node_modules/slick-carousel/slick/slick.min.js";
import "./../node_modules/leaflet/dist/leaflet.js";

window.$ = window.jQuery = jQuery;

$(function () {
  $(".your-slider-class").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

// Инициализация карты
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([48.46475, 35.0462], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const marker = L.marker([48.4647, 35.0462]).addTo(map);
  marker.bindPopup("Dnipro, Ukraine").openPopup();
});
