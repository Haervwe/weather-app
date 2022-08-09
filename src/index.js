import "./style.scss";

// api call example https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=d11947c85c8c62e4c1cdf9c292dc17d0
const APIkey = "d11947c85c8c62e4c1cdf9c292dc17d0";
const main = document.getElementById("main");
let city = "London";
let units = "metric";
const postionParam = {
  options: {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  },
};

async function location() {
  const response = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      postionParam.options
    );
  });
  return response;
}

async function localweather() {
  let weather;
  try {
    const pos = await location();
    let lat = Math.floor(pos.coords.latitude * 1000) / 1000;
    let lon = Math.floor(pos.coords.longitude * 1000) / 1000;
    weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${units}`
    );
  } catch (e) {
    weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${units}`
    );
  }
  let localWeather = await weather.json();
  console.log(localWeather);
  return localWeather;
}

async function localForecast() {
  let weatherForecast;
  try {
    const pos = await location();
    let lat = Math.floor(pos.coords.latitude * 1000) / 1000;
    let lon = Math.floor(pos.coords.longitude * 1000) / 1000;
    weatherForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${units}`
    );
  } catch (e) {
    weatherForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=${units}`
    );
  }
  let localWeatherForecast = await weatherForecast.json();
  console.log(localWeatherForecast);
  return localWeatherForecast;
}

function userLocationBtn() {
  let btn = document.createElement("button");
  btn.className = "userLocationBtn";
  btn.innerText = "Get Weather";
  btn.addEventListener("click", renderLocalWeather);
  return btn;
}

function checkUnits() {
  if (units == "metric") {
    return "C";
  } else {
    return "F";
  }
}

async function renderLocalWeather() {
  const erase = document.getElementById("weatherCard");
  const weatherCard = document.createElement("div");
  weatherCard.id = "weatherCard";
  try {
    const weatherData = await localweather();
    let type = document.createElement("p");
    type.innerText = `Local Weather: ${weatherData.weather[0].main}, ${weatherData.weather[0].description}`;
    let actualCity = document.createElement("p");
    actualCity.innerText = `City: ${weatherData.name}`;
    let temp = document.createElement("p");
    temp.innerText = `Temperature: ${weatherData.main.temp}°${checkUnits()}`;
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity: ${weatherData.main.humidity}%`;
    let icon = document.createElement("img");
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherCard.appendChild(icon);
    weatherCard.appendChild(actualCity);
    weatherCard.appendChild(type);
    weatherCard.appendChild(temp);
    weatherCard.appendChild(humidity);
    if (erase != null) {
      erase.parentNode.removeChild(erase);
    }
    main.appendChild(weatherCard);
    renderLocalForecast();
  } catch (e) {
    console.log(e);
  }
}

async function renderLocalForecast() {
  const erase = document.getElementById("forecast");
  const forecast = document.createElement("div");
  forecast.id = "forecast";
  try {
    const weatherData = await localForecast();
    for (let i = 0; i < weatherData.list.length; i++) {
      let weatherCard = document.createElement("div");
      weatherCard.className = "weatherForecastCard";
      let type = document.createElement("p");
      type.innerText = `Local Weather: ${weatherData.list[i].weather[0].main}, ${weatherData.list[i].weather[0].description}`;
      //let actualCity = document.createElement("p");
      //actualCity.innerText = `City: ${weatherData.name}`;
      let temp = document.createElement("p");
      temp.innerText = `Temperature: ${
        weatherData.list[i].main.temp
      }°${checkUnits()}`;
      let humidity = document.createElement("p");
      humidity.innerText = `Humidity: ${weatherData.list[i].main.humidity}%`;
      let icon = document.createElement("img");
      icon.src = `http://openweathermap.org/img/wn/${weatherData.list[i].weather[0].icon}@2x.png`;
      weatherCard.appendChild(icon);
      //weatherCard.appendChild(actualCity);
      weatherCard.appendChild(type);
      weatherCard.appendChild(temp);
      weatherCard.appendChild(humidity);
      forecast.appendChild(weatherCard);
    }
    if (erase != null) {
      erase.parentNode.removeChild(erase);
    }
    main.appendChild(forecast);
  } catch (e) {
    console.log(e);
  }
}

main.appendChild(userLocationBtn());
