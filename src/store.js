import {configureStore} from '@reduxjs/toolkit';
import textSlice from "./slices/TextSlice";
import todoSlice from './slices/TodoSlice'
export const store = configureStore({
    reducer:{
      text:textSlice,
      todo:todoSlice, 
    }
})