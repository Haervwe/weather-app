import "./style.scss";
import date from "date-and-time";
import loadingImg from "./img/loading.gif";

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

function checkUnits() {
  if (units == "metric") {
    return "C";
  } else {
    return "F";
  }
}

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

function showError() {
  let lastError = document.getElementById("error");
  if (lastError != null) {
    lastError.parentNode.removeChild(lastError);
  }
  let errorDiv = document.createElement("div");
  errorDiv.id = "error";
  errorDiv.innerText = "Your search yielded no result.";
  let remove = document.createElement("button");
  remove.innerText = "X";
  remove.style.backgroundColor = "red";
  remove.addEventListener("click", () => {
    errorDiv.parentNode.removeChild(errorDiv);
  });
  errorDiv.appendChild(remove);
  main.appendChild(errorDiv);
}

async function localWeather() {
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
    showError();
  }
  let localWeather = await weather.json();
  console.log(localWeather);
  return localWeather;
}

async function cityWeather(search) {
  let weather;
  try {
    weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&units=${units}`
    );
  } catch (e) {
    weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=${units}`
    );
    showError();
  }
  let cityWeather = await weather.json();
  console.log(cityWeather);
  return cityWeather;
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
    showError();
  }
  let localWeatherForecast = await weatherForecast.json();
  console.log(localWeatherForecast);
  return localWeatherForecast;
}

async function cityForecast(search) {
  let weatherForecast;
  try {
    weatherForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${APIkey}&units=${units}`
    );
  } catch (e) {
    weatherForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=${units}`
    );
    showError();
  }
  let cityWeatherForecast = await weatherForecast.json();
  console.log(cityWeatherForecast);
  return cityWeatherForecast;
}

async function renderWeather(search) {
  let currentWeather = document.getElementById("currentWeather");
  const erase = document.getElementById("weatherCardLocal");
  if (erase != null) {
    erase.parentNode.appendChild(loading("loadingWeather"));
    erase.parentNode.removeChild(erase);
  }
  const weatherCard = document.createElement("div");
  weatherCard.className = "weatherCard";
  weatherCard.id = "weatherCardLocal";
  try {
    let weatherData;
    if (search == false) {
      weatherData = await localWeather();
    } else {
      weatherData = await cityWeather(search);
    }
    removeNode("loadingWeather");
    let type = document.createElement("p");
    type.innerText = `Local Weather: ${weatherData.weather[0].main}, ${weatherData.weather[0].description}`;
    let actualCity = document.createElement("p");
    actualCity.innerText = `City: ${weatherData.name}`;
    let dateP = document.createElement("p");
    dateP.className = "date";
    let now = new Date();
    const pattern = date.compile("dddd, MMMM DD YYYY, HH:mm");
    dateP.innerText = date.format(now, pattern);
    let temp = document.createElement("p");
    temp.className = "temp";
    temp.innerText = `Temperature: ${weatherData.main.temp}°${checkUnits()}`;
    let humidity = document.createElement("p");
    humidity.className = "humidity";
    humidity.innerText = `Humidity: ${weatherData.main.humidity}%`;
    let icon = document.createElement("img");
    icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    weatherCard.appendChild(dateP);
    weatherCard.appendChild(actualCity);
    weatherCard.appendChild(icon);
    weatherCard.appendChild(type);
    weatherCard.appendChild(temp);
    weatherCard.appendChild(humidity);
    currentWeather.appendChild(weatherCard);
    setTimeout(function () {
      weatherCard.className = "weatherCard after";
    }, 50);
  } catch (e) {
    console.log(e);
  }
}

function loading(id) {
  let loading = document.createElement("img");
  loading.className = "loading";
  loading.src = loadingImg;
  loading.id = id;
  return loading;
}

function removeNode(id) {
  let node = document.getElementById(`${id}`);
  if (node != null) {
    node.parentNode.removeChild(node);
  }
}

