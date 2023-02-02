import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { contactsList: [] };

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add(state, { payload }) {
      state.contactsList.push(payload);
    },
    remove(state, { payload }) {
      state.contactsList = state.contactsList.filter(
        ({ id }) => id !== payload
      );
    },
  },
});

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { add, remove } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contactsList;
