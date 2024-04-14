import { configureStore } from "@reduxjs/toolkit";
import favorites, { favoritesSlices } from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favorites,
  },
});
