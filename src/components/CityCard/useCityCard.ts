import { useDispatch } from "react-redux";
import { fetchWeather } from "@/api/Weather";
import {
  removeCity,
  updateWeatherData,
} from "@/store/ruducers/CitiesReducer/CitiesSlice.ts";
import { useNavigate } from "react-router-dom";
import { RoutesPath } from "@/types";

export const useCityCard = (city: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeCity(city));
  };

  const handleUpdate = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedWeather = await fetchWeather(city);
    dispatch(updateWeatherData({ city, weather: updatedWeather }));
  };

  const handleNavigate = () => {
    navigate(RoutesPath.CITY_DETAILS.replace(":id", city));
  };

  return {
    handleRemove,
    handleUpdate,
    handleNavigate,
  };
};
