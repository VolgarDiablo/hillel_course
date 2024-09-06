// Функция для динамического добавления скриптов
function loadScript(url, callback) {
  const script = document.createElement("script");
  script.src = url;
  script.onload = callback;
  document.body.appendChild(script);
}

// Подключаем jQuery, затем инициализируем Slick Slider
loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function () {
  // Подключаем Slick Slider после загрузки jQuery
  loadScript("node_modules/slick-carousel/slick/slick.min.js", function () {
    // Инициализация слайдера
    $(document).ready(function () {
      $(".your-slider-class").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });
  });
});

// Инициализация карты Leaflet
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([48.46475, 35.0462], 13);

  // Добавляем слой карты OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Добавляем маркер на карту
  const marker = L.marker([48.4647, 35.0462]).addTo(map);

  // Привязываем всплывающее окно к маркеру
  marker.bindPopup("Dnipro, Ukraine").openPopup();
});
