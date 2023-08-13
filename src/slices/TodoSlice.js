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
        change:false,
      };
      state.value.push(newTodo)
     
    },
    deleteTodos: (state, action) => {
  
    state.value =   state.value.filter((item) => item.id !== action.payload);
   
    },
    editTodos:(state,action)=>{
      console.log("edit");
      state.value = state.value.map((item)=> {
        if(item.id === action.payload.id){
          return {
            ...item,
            title:action.payload.title,

          }
        }return item
      })
    }
  },
});

export const { addTodos, deleteTodos,  editTodos } = todoSlice.actions;
export default todoSlice.reducer;
