import { useHistory } from 'react-router-use-history';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { updateLimit, updatePage } from '../../Slice/fetchArgSlice';

export const Select = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { limit } = useSelector((state: RootState) => state.fetchArg);

  const updateUrlParams = (newLimit: string, newPage: string) => {
    const newUrl = new URL(location.toString());
    newUrl.searchParams.set('limit', newLimit);
    newUrl.searchParams.set('page', newPage);
    history.push(newUrl.search);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = event.target.value;

    if (newLimit !== limit) {
      dispatch(updatePage({ page: '1' }));
      dispatch(updateLimit({ limit: newLimit }));
      updateUrlParams(newLimit, '1');
    }
  };

  return (
    <>
      <div className="selectContainer">
        <span>Cards per page:</span>
        <select value={limit} onChange={handleSelectChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
};
