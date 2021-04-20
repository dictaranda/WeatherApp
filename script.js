let now = new Date();
let hours = now.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
let dayList = now.getDay();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
let presentTime = document.querySelector("#date-time");
presentTime.innerHTML = `${days[dayList]} ${hours}:${minutes}`;
function city(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-text-input");
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${cityInput.value}`;
    findCity(cityInput.value);
}
let form = document.querySelector("#city");
form.addEventListener("submit", city);
function findCity(city) {
    let apiKey = "d0b5d0467c5bf8ec3ccfc78906d36cf8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // axios.get(apiUrl).then(showWeatherCondition);
    $.get(apiUrl, function (data) {
        let h2 = document.querySelector("#temperature");
        h2.innerHTML = data.main.temp + "&deg;";
        //console.log(jsn.main.temp);
    });
}
function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}
function nowPosition(position) {
    let lat = position.coords.latitude;
    let log = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=${apiKey}`;
    let apiKey = "d0b5d0467c5bf8ec3ccfc78906d36cf8";
    //axios.get(url).then(showWeather);
    $.get(url, function (data) {
        let h2 = document.querySelector("#temperature");
        h2.innerHTML = data.main.temp + "&deg;";
    });
}
navigator.geolocation.getCurrentPosition(nowPosition);
function currentTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let h2 = document.querySelector("h2");
    h2.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
    let forecasticon = document.querySelector("#forecasticon");
    forecasticon.setAttribute = ("forecasticon", "http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png");
}
function convertTemp(event) {
    event.preventDefault();
    let h2 = document.querySelector("#temperature");
    h2.innerHTML = "5";
    let nowTemperature = document.querySelector("#temperature-value");
    h2.innerHTML = nowTemperature;
}
