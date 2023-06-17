import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutsSlice";
import recipesSlice from "./recipesSlice";

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    recipe: recipesSlice,
  },
});

export default store;
