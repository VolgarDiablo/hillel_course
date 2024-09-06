// Function for dynamically adding scripts
function loadScript(url, callback) {
  const script = document.createElement("script");
  script.src = url;
  script.onload = callback;
  document.body.appendChild(script);
}

// We include jQuery, then initialize Slick Slider
loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function () {
  //Connecting Slick Slider After Loading jQuery
  loadScript("node_modules/slick-carousel/slick/slick.min.js", function () {
    // Initializing the slider
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

// Initializing a Leaflet Map
document.addEventListener("DOMContentLoaded", function () {
  const map = L.map("map").setView([48.46475, 35.0462], 13);

  // Adding an OpenStreetMap layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Adding a marker to the map
  const marker = L.marker([48.4647, 35.0462]).addTo(map);

  // Attaching a pop-up window to a marker
  marker.bindPopup("Dnipro, Ukraine").openPopup();
});
