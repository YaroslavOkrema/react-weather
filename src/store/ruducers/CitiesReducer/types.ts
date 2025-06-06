import type { CityWeather } from "@/types";

export type CitiesState = {
  citiesList: string[];
  weatherData: Record<string, CityWeather>;
  error: string | null;
};

export type AddCityWeatherPayload = {
  city: string;
  weather: CityWeather;
};
