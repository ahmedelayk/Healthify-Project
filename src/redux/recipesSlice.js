import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecipes = createAsyncThunk(
  "recipes/getRecipes",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.request({
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/list",
        params: {
          from: "0",
          size: "20",
          tags: "under_30_minutes",
        },
        headers: {
          "X-RapidAPI-Key":
            "09fc58a519msh8fe7d74c2f1946dp126ee2jsnc3916add8356",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipe: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get Recipes
    builder.addCase(getRecipes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getRecipes.fulfilled, (state, { payload }) => {
      state.recipe = payload;
      state.isLoading = false;
    });
    builder.addCase(getRecipes.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = recipesSlice.actions;

export default recipesSlice.reducer;
