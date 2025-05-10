import type { JSX } from "react";
import type { CityCardProps } from "@/components/CityCard/types.ts";
import { useCityCard } from "@/components/CityCard/useCityCard.ts";

export const CityCard = ({ city, weather }: CityCardProps): JSX.Element => {
  const { handleRemove, handleUpdate } = useCityCard(city);

  return (
    <div className="city-card">
      {weather ? (
        <div>
          <h3>{city}</h3>
          <p>{weather.description}</p>
          <p>Температура: {weather.temperature}°C</p>
          <p>Вологість: {weather.humidity}%</p>
          <p>Вітер: {weather.windSpeed} м/с</p>
          <button onClick={handleUpdate}>Оновити</button>
          <button onClick={handleRemove}>Видалити</button>
        </div>
      ) : (
        <div>Завантаження погоди...</div>
      )}
    </div>
  );
};
