import { CityList } from "@/components/CityList";
import "@/pages/HomePage/HomePage.scss";
import type { JSX } from "react";

export const HomePage = (): JSX.Element => {
  return (
    <div>
      <h1 className="title">Weather</h1>
      <CityList />
    </div>
  );
};
