// Declaration for 3 Id to retrieve information from html
const searchForm = document.querySelector('#search');
const inputCity = document.querySelector('#city');
const inputCountry = document.querySelector('#country');

searchForm.addEventListener('submit', fetchResults);

// Use json to retrieve data via API
function fetchResults(event) {
  event.preventDefault();

  const city = inputCity.value;
  const country = inputCountry.value;
  const key = 'd47dad9261b341c58ef205541232304';
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city},${country}&aqi=no`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      Results(json);
    })
};


// Write code as described in weatherAPI and retrieve information
function Results(data) {
  const cityName = data.location.name;
  const countryName = data.location.country;
  const temperature = data.current.temp_c;
  const condition = data.current.condition.text;

  // Connect information by id so that the extracted information is displayed in html.
  document.getElementById('cityN').textContent = cityName;
  document.getElementById('countryN').textContent = countryName;
  document.getElementById('temperature').textContent = temperature;
  document.getElementById('condition').textContent = condition;
};

// Refrence:

// https://w3collective.com/fetch-display-api-data-javascript/

// https://nordicapis.com/how-to-build-an-api-driven-weather-app/

// https://bithacker.dev/fetch-weather-openweathermap-api-javascript

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs

//WeatherAPI Getting Started:https://www.weatherapi.com/docs/