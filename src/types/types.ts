export type HourlyForecast = {
  time: string;
  temperature: number;
};

export type CityWeather = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  hourlyForecast?: HourlyForecast[];
  lat: number;
  lon: number;
};
