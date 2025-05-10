import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CitiesState } from "@/store/ruducers/CitiesReducer/types.ts";
import type { CityWeather } from "@/types";
import { fetchCityWeather } from "@/store/thunks/CityWeatherThunk";
import { fetchHourlyForecast } from "@/store/thunks/HourlyForecastThunk";

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
      })
      .addCase(fetchHourlyForecast.fulfilled, (state, action) => {
        const { city, hourlyForecast } = action.payload;
        if (state.weatherData[city]) {
          state.weatherData[city].hourlyForecast = hourlyForecast;
        }
      });
  },
});

export const { addCity, removeCity, updateWeatherData } = citiesSlice.actions;
export default citiesSlice.reducer;
