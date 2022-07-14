import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, { payload }) => {
      return [payload, ...state];
    },
    [deleteContact]: (state, { payload }) => {
      return state.filter(contacts => !contacts.id.includes(payload));
    },
  }
);

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  filter,
});
