import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather } from "@/api/Weather";

export const fetchCityWeather = createAsyncThunk(
  "cities/fetchCityWeather",
  async (city: string) => {
    const weather = await fetchWeather(city);
    return { city, weather };
  },
);
