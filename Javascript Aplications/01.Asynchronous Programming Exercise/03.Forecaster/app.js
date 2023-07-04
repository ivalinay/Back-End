function attachEvents() {
  let getWeather = document.getElementById("submit");
  getWeather.addEventListener("click", async function () {
    let location = document.getElementById("location").value;

    let response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
    let locations = await response.json();

    let result = locations.find((item) => item.name === location);

    response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${result.code}`);
    let currentConditions = await response.json();

    response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${result.code}`);
    let threeDaysForecast = await response.json();

    let forecast = document.getElementById("forecast");
    forecast.style.display = "block";

    let currentDiv = document.getElementById("current");

    let forecasts = document.createElement("div");
    forecasts.className = "forecasts";
    currentDiv.appendChild(forecasts);

    let conditionalSymbolCurrent = document.createElement("span");
    conditionalSymbolCurrent.className = "condition symbol";
    conditionalSymbolCurrent.innerHTML = getWeatherSymbol(currentConditions.forecast.condition);
    forecasts.appendChild(conditionalSymbolCurrent);

    let conditionSpanCurrent = document.createElement("span");
    conditionSpanCurrent.className = "condition";
    forecasts.appendChild(conditionSpanCurrent);

    let locationSpan = document.createElement("span");
    locationSpan.className = "forecast-data";
    locationSpan.textContent = currentConditions.name;
    conditionSpanCurrent.appendChild(locationSpan);

    let temperatureSpan = document.createElement("span");
    temperatureSpan.className = "forecast-data";
    temperatureSpan.innerHTML = `${currentConditions.forecast.low}&#176;/${currentConditions.forecast.high}&#176;`;
    conditionSpanCurrent.appendChild(temperatureSpan);

    let conditionTextSpan = document.createElement("span");
    conditionTextSpan.className = "forecast-data";
    conditionTextSpan.textContent = currentConditions.forecast.condition;
    conditionSpanCurrent.appendChild(conditionTextSpan);

    let upcomingDiv = document.getElementById("upcoming");
    let forecastDiv = document.createElement("div");
    forecastDiv.className = "forecast-info";
    upcomingDiv.appendChild(forecastDiv);

    for (let forecast of threeDaysForecast.forecast) {
      let upcomingSpan = document.createElement("span");
      upcomingSpan.className = "upcoming";
      forecastDiv.appendChild(upcomingSpan);

      let conditionalSymbol = document.createElement("span");
      conditionalSymbol.className = "symbol";
      conditionalSymbol.innerHTML = getWeatherSymbol(forecast.condition);

      let temperatureSpan = document.createElement("span");
      temperatureSpan.className = "forecast-data";
      temperatureSpan.innerHTML = `${forecast.low}&#176;/${forecast.high}&#176;`;

      let conditionSpan = document.createElement("span");
      conditionSpan.className = "forecast-data";
      conditionSpan.textContent = forecast.condition;

      upcomingSpan.appendChild(conditionalSymbol);
      upcomingSpan.appendChild(temperatureSpan);
      upcomingSpan.appendChild(conditionSpan);
    }
  });
}

function getWeatherSymbol(condition) {
  switch (condition) {
    case "Sunny":
      return "&#x2600;";
    case "Partly sunny":
      return "&#x26C5;";
    case "Overcast":
      return "&#x2601;";
    case "Rain":
      return "&#x2614;";
    default:
      return "";
  }
}

attachEvents();
