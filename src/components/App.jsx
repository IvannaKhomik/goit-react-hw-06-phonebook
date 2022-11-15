// import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container } from './Container';
// import { nanoid } from 'nanoid';
// import { defaultContacts } from '../utils/data';
import { Filter } from './Filter/Filter';
// import useLocalStorage from 'hooks/useLocalStorage';
// import { getContacts, getFilter } from 'redux/selectors';
// import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  // const [filter, setFilter] = useState('');

  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // addContact={formSubmit}

  // const formSubmit = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   const contactName = contact.name;
  //   const isInclude = contacts.some(item => contactName === item.name);

  //   Notify.init({
  //     position: 'center-top',
  //   });

  //   isInclude
  //     ? Notify.failure(`${contactName} is already in contacts.`)
  //     : setContacts(contacts => [contact, ...contacts]);
  // };

  // const onFilteredList = () => {
  //   if (filter === '') {
  //     return contacts;
  //   }
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // onDeleteContact={onDeleteContact}   Contact List
  //   const onDeleteContact = id => {
  //     setContacts(prevContacts =>
  //       prevContacts.filter(contact => contact.id !== id)
  //     );
  //   };

  // const filteredContacts = onFilteredList();

  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList
        // contacts={filteredContacts}
        />
      </Container>
    </>
  );
};
