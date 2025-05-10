import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../components/HomePage";
import { CityDetails } from "../../components/CityDetails";
import { RoutesPath } from "../../types/enums.ts";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesPath.HOME} element={<HomePage />} />
      <Route path={RoutesPath.CITY_DETAILS} element={<CityDetails />} />
    </Routes>
  );
};
