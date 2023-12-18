import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";
//initialState ucun bir interfeys yaradaq
export interface ITodo {
  name: string;
  age: number;
}
//initial statem bir arraydir hansiki ITodo tipinde
const initialState: ITodo[] = [];
//burada payload ucun tip tanimlayaq Payloadaction import edek // add actionun payloadi ucun type bu bir generik tipdir
type AddActionPayload = PayloadAction<{
  name: ITodo["name"];
  age: ITodo["age"];
}>;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: AddActionPayload) => {
      const newTodo = {
        name: action.payload.name,
        age: action.payload.age,
        id: uid(),
      };
      state.push(newTodo);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { add } = todoSlice.actions;
