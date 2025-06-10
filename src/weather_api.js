import { getApi } from "./api_key";

export async function getWeather() {
  const { coords } = await getGeoLocation();
  const api_link = getApi(coords.latitude, coords.longitude);

  const res = fetch(api_link);
  const result = (await res).json();
  return result;
}

function getGeoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
