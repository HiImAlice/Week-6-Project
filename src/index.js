let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
let showTime = document.querySelector(".timeNow");
showTime.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  searchCity(city);
}
function displayWeather(response) {
  document.querySelector("#cityHeader").innerHTML = response.data.name;
  document.querySelector(".currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let apiKey = "49ca946f460f00fafc1fb63ecfc6fcf4";
  let citySearch = document.querySelector("#cityInput").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

let currentTemp = document.querySelector(".currentTemp");
let Flink = document.querySelector("#farenheit");
let cLink = document.querySelector("#celsius");
function tempToF(event) {
  event.preventDefault();
  currentTemp.innerHTML = `66ºF`;
}
Flink.addEventListener("click", tempToF);

function tempToC(event) {
  event.preventDefault();
  currentTemp.innerHTML = `17ºC`;
}
cLink.addEventListener("click", tempToC);
let cityForm = document.querySelector("#cityForm");
cityForm.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let apiKey = "49ca946f460f00fafc1fb63ecfc6fcf4";
  let coordUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;
  axios.get(coordUrl).then(displayWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  let cityHeader = document.querySelector("#cityHeader");
  cityHeader.innerHTML = `Your Current Location`;
}
let currentButton = document.querySelector("#currentButton");
currentButton.addEventListener("click", getCurrentLocation);
