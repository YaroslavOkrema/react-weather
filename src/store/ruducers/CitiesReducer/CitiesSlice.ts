import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CityWeather } from "../../../types";
import { fetchCityWeather } from "../../thunks/CityWeatherThunk";

type CitiesState = {
  citiesList: string[];
  weatherData: Record<string, CityWeather>;
  error: string | null;
};

const initialState: CitiesState = {
  citiesList: [],
  weatherData: {},
  error: null,
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      state.citiesList.push(action.payload);
    },
    removeCity: (state, action: PayloadAction<string>) => {
      state.citiesList = state.citiesList.filter(
        (city) => city !== action.payload,
      );
      delete state.weatherData[action.payload];
    },
    setWeatherData(
      state,
      action: PayloadAction<{ city: string; weather: CityWeather }>,
    ) {
      state.weatherData[action.payload.city] = action.payload.weather;
    },
    updateWeatherData(
      state,
      action: PayloadAction<{ city: string; weather: CityWeather }>,
    ) {
      state.weatherData[action.payload.city] = action.payload.weather;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityWeather.fulfilled, (state, action) => {
        const { city, weather } = action.payload;
        state.weatherData[city] = weather;
      })
      .addCase(fetchCityWeather.rejected, (state, action) => {
        console.log("error", action.error.message);
        state.error = action.error.message || "Unknown error";
      });
  },
});

export const { addCity, removeCity, setWeatherData, updateWeatherData } =
  citiesSlice.actions;
export default citiesSlice.reducer;
