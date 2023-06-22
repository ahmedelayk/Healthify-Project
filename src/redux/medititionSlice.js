import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInstructors = createAsyncThunk(
  "meditition/getInstructors",
  async () => {
    const res = await axios.get("http://localhost:3002/instructors");
    const data = res.data;
    return data;
  }
);
export const getTypes = createAsyncThunk("meditition/getTypes", async () => {
  const res = await axios.get("http://localhost:3002/types");
  const data = res.data;
  return data;
});

const medititionSlice = createSlice({
  name: "meditition",
  initialState: {
    instructors: null,
    types: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInstructors.fulfilled, (state, { payload }) => {
      state.instructors = payload;
    });
    builder.addCase(getTypes.fulfilled, (state, { payload }) => {
      state.types = payload;
    });
  
  },
});
export const {} = medititionSlice.actions;

export default medititionSlice.reducer;
