import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { HourlyForecastChartProps } from "@/components/HourlyForecastChart/types.ts";
import "@/components/HourlyForecastChart/HourlyForecastChart.scss";

export const HourlyForecastChart = ({
  hourlyForecast,
}: HourlyForecastChartProps) => {
  return (
    <div className="hourly-forecast-chart">
      <h3>Погодинний прогноз</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={hourlyForecast}>
          <XAxis dataKey="time" />
          <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#3182ce"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
