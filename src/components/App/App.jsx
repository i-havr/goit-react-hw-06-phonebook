import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm.jsx/ContactForm';
import { Section } from 'components/Section/Section';
import { AppStyled } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const isInitRef = useRef(true);

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
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(contacts => [...contacts, newContact]);
      resetForm();
    }
  };

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <Section title="Contacts">
        <Filter filter={filter} onChange={filterChange} />

        <ContactsList
          contacts={getVisibleContacts()}
          onDeleteButton={deleteContact}
        ></ContactsList>
      </Section>
    </AppStyled>
  );
}
