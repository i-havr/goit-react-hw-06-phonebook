import { useSelector, useDispatch } from 'react-redux';
import { namesFilter, getFilter } from 'redux/filter/filterSlice';
import { LabelFilterStyled, InputFilterStyled } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <LabelFilterStyled>
      Find contacts by name
      <InputFilterStyled
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(namesFilter(event.currentTarget.value))}
      />
    </LabelFilterStyled>
  );
};
