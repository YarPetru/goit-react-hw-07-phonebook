import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/add_contact',
  (name, number) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  })
);

export const deleteContact = createAction('contacts/delete_contact');

export const changeFilter = createAction('contacts/filter_contacts');
