import PropTypes from 'prop-types';
import { ButtonDelete } from 'components/Button/ButtonDelete';
import {
  ContactsListItemStyled,
  InnerElementStyled,
} from 'components/ContactsListItem/ContactsListItem.styled';

export const ContactsListItem = ({ id, name, number, onDeleteButton }) => {
  return (
    <ContactsListItemStyled>
      <InnerElementStyled>
        {`${name}: ${number}`}
        <ButtonDelete actionHandler={() => onDeleteButton(id)}>X</ButtonDelete>
      </InnerElementStyled>
    </ContactsListItemStyled>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.node.isRequired,
  onDeleteButton: PropTypes.func.isRequired,
};
