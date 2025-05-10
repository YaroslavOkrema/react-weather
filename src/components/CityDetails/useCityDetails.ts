import { useParams } from "react-router-dom";
import { useAppSelector } from "@/hooks/useAppSelector";

export const useCityDetails = () => {
  const { id } = useParams<{ id: string }>();
  const weather = useAppSelector((state) => id && state.cities.weatherData[id]);

  return { id, weather };
};
