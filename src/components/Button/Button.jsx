import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const Button = ({ type = 'submit', children, actionHandler }) => {
  return (
    <StyledButton type={type} onClick={actionHandler}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func,
};
