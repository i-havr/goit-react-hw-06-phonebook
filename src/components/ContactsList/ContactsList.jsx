import { useSelector, useDispatch } from 'react-redux';
import { remove, getContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filterSlice';
import { ContactsListStyled } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  if (visibleContacts.length > 0) {
    return (
      <ContactsListStyled>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactsListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteButton={id => dispatch(remove(id))}
            ></ContactsListItem>
          );
        })}
      </ContactsListStyled>
    );
  }
};
