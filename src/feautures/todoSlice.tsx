import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { uid } from "uid";
//initialState ucun bir interfeys yaradaq
export interface ITodo {
  name?: string;
  age?: number;
  completed?: boolean;
  id: string;
}
//initial statem bir arraydir hansiki ITodo tipinde
const initialState: ITodo[] = [];
//burada payload ucun tip tanimlayaq Payloadaction import edek // add actionun payloadi ucun type bu bir generik tipdir
type AddActionPayload = PayloadAction<{
  name?: ITodo["name"];
  age?: ITodo["age"];
  completed?: false;
  id?: ITodo["id"];
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
        completed: false,
      };
      state.push(newTodo);
    },
    mark: (state, action: PayloadAction<ITodo["id"]>) => {
      console.log(action.payload);
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo?.completed };
        }
        return todo;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { add, mark } = todoSlice.actions;
