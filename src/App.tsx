import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home';
import { UncontrolledForm } from './Page/Uncontrolled-form';
import { HookForm } from './Page/Hook-form';
import { ErrorPage } from './Page/PageError';
import { Page404 } from './Page/Page404';
import { Provider } from 'react-redux';
import { store } from './Reduce/store';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} errorElement={<ErrorPage />}></Route>
      <Route path={'/form-uncontrolled'} element={<UncontrolledForm />}></Route>
      <Route path={'/form-hook'} element={<HookForm />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
