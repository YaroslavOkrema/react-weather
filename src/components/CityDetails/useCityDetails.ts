import { useParams } from "react-router-dom";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchHourlyForecast } from "@/store/thunks/HourlyForecastThunk";

export const useCityDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => id && state.cities.weatherData[id]);

  useEffect(() => {
    if (!weather) return;

    const { hourlyForecast, lat, lon } = weather;

    if (!hourlyForecast && lat && lon) {
      dispatch(fetchHourlyForecast({ city: id!, lat, lon }));
    }
  }, [dispatch, id, weather]);

  return { id, weather };
};
