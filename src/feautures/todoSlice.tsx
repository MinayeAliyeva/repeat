import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    // add:(state,action){
    // }
  },
});

export const todoReducer = todoSlice.reducer;
