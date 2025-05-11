import { Route, Routes } from "react-router-dom";
import { RoutesPath } from "@/types";
import { HomePage } from "src/pages/HomePage";
import { CityDetails } from "@/components/CityDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesPath.HOME} element={<HomePage />} />
      <Route path={RoutesPath.CITY_DETAILS} element={<CityDetails />} />
    </Routes>
  );
};
