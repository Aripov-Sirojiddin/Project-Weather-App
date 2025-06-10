import { getWeather } from "./weather_api";

(async () => {
  const response = await getWeather();
  const date = new Date();

  console.log(
    `Current temperature is ${
      response.hourly.temperature_2m[date.getHours()]+
      response.hourly_units.temperature_2m
    }`
  );
})();
