import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { setLocalStorages } from '../Storage/Storage';
import { setSearchValue } from '../../Slice/searchSlice';
import { Page } from '../../containers/Page/Page';
import { Details } from '../Details/Details';
import { Page404 } from '../../containers/Page404/Page404';
import { ErrorPage } from '../../containers/PageError/PageError';

export const App = () => {
  const dispatch = useDispatch();
  const { limit, page } = useSelector((state: RootState) => state.fetchArg);
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const search = new URLSearchParams(location.search).get('search');
  const pageUrl = new URLSearchParams(location.search).get('page');
  const limitUrl = new URLSearchParams(location.search).get('limit');

  if (search && search !== searchValue) {
    dispatch(setSearchValue(search));
    setLocalStorages('search', search);
  }
  if (pageUrl && pageUrl !== page) {
    dispatch(setSearchValue(pageUrl));
  }
  if (limitUrl && limitUrl !== limit) {
    dispatch(setSearchValue(limitUrl));
  }
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={'/'} element={<Page />} errorElement={<ErrorPage />}>
          <Route path="details/:detailsId" element={<Details />} />
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </ErrorBoundary>
  );
};
