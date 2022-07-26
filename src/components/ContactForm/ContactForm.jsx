import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();

  const [addContact, isSuccess] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const currentNamesArray = contacts.map(contact =>
      contact.name.toLowerCase()
    );
    const isContactRepeats = currentNamesArray.includes(name.toLowerCase());

    isContactRepeats
      ? toast.warning(`${name} уже есть в контактах`)
      : addContact({ name, number });
    isSuccess && toast.success(`новый контакт успешно добавлен`);
    e.currentTarget.reset();
  };

  const inputNameId = nanoid();
  const inputTelId = nanoid();

  return (
    <form className={s.contactForm} onSubmit={handleSubmit} autoComplete="off">
      <div className={s.wrapper}>
        <label className={s.label} htmlFor={inputNameId}>
          <input
            className={s.input}
            id={inputNameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          Name
        </label>
        <label className={s.label} htmlFor={inputTelId}>
          <input
            className={s.input}
            id={inputTelId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
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

export default ContactForm;
