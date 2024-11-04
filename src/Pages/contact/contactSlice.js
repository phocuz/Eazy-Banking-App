import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  inquiryType: '', // General inquiries or sending request
  message: '',
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { updateField, setErrors } = formSlice.actions;
export default formSlice.reducer;
