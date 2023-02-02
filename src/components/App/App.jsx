import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from 'redux/contacts/contactsSlice';
import { namesFilter } from 'redux/filter/filterSlice';

import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm.jsx/ContactForm';
import { Section } from 'components/Section/Section';
import { AppStyled } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const isInitRef = useRef(true);

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitRef.current) {
      isInitRef.current = false;
      return;
    }
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }, resetForm) => {
    const newContact = { id: nanoid(5), name, number };

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(add(newContact));
      resetForm();
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <Section title="Contacts">
        <Filter
          filter={filter}
          onChange={event => dispatch(namesFilter(event.currentTarget.value))}
        />

        <ContactsList
          contacts={getVisibleContacts()}
          onDeleteButton={id => dispatch(remove(id))}
        ></ContactsList>
      </Section>
    </AppStyled>
  );
}
