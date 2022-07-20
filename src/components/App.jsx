import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { changeFilter } from 'redux/contactsSlice';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice';

export const App = () => {
  const {
    data,
    isFetching,
    // error, isLoading,
  } = useGetContactsQuery();

  const [
    deleteContact,
    {
      isLoading: isDeleting,
      // isSuccess: isDeleteSuccess
    },
  ] = useDeleteContactMutation();

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleInputChange = e => {
    e.preventDefault();
    dispatch(changeFilter());
  };

  return (
    <>
      {/* -------------------------------------------------- */}
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter onInputChange={handleInputChange} />
        {isFetching && <h2>LOADING...</h2>}
        {data && (
          <ContactList
            contacts={data}
            filterValue={filter}
            onDeleteContact={deleteContact}
            deleting={isDeleting}
          />
        )}
        {/* ДОБАВИТЬ ТОАСТ С УСПЕШНЫМ УДАЛЕНИЕМ */}
        {/* {isDeleteSuccess && alert('успешно удален')} */}
      </Section>
      {/* <ToastContainer position="top-center" autoClose={2500} theme="colored" /> */}
    </>
  );
};
