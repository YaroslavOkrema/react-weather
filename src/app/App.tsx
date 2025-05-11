import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import { AppRoutes } from "@/features/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/react-weather">
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
