// store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './Pages/card/cardSlice';
import  formReducer from "./Pages/contact/contactSlice"

export const store = configureStore({
  reducer: {
    card: cardReducer,
    form: formReducer
  }
});