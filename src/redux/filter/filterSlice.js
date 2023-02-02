import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    namesFilter(state, { payload }) {
      state = payload;
      return state;
    },
  },
});

export const { namesFilter } = filterSlice.actions;

export default filterSlice.reducer;

// Selectors
export const getFilter = state => state.filter;
