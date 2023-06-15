import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCardio = createAsyncThunk(
  "workouts/getAllCardio",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.request({
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",
        headers: {
          "X-RapidAPI-Key":
            "09fc58a519msh8fe7d74c2f1946dp126ee2jsnc3916add8356",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getAllWorkouts = createAsyncThunk(
  "workouts/getAllWorkouts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.request({
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises",
        headers: {
          "X-RapidAPI-Key":
            "09fc58a519msh8fe7d74c2f1946dp126ee2jsnc3916add8356",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: {
    cardios: null,
    fitnesses: null,
    isLoading: false,
    error: null,
    successMsg: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get All Cardio
    builder.addCase(getAllCardio.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllCardio.fulfilled, (state, { payload }) => {
      state.cardios = payload;
      state.isLoading = false;
    });
    builder.addCase(getAllCardio.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });

    // Get All Workouts
    builder.addCase(getAllWorkouts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllWorkouts.fulfilled, (state, { payload }) => {
      state.fitnesses = payload
        .slice(0, 30)
        .filter((p) => p.bodyPart !== "cardio");
      state.isLoading = false;
    });
    builder.addCase(getAllWorkouts.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = workoutsSlice.actions;

export default workoutsSlice.reducer;
