import { useHistory } from 'react-router-use-history';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { updatePage } from '../../Slice/fetchArgSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { limit, page, total } = useSelector(
    (state: RootState) => state.fetchArg
  );
  const skip: number = (Number(page) - 1) * Number(limit);
  const totalPages: number = Math.ceil(Number(total) / Number(limit));
  const currentPage: number = Number(skip) / Number(limit) + 1;

  const updateUrlPage = (newPage: number) => {
    const newUrl = new URL(location.toString());
    newUrl.searchParams.set('page', `${newPage}`);
    history.push(newUrl.search);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(updatePage({ page: String(newPage) }));
      updateUrlPage(newPage);
    }
  };
  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };
  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        &#8656;
      </button>
      <span>
        {currentPage}/{totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        &#8658;
      </button>
    </div>
  );
};
