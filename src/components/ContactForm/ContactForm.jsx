import { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameInputChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleNumberInputChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setNumber(value);
  };

  // -------------------------------- todo
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  const inputNameId = nanoid();
  const inputTelId = nanoid();

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor={inputNameId}>
          <input
            className={s.input}
            id={inputNameId}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameInputChange}
          />
          Name
        </label>
        <label className={s.label} htmlFor={inputTelId}>
          <input
            className={s.input}
            id={inputTelId}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNumberInputChange}
          />
          Phone number
        </label>
      </div>

      <button className={s.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
