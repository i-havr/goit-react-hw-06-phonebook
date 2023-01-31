import PropTypes from 'prop-types';
import { StyledDeleteButton } from './Button.styled';

export const ButtonDelete = ({ type = 'button', children, actionHandler }) => {
  return (
    <StyledDeleteButton type={type} onClick={actionHandler}>
      {children}
    </StyledDeleteButton>
  );
};

ButtonDelete.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func.isRequired,
};
