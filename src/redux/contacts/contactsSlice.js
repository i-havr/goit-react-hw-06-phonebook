import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;
