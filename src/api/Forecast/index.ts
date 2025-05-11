import axios from "axios";
import { API_KEY } from "@/api/Weather/constants.ts";
import { FORECAST_URL } from "@/api/Forecast/constants.ts";
import type { OpenWeatherResponse } from "@/api/Forecast/types.ts";

export const fetchForecastData = async (lat: number, lon: number): Promise<OpenWeatherResponse> => {
  const response = await axios.get<OpenWeatherResponse>(FORECAST_URL, {
    params: {
      lat,
      lon,
      units: "metric",
      appid: API_KEY,
    },
  });
  return response.data;
};
