import { CityList } from "@/components/CityList";
import "@/pages/HomePage/HomePage.scss";

export const HomePage = () => {
  return (
    <div>
      <h1 className="title">Weather</h1>
      <CityList />
    </div>
  );
};
