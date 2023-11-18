import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { Page } from '../../containers/Page/Page';
import { Details } from '../Details/Details';
import { Page404 } from '../../containers/Page404/Page404';
import { ErrorPage } from '../../containers/PageError/PageError';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';

export const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Routes>
          <Route path={'/'} element={<Page />} errorElement={<ErrorPage />}>
            <Route path="details/:detailsId" element={<Details />} />
          </Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </ErrorBoundary>
    </Provider>
  );
};
