import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../feautures/todoSlice";
import { add } from "../feautures/todoSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

type useDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<useDispatch>();

export { add };

