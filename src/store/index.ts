import { configureStore } from "@reduxjs/toolkit";
import citiesSlice from "@/store/ruducers/CitiesReducer/CitiesSlice.ts";
import { loadState, saveState } from "@/utils/localeStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cities: citiesSlice,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
