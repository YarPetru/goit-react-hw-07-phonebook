import React from 'react';
// import { useSelector } from 'react-redux/es/exports';
// import { nanoid } from 'nanoid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Section from './Section';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';

import { useGetContactsQuery } from 'redux/contactsSlice';

export const App = () => {
  const { data, error, isLoading, isFetching } = useGetContactsQuery();
  console.log(data);
  console.log(error);
  console.log(isLoading);
  console.log(isFetching);
  // const { data: contacts } = useGetContactsQuery();
  // const filter = useSelector(state => state.filter);

  // const handleInputChange = e => {
  //   e.preventDefault();
  //   const { value } = e.currentTarget;
  //   // dispatch(actions.changeFilter(value));
  // };

  // // ------------ addContacts новый
  // const addContacts = ({ name, number }) => {
  //   const currentNames = contacts.map(contact => contact.name.toLowerCase());

  //   currentNames.includes(name.toLowerCase()) &&
  //     toast.info('You already have this contact');

  //   !currentNames.includes(name.toLowerCase()) &&
  //     dispatch(actions.addContact(name, number));

  // };

  // // ------------ deleteContacts новый
  // const deleteContact = id => {
  //   dispatch(actions.deleteContact(id));
  // };

  return (
    <>
      <ul>
        {data.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
      {/* -------------------------------------------------- */}
      {/* <Section title="Phonebook">
        <ContactForm onSubmit={addContacts} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onInputChange={handleInputChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        />
      </Section>
      <ToastContainer position="top-center" autoClose={2500} theme="colored" /> */}
    </>
  );
};
