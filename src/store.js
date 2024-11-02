// store.js
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './Pages/card/cardSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer
  }
});