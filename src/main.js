import { getWeather } from "./weather_api";

(async () => {
  const loading_element = document.createElement("p");
  loading_element.textContent = "Loading...";
  document.body.appendChild(loading_element);
  const response = await getWeather(loading_element);
  const date = new Date();

  console.log(
    `Current temperature is ${
      response.hourly.temperature_2m[date.getHours()]+
      response.hourly_units.temperature_2m
    }`
  );
})();
