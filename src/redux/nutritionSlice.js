import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bmi: null,
};
const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,
  reducers: {
    handleCalc: (state, { payload }) => {
      const weight = payload.weight;
      const height = payload.height;
      const bmi = weight / (height / 100) ** 2;
      console.log(height);
      return {
        ...state,
        bmi,
      };
    },
  },
});

export const { handleCalc } = nutritionSlice.actions;

export default nutritionSlice.reducer;
