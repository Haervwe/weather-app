import "./style.scss";

// api call example https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=d11947c85c8c62e4c1cdf9c292dc17d0
//API key = d11947c85c8c62e4c1cdf9c292dc17d0

const main = document.getElementById("main");

const postionParam = {
  options: {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  },
};

async function location() {
  const response = await new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      postionParam.options
    )
  );
  return response;
}

async function localweather() {
  const pos = await location();
  let lat = Math.floor(pos.coords.latitude * 1000) / 1000;
  let lon = Math.floor(pos.coords.longitude * 1000) / 1000;
  console.log(lat, lon);
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d11947c85c8c62e4c1cdf9c292dc17d0&units=metric`
  );
  console.log(await weather.json());
  const weatherForecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d11947c85c8c62e4c1cdf9c292dc17d0&units=metric`
  );
  console.log(await weatherForecast.json());
}

function userLocationBtn() {
  let btn = document.createElement("button");
  btn.className = "userLocationBtn";
  btn.innerText = "Get Weather";
  btn.addEventListener("click", localweather);
  return btn;
}
main.appendChild(userLocationBtn());
