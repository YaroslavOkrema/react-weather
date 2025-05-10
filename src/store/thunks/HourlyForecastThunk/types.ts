export type ForecastEntry = {
  dt_txt: string;
  main: {
    temp: number;
  };
};

export type FetchHourlyForecastParams = {
  city: string;
  lat: number;
  lon: number;
};
