import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import {
  useGetFilteredContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';

export const App = () => {
  const [filterValue, setFilterValue] = useState('');

  const {
    data: filteredContacts,
    isFetching,
    // error,
    // isLoading,
  } = useGetFilteredContactsQuery(filterValue);

  const [deleteContact, { isLoading: isDeleting, isSuccess: isDeleteSuccess }] =
    useDeleteContactMutation();

  const handleInputChange = e => {
    e.preventDefault();
    setFilterValue(e.currentTarget.value);
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter onInputChange={handleInputChange} />
        {isFetching && <h2>LOADING...</h2>}
        {filteredContacts && (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
            deleting={isDeleting}
          />
        )}
        {isDeleteSuccess && toast.success('успешно удален')}
      </Section>
      <ToastContainer position="top-center" autoClose={2500} theme="colored" />
    </>
  );
};
