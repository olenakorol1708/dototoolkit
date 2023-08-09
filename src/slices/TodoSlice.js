import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";
const initialState = {
  value:[]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        title:action.payload,
      };
      state.value.push(newTodo)
     
    },
    deleteTodos: (state, action) => {
      console.log("delete");
    return  state.value.filter((item) => item.id !== action.payload.id);
   
    },
  },
});

export const { addTodos, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
