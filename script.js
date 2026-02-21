const apiKey = "99a8e47367dc50f35a7ed75b9cf85066"; // <-- Paste your real API key

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const condition = document.getElementById("condition");
const icon = document.getElementById("weatherIcon");
const wind = document.getElementById("wind");

async function getWeather(city) {
  try {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // Debug: see full response in browser console

    /* Error Handling */
    if (data.cod === "404") {
      alert("City not found. Try a major city (Chennai, Mumbai, London)");
      return;
    }

    if (data.cod === 401) {
      alert("Invalid API key. Please check your API key.");
      return;
    }

    if (!response.ok) {
      alert("Something went wrong. Try again.");
      return;
    }

    /* Update UI */
    cityName.innerText = data.name;
    temperature.innerText = `${Math.round(data.main.temp)}°C`;
    humidity.innerText = `${data.main.humidity}%`;
    condition.innerText = data.weather[0].main;
    wind.innerText = `${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    setTheme(data.weather[0].main.toLowerCase());

  } catch (error) {
    alert("Network error. Check your internet connection.");
    console.error(error);
  }
}

/* Dynamic Background Theme */
function setTheme(weather) {
  document.body.className = "";

  if (weather.includes("clear")) {
    document.body.classList.add("clear");
  } 
  else if (weather.includes("cloud")) {
    document.body.classList.add("clouds");
  } 
  else if (weather.includes("rain") || weather.includes("drizzle")) {
    document.body.classList.add("rain");
  } 
  else if (weather.includes("snow")) {
    document.body.classList.add("snow");
  }
}

/* Search Button Click */
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  getWeather(city);
});

/* Press Enter to Search */
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    getWeather(city);
  }
});

/* Load Default City on Start */
window.onload = () => {
  getWeather("Chennai");
};
