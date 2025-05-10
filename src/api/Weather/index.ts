import type { CityWeather } from "../../types";
import axios from "axios";

const API_KEY = "642c1ad128fd816bcb4ea30d07064974";

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
