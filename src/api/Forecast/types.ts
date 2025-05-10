import type { ForecastEntry } from "@/store/thunks/HourlyForecastThunk/types.ts";

export type OpenWeatherResponse = {
  list: ForecastEntry[];
};
