import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutsSlice";
import recipesSlice from "./recipesSlice";
import medititionSlice from "./medititionSlice";

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    recipe: recipesSlice,
    meditition:medititionSlice
  },
});

export default store;
