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
    add(state, action) {
      state.contactsList.push(action.payload);
    },
    remove(state, action) {
      return {
        contactsList: state.contactsList.filter(
          contact => contact.id !== action.payload
        ),
      };
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
