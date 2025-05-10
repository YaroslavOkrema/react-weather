import { createAsyncThunk } from "@reduxjs/toolkit";
import type { HourlyForecast } from "@/types";
import type {
  FetchHourlyForecastParams,
  ForecastEntry,
} from "@/store/thunks/HourlyForecastThunk/types.ts";
import { fetchForecastData } from "@/api/Forecast";

export const fetchHourlyForecast = createAsyncThunk(
  "cities/fetchHourlyForecast",
  async (coords: FetchHourlyForecastParams) => {
    const data = await fetchForecastData(coords.lat, coords.lon);

    const hourlyForecast: HourlyForecast[] = data.list
      .slice(0, 8)
      .map((entry: ForecastEntry) => ({
        time: entry.dt_txt.slice(11, 16),
        temperature: entry.main.temp,
      }));

    return {
      city: coords.city,
      hourlyForecast,
    };
  },
);
