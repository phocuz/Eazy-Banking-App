import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardholderName: '',
  cardNumber: '',
  cvv: '',
  expiryMonth: '',
  expiryYear: '',
  errors: {},
  isFlipped: false
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    flipCard: (state) => {
      state.isFlipped = !state.isFlipped;
    },
    resetForm: () => initialState
  }
});

export const { updateField, setErrors, flipCard, resetForm } = cardSlice.actions;
export default cardSlice.reducer;