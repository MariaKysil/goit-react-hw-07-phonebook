import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { FilterWrapper, InputFilter, FilterText } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterText>Find contacts by name</FilterText>
      <InputFilter
        type="text"
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </FilterWrapper>
  );
};
