import { configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutsSlice";

const store = configureStore({
  reducer: {
    workouts: workoutsSlice,
  },
});

export default store;
