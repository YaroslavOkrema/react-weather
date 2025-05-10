import { useCityDetails } from "@/components/CityDetails/useCityDetails.ts";

export const CityDetails = () => {
  const { id, weather } = useCityDetails();

  return (
    <div>
      {!id || !weather ? (
        <p>Завантаження...</p>
      ) : (
        <div className="p-4">
          <h2 className="text-2xl font-bold">Погода у {id}</h2>
          <p>Температура: {weather.temperature}°C</p>
          <p>Опис: {weather.description}</p>
          <p>Вологість: {weather.humidity}%</p>
          <p>Вітер: {weather.windSpeed} м/с</p>
        </div>
      )}
    </div>
  );
};
