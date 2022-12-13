import { useSelector } from 'react-redux';
import { getContacts, getFilteredContacts } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { ContactItems } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);

  const filteredContacts = () =>
    contacts.filter(({ name }) =>
      name.trim().toLowerCase().includes(filter.trim().toLowerCase())
    );

  const contactsList = filter ? filteredContacts() : contacts;

  return (
    <ContactItems>
      {contactsList.length > 0 &&
        contactsList.map(({ name, phone, id }) => (
          <li key={id}>
            <ContactItem name={name} phone={phone} id={id} />
          </li>
        ))}
    </ContactItems>
  );
};
