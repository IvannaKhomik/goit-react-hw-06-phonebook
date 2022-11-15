import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
// import { getFilter } from 'redux/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filterValue = useSelector(getFilter);

  const onChangeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  // onChangeFilter={onChangeFilter}  Filter
  // value = { filter };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        // value={filterValue}
        type="text"
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};
