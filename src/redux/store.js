import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutsSlice";
import recipesSlice from "./recipesSlice";
import medititionSlice from "./medititionSlice";
import nutritionSlice from "./nutritionSlice";

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
    recipe: recipesSlice,
    meditition:medititionSlice,
    nutrition:nutritionSlice
  },
});

export default store;
