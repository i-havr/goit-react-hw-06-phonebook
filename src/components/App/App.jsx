import { useSelector, useDispatch } from 'react-redux';
import { add, remove, getContacts } from 'redux/contacts/contactsSlice';
import { namesFilter, getFilter } from 'redux/filter/filterSlice';

import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm.jsx/ContactForm';
import { Section } from 'components/Section/Section';
import { AppStyled } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const addContact = ({ name, number }, resetForm) => {
    const newContact = { id: nanoid(5), name, number };

    if (contacts?.some(contact => contact.name === name)) {
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
