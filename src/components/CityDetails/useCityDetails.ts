import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchHourlyForecast } from "@/store/thunks/HourlyForecastThunk";
import { RoutesPath } from "@/types";

export const useCityDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => id && state.cities.weatherData[id]);

  useEffect(() => {
    if (!weather) return;

    const { hourlyForecast, lat, lon } = weather;

    if (!hourlyForecast && lat && lon) {
      dispatch(fetchHourlyForecast({ city: id!, lat, lon }));
    }
  }, [dispatch, id, weather]);

  const handleNavigate = () => {
    navigate(RoutesPath.HOME);
  };

  return { id, weather, handleNavigate };
};
