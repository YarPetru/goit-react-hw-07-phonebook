import s from './ContactList.module.css';
// import PropTypes from 'prop-types';

const ContactList = ({ contacts, filterValue, onDeleteContact, deleting }) => {
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().startsWith(filterValue.toLowerCase())
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
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

// const ContactList = ({ contacts, filter, onDeleteContact }) => {
//   const filteredContacts = contacts.filter(item =>
//     item.name.toLowerCase().startsWith(filter.toLowerCase())
//   );

//   return (
//     <ul className={s.contactList}>
//       {filteredContacts.map(contact => (
//         <li className={s.contactInfo} key={nanoid()}>
//           <div className={s.contact}>
//             {contact.name}: {contact.number}
//           </div>
//           <button
//             type="button"
//             className={s.deleteBtn}
//             onClick={() => onDeleteContact(contact.id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   filter: PropTypes.string.isRequired,
// };