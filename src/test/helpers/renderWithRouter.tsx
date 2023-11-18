import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../Components/App/App';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';
import { render } from '@testing-library/react';

export const renderWithRouter = (
  component: ReactNode,
  initialRoute: string = '/'
) => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
