import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter, setTypeFilter, selectFilters } from '../store/filterSlice';
import CardList from './CardList';

const FilterCards = () => {
  const dispatch = useDispatch();
  const { status, type } = useSelector(selectFilters);

  const handleStatusChange = (e) => dispatch(setStatusFilter(e.target.value));
  const handleTypeChange = (e) => dispatch(setTypeFilter(e.target.value));

  return (
    <div className="p-8">

      <div className="mb-4 flex justify-center">
        <label htmlFor="status" className="mr-2 font-bold">Status:</label>
        <select
          id="status"
          value={status}
          onChange={handleStatusChange}
          className="p-2 mr-4"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="terminated">Terminated</option>
        </select>

        <label htmlFor="type" className="mr-2 font-bold">Type:</label>
        <select
          id="type"
          value={type}
          onChange={handleTypeChange}
          className="p-2"
        >
          <option value="">All</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>

      <CardList />
    </div>
  );
};

export default FilterCards;
