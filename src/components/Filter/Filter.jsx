import PropTypes from 'prop-types';
import { LabelFilterStyled, InputFilterStyled } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <LabelFilterStyled>
      Find contacts by name
      <InputFilterStyled
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </LabelFilterStyled>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
