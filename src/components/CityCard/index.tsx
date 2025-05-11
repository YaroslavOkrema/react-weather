import type { JSX } from "react";
import type { CityCardProps } from "@/components/CityCard/types.ts";
import { useCityCard } from "@/components/CityCard/useCityCard.ts";
import "@/components/CityCard/CityCard.scss";

export const CityCard = ({ city, weather }: CityCardProps): JSX.Element => {
  const { handleRemove, handleUpdate, handleNavigate } = useCityCard(city);

  return (
    <div className="city-card" onClick={handleNavigate}>
      {weather ? (
        <div>
          <h3>{city}</h3>
          <p>{weather.description}</p>
          <p>Temperature: {weather.temperature}°C</p>
          <button className="card-btn" onClick={handleUpdate}>
            Update
          </button>
          <button className="card-btn" onClick={handleRemove}>
            Delete
          </button>
        </div>
      ) : (
        <div>Loading weather...</div>
      )}
    </div>
  );
};
