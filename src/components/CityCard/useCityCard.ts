import { useDispatch } from "react-redux";
import { fetchWeather } from "@/api/Weather";
import { removeCity, updateWeatherData } from "@/store/ruducers/CitiesReducer/CitiesSlice.ts";


export const useCityCard = (city: string) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCity(city));
  };

  const handleUpdate = async () => {
    const updatedWeather = await fetchWeather(city);
    dispatch(updateWeatherData({ city, weather: updatedWeather }));
  };

  return {
    handleRemove,
    handleUpdate,
  };
};
