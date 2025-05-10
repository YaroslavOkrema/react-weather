import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useState } from "react";
import {
  addCity,
  updateWeatherData,
} from "../../store/ruducers/CitiesReducer/CitiesSlice.ts";
import { fetchWeather } from "../../api/Weather";

export const useCityList = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.cities.citiesList);
  const weatherData = useSelector(
    (state: RootState) => state.cities.weatherData,
  );

  const [city, setCity] = useState("");

  const handleAddCity = async () => {
    if (city.trim()) {
      dispatch(addCity(city));
      const weather = await fetchWeather(city);
      dispatch(updateWeatherData({ city: city, weather }));
      setCity("");
    }
  };

  return {
    cities,
    weatherData,
    handleAddCity,
    city,
    setCity,
  };
};
