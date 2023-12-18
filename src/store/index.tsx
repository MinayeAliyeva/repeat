import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../feautures/todoSlice";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
