import { CityCard } from "@/components/CityCard";
import { useCityList } from "@/components/CityList/useCityList.ts";
import "@/components/CityList/CityList.scss";

export const CityList = () => {
  const { cities, handleAddCity, weatherData, city, setCity } = useCityList();

  return (
    <div>
      <div className="add-city">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter the city"
          className="add-input"
        />
        <button className="add-button" onClick={handleAddCity}>Add city</button>
      </div>

      {cities.length > 0 && (
        <div className="city-list">
          {cities.map((city) => (
            <CityCard key={city} city={city} weather={weatherData[city]} />
          ))}
        </div>
      )}
    </div>
  );
};
