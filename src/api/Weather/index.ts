import axios from "axios";
import type { CityWeather } from "@/types";
import { API_KEY } from "@/api/Weather/constants.ts";

export const fetchWeather = async (city: string): Promise<CityWeather> => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  const data = response.data;
  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    description: data.weather[0].description,
  };
};
