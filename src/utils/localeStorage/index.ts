import type { RootState } from "@/store";
import type { CitiesState } from "@/store/ruducers/CitiesReducer/types.ts";

export const loadState = (): CitiesState | undefined => {
  try {
    const serializedState = localStorage.getItem("weatherAppState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (state: RootState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("weatherAppState", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};
