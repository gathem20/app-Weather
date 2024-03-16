const dot = require("dotenv");
const path = require("path");
dot.config();

const ApiKey = process.env.API_KEY;
const ApiUrl = process.env.URL_API;

const SearchBox = document.querySelector(".search input");

const SearchBtn = document.querySelector(".search button");

const Weather_icon = document.querySelector(".Weather-icon");
async function checkWeather(city) {
  const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
      Weather_icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      Weather_icon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      Weather_icon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      Weather_icon.src = "images/drizzle.png.png";
    } else if (data.weather[0].main == "Mist") {
      Weather_icon.src = "images/mist.png.png";
    }
    document.querySelector(".weather").style.display = "block";
  }
}

SearchBtn.addEventListener("click", () => {
  checkWeather(SearchBox.value);
});
