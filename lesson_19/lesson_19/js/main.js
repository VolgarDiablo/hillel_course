const API_KEY = "dd9e2e680e4c75d60ea32403d32379e5";
const city = "Dnipro";

function getDate() {
  const date = new Date();
  const currentDate = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;

  const currentTime = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  document.getElementById("date").innerText = `Date: ${currentDate}`;
  document.getElementById("time").innerText = `Time: ${currentTime}`;
  getWeather();
}

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Dnipro&lang=eng&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();

    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    document.getElementById("weatherIcon").src = iconUrl;
    document.getElementById("weatherIcon").alt = data.weather[0].description;


    document.getElementById("city").innerText = data.name;
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById(
      "feels_like"
    ).innerText = `Feels like: ${data.main.feels_like}°C`;
    document.getElementById(
      "description"
    ).innerText = `Description: ${data.weather[0].description}`;
    document.getElementById(
      "humidity"
    ).innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById(
      "pressure"
    ).innerText = `Pressure: ${data.main.pressure} hPa`;
    document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;
  } catch (error) {
    console.error("Failed to fetch weather datas: ", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getDate();
  document.getElementById("updateButton").addEventListener("click", getDate);
});
