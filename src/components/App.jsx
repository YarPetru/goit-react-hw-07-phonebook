import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as actions from '../redux/actions';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    dispatch(actions.changeFilter(value));
    // console.log(actions.changeFilter(value));
  };

  // ------------ addContacts новый
  const addContacts = ({ name, number }) => {
    const currentNames = contacts.map(contact => contact.name.toLowerCase());

    currentNames.includes(name.toLowerCase()) &&
      toast.info('You already have this contact');

    !currentNames.includes(name.toLowerCase()) &&
      dispatch(actions.addContact(name, number));
    // console.log('Это лог в эдконтактс', actions.addContact());
  };

  // ------------ deleteContacts новый
  const deleteContact = id => {
    dispatch(actions.deleteContact(id));
    // console.log('Это лог в делитконтактс', actions.deleteContact(id));
    // console.log(`delete contact with id: ${id}`);
  };

  return (
    <>
      <Section title="Phonebook">
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
      <ToastContainer position="top-center" autoClose={2500} theme="colored" />
    </>
  );
};

// // ------------ addContacts старый
// const addContacts = ({ name, number }) => {
//   const currentNames = contacts.map(contact => contact.name.toLowerCase());
//   const contact = { name, number, id: nanoid() };

//   currentNames.includes(name.toLowerCase()) &&
//     toast.info('You already have this contact');

//   !currentNames.includes(name.toLowerCase()) &&
//     setContacts(prev => [contact, ...prev]);
// };

// // ------------ deleteContacts старый
// const deleteContact = id => {
//   setContacts(contacts.filter(contact => contact.id !== id));
//   console.log(`delete contact with id: ${id}`);
// };
