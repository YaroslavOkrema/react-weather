import "src/components/CityDetails/CityDetails.scss";
import { useCityDetails } from "@/components/CityDetails/useCityDetails.ts";
import { HourlyForecastChart } from "@/components/HourlyForecastChart";

export const CityDetails = () => {
  const { weather, id } = useCityDetails();

  return (
    <div className="p-4">
      {!weather ? (
        <p>Завантаження...</p>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Погода у {id}</h2>
          <p>Температура: {weather.temperature}°C</p>
          <p>Опис: {weather.description}</p>
          <p>Humidity: {weather.humidity}</p>
          <p>Wind speed: {weather.windSpeed}</p>

          {weather.hourlyForecast && (
            <HourlyForecastChart hourlyForecast={weather.hourlyForecast} />
          )}
        </div>
      )}
    </div>
  );
};
