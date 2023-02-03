import ContactForm from 'components/ContactForm.jsx/ContactForm';
import { Section } from 'components/Section/Section';
import { AppStyled } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm />
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </AppStyled>
  );
}
