import type { CitiesState } from "@/store/ruducers/CitiesReducer/types";

export const loadState = (): { cities: CitiesState } | undefined => {
  try {
    const serializedState = localStorage.getItem("weatherAppState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState) as { cities: CitiesState };
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
};

export const saveState = (state: { cities: CitiesState }): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("weatherAppState", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};
