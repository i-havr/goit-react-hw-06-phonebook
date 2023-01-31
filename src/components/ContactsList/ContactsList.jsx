import PropTypes from 'prop-types';
import { ContactsListStyled } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

export const ContactsList = ({ contacts, onDeleteButton }) => {
  return (
    <ContactsListStyled>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteButton={onDeleteButton}
          ></ContactsListItem>
        );
      })}
    </ContactsListStyled>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.node.isRequired,
    }).isRequired
  ),
  onDeleteButton: PropTypes.func.isRequired,
};
