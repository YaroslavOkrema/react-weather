import { useCityList } from "./useCityList.ts";
import { CityCard } from "../CityCard";

export const CityList = () => {
  const { cities, handleAddCity, weatherData, city, setCity } = useCityList();

  return (
    <div>
      <div className="add-city">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Додати нове місто"
        />
        <button onClick={handleAddCity}>Додати місто</button>
      </div>

      <div className="city-list">
        {cities.map((city) => (
          <CityCard key={city} city={city} weather={weatherData[city]} />
        ))}
      </div>
    </div>
  );
};
