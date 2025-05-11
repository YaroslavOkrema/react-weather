import "src/components/CityDetails/CityDetails.scss";
import { useCityDetails } from "@/components/CityDetails/useCityDetails.ts";
import { HourlyForecastChart } from "@/components/HourlyForecastChart";

export const CityDetails = () => {
  const { weather, id } = useCityDetails();

  return (
    <div className="city-details-wrapper">
      {!weather ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <div className="details-card">
          <h2 className="details-title">Weather in {id}</h2>
          <p className="details-text">Temperature: {weather.temperature}°C</p>
          <p className="details-text">Description: {weather.description}</p>
          <p className="details-text">Humidity: {weather.humidity}%</p>
          <p className="details-text">Wind speed: {weather.windSpeed} km/h</p>

          {weather.hourlyForecast && (
            <HourlyForecastChart hourlyForecast={weather.hourlyForecast} />
          )}
        </div>
      )}
    </div>
  );
};
