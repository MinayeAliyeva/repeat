import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../feautures/todoSlice";
import { add, mark, remove } from "../feautures/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
//
type useDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<useDispatch>();
//
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
const getState = (state: RootState) => state;
const getTodoListSelector = (state: RootState) => getState(state)?.todos;

export { add, mark, remove };
export { getTodoListSelector };