async function renderForecast(search) {
  let forecastWrapper = document.getElementById("forecastWrapper");
  const erase = document.getElementById("forecast");
  if (erase != null) {
    erase.parentNode.appendChild(loading("loadingForecast"));
    erase.parentNode.removeChild(erase);
  }
  const forecast = document.createElement("div");
  forecast.id = "forecast";
  try {
    let weatherData;
    if (search == false) {
      weatherData = await localForecast();
    } else {
      weatherData = await cityForecast(search);
    }
    let lastDay;
    let currentContainer;
    let currentData;
    removeNode("loadingForecast");
    forecastWrapper.appendChild(forecast);
    for (let i = 0; i < weatherData.list.length; i++) {
      let dateHour = document.createElement("p");
      let dateDay = document.createElement("p");
      dateDay.className = "day";
      let dt = date.parse(
        `${weatherData.list[i].dt_txt}`,
        `YYYY-MM-DD hh:mm:ss`
      );
      const pattern = date.compile("HH:mm");
      dateHour.innerText = `${date.format(dt, pattern)} hs.`;
      const patternReduced = date.compile("dddd");
      let thisDay = date.format(dt, patternReduced);
      dateDay.innerText = thisDay;
      if (lastDay == thisDay) {
        let hourContainer = document.createElement("div");
        hourContainer.className = "hourContainer";
        let type = document.createElement("p");
        type.innerText = `Weather: ${weatherData.list[i].weather[0].description}`;
        let temp = document.createElement("p");
        temp.innerText = `Temp: ${
          weatherData.list[i].main.temp
        }°${checkUnits()}`;
        let humidity = document.createElement("p");
        humidity.innerText = `Humidity: ${weatherData.list[i].main.humidity}%`;
        let dataWrap = document.createElement("div");
        dataWrap.className = `dataWrap ${thisDay}`;
        dataWrap.style.display = "none";
        hourContainer.appendChild(dateHour);
        dataWrap.appendChild(type);
        dataWrap.appendChild(temp);
        dataWrap.appendChild(humidity);
        currentData.appendChild(dataWrap);
        currentContainer.appendChild(hourContainer);
        let reset;
        hourContainer.addEventListener("mouseenter", () => {
          let currentIcon = document.getElementById(`img${thisDay}`);
          reset = currentIcon.src;
          currentIcon.src = `http://openweathermap.org/img/wn/${weatherData.list[i].weather[0].icon}@2x.png`;
        });
        hourContainer.addEventListener("mouseleave", () => {
          let currentIcon = document.getElementById(`img${thisDay}`);
          currentIcon.src = reset;
        });
        hourContainer.addEventListener("click", () => {
          let currentIcon = document.getElementById(`img${thisDay}`);
          currentIcon.src = `http://openweathermap.org/img/wn/${weatherData.list[i].weather[0].icon}@2x.png`;
          reset = currentIcon.src;
          let wrapList = document.querySelectorAll(`.${thisDay}`);
          wrapList.forEach((elwrap) => {
            let wrap = elwrap;
            if (dataWrap !== elwrap) {
              wrap.className = `dataWrap ${thisDay}`;
              setTimeout(function () {
                wrap.style.display = "none";
              }, 200);
            }
          });
          let hourList = document.querySelectorAll(`.hourContainer${thisDay}`);
          hourList.forEach((elwrap) => {
            let wrap = elwrap;
            if (hourContainer !== elwrap) {
              wrap.className = `hourContainer hourContainer${thisDay}`;
            }
          });
          dataWrap.style.display = "grid";
          dataWrap.className = `dataWrap ${thisDay} active`;
          setTimeout(function () {
            hourContainer.className = `hourContainer hourContainer${thisDay} active`;
          }, 100);
        });
      } else {
        let data = document.createElement("div");
        data.className = "data";
        currentData = data;
        lastDay = thisDay;
        let weatherCard = document.createElement("div");
        weatherCard.className = "weatherForecastCard";
        let container = document.createElement("div");
        container.className = "forecastContainer";
        currentContainer = container;
        let hourContainer = document.createElement("div");
        hourContainer.className = `hourContainer hourContainer${thisDay} active`;
        let type = document.createElement("p");
        type.innerText = `Weather: ${weatherData.list[i].weather[0].description}`;
        let temp = document.createElement("p");
        temp.innerText = `Temp: ${
          weatherData.list[i].main.temp
        }°${checkUnits()}`;
        let humidity = document.createElement("p");
        humidity.innerText = `Humidity: ${weatherData.list[i].main.humidity}%`;
        let icon = document.createElement("img");
        icon.src = `http://openweathermap.org/img/wn/${weatherData.list[i].weather[0].icon}@2x.png`;
        icon.id = `img${thisDay}`;
        icon.className = "weatherIcon";
        let dataWrap = document.createElement("div");
        dataWrap.className = `dataWrap ${thisDay} active`;
        dataWrap.style.display = "grid";
        weatherCard.appendChild(dateDay);
        weatherCard.appendChild(icon);
        hourContainer.appendChild(dateHour);
        dataWrap.appendChild(type);
        dataWrap.appendChild(temp);
        dataWrap.appendChild(humidity);
        data.appendChild(dataWrap);
        container.appendChild(hourContainer);
        weatherCard.appendChild(container);
        weatherCard.appendChild(data);
        let reset;
        hourContainer.addEventListener("mouseenter", () => {
          let currentIcon = document.getElementById(`img${thisDay}`);
          reset = currentIcon.src;
          currentIcon.src = `http://openweathermap.org/img/wn/${weatherData.list[i].weather[0].icon}@2x.png`;
        });
        hourContainer.addEventListener("mouseleave", () => {
          let currentIcon = document.getElementById(`img${thisDay}`);
          currentIcon.src = reset;
        });
        hourContainer.addEventListener("click", () => {
          let currentIcon = document.getElementById(`img${thisDay}`);
          currentIcon.src = `http://openweathermap.org/img/wn/${weatherData.list[i].weather[0].icon}@2x.png`;
          reset = currentIcon.src;
          let wrapList = document.querySelectorAll(`.${thisDay}`);
          wrapList.forEach((elwrap) => {
            let wrap = elwrap;
            if (dataWrap !== elwrap) {
              wrap.className = `dataWrap ${thisDay}`;
              setTimeout(function () {
                wrap.style.display = "none";
              }, 200);
            }
          });
          let hourList = document.querySelectorAll(`.hourContainer${thisDay}`);
          hourList.forEach((elwrap) => {
            let wrap = elwrap;
            if (hourContainer !== elwrap) {
              wrap.className = `hourContainer hourContainer${thisDay}`;
            }
          });
          dataWrap.style.display = "grid";
          dataWrap.className = `dataWrap ${thisDay} active`;
          setTimeout(function () {
            hourContainer.className = `hourContainer hourContainer${thisDay} active`;
          }, 100);
        });
        forecast.appendChild(weatherCard);
        setTimeout(function () {
          weatherCard.className = "weatherForecastCard after";
        }, 10 * i);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function renderLocal() {
  try {
    renderWeather(false);
    renderForecast(false);
  } catch (error) {
    console.log(error);
  }
}

function renderCity(search) {
  try {
    renderWeather(search);
    renderForecast(search);
  } catch (error) {
    console.log(error);
  }
}

function userLocationBtn() {
  let btn = document.createElement("button");
  btn.className = "userLocationBtn";
  btn.innerText = "Local Weather";
  btn.type = "button";
  btn.addEventListener("click", renderLocal);
  return btn;
}

function render() {
  let weatherWrapper = document.createElement("div");
  weatherWrapper.id = "weatherWrapper";
  let form = document.createElement("form");
  form.id = "selectCity";
  form.method = "get";
  form.action = "";
  let title = document.createElement("h1");
  title.innerText = "Weather Forecast";
  let cityContainer = document.createElement("div");
  cityContainer.id = "cityContainer";
  let label = document.createElement("label");
  label.for = "city";
  label.innerText = "Search a City:";
  let cityInt = document.createElement("input");
  cityInt.id = "cityInt";
  cityInt.type = "text";
  cityInt.placeholder = "Mendoza";
  cityInt.name = "city";
  cityContainer.appendChild(label);
  cityContainer.appendChild(cityInt);
  form.appendChild(cityContainer);
  let submit = document.createElement("button");
  submit.className = "submit";
  submit.innerText = "Search City";
  submit.type = "button";
  submit.addEventListener("click", () => {
    let form = document.getElementById("selectCity");
    renderCity(form.city.value);
  });
  form.appendChild(submit);
  form.appendChild(userLocationBtn());
  let currentWeather = document.createElement("div");
  currentWeather.id = "currentWeather";
  currentWeather.appendChild(loading("loadingWeather"));
  let forecastWrapper = document.createElement("div");
  forecastWrapper.appendChild(loading("loadingForecast"));
  forecastWrapper.id = "forecastWrapper";
  weatherWrapper.appendChild(title);
  weatherWrapper.appendChild(currentWeather);
  weatherWrapper.appendChild(form);
  weatherWrapper.appendChild(forecastWrapper);
  let footer = document.createElement("div");
  footer.id = "footer";
  let footText = document.createElement("h5");
  footText.id = "footText";
  footText.innerText = "Crafted by Haervwe";
  footer.appendChild(footText);
  main.appendChild(weatherWrapper);
  main.appendChild(footer);
}

render();
renderLocal();
