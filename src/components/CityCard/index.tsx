import type { JSX } from "react";
import type { CityCardProps } from "@/components/CityCard/types.ts";
import { useCityCard } from "@/components/CityCard/useCityCard.ts";

export const CityCard = ({ city, weather }: CityCardProps): JSX.Element => {
  const { handleRemove, handleUpdate, handleClick } = useCityCard(city);

  return (
    <div className="city-card" onClick={handleClick}>
      {weather ? (
        <div>
          <h3>{city}</h3>
          <p>{weather.description}</p>
          <p>Температура: {weather.temperature}°C</p>
          <button onClick={handleUpdate}>Оновити</button>
          <button onClick={handleRemove}>Видалити</button>
        </div>
      ) : (
        <div>Завантаження погоди...</div>
      )}
    </div>
  );
};
