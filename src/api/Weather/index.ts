import axios from "axios";
import type { CityWeather } from "@/types";
import { API_KEY, BASE_URL } from "@/api/Weather/constants.ts";

export const fetchWeather = async (city: string): Promise<CityWeather> => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });
  const data = response.data;
  return {
    temperature: Math.round(data.main.temp),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed),
    description: data.weather[0].description,
    lat: data.coord.lat,
    lon: data.coord.lon,
  };
};
