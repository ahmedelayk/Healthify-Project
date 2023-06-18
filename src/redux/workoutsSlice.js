import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getAllCardio = createAsyncThunk(
//   "workouts/getAllCardio",
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const { data } = await axios.request({
//         method: "GET",
//         url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",
//         headers: {
//           "X-RapidAPI-Key":
//             "5c564f80c6msh82ef64cb866f06ap177fdbjsn87cc9cce4f59",
//           "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//         },
//       });
//       //   console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const getWorkoutByID = createAsyncThunk(
  "workouts/getWorkoutByID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.request({
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
          "X-RapidAPI-Key":
            "5c564f80c6msh82ef64cb866f06ap177fdbjsn87cc9cce4f59",
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
            "5c564f80c6msh82ef64cb866f06ap177fdbjsn87cc9cce4f59",
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
    workout: null,
    fitnesses: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get All Cardio
    // builder.addCase(getAllWorkouts.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(getAllWorkouts.fulfilled, (state, { payload }) => {
    //   state.cardios = payload.filter((p) => p.bodyPart === "cardio");
    //   state.isLoading = false;
    // });
    // builder.addCase(getAllWorkouts.rejected, (state, { payload }) => {
    //   state.error = payload;
    //   state.isLoading = false;
    // });

    // Get Workout By Id
    builder.addCase(getWorkoutByID.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getWorkoutByID.fulfilled, (state, { payload }) => {
      state.workout = payload;
      state.isLoading = false;
    });
    builder.addCase(getWorkoutByID.rejected, (state, { payload }) => {
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
      state.cardios = payload.filter((p) => p.bodyPart === "cardio");
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
