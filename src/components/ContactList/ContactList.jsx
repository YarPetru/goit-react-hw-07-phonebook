import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact, deleting }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.contactInfo}>
          <div className={s.contact}>
            {contact.name}: {contact.number}
          </div>
          {!deleting && (
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
