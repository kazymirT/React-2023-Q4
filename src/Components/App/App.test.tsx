import { expect, it } from 'vitest';
import { App } from './App';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Search } from '../Search/Search';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';

const MockApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </Provider>
  );
};

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

it('404 page is displayed when navigating to an invalid route', () => {
  const badRoute = '/some/bad/route';
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('404')).toBeInTheDocument();
  expect(screen.getByText('Page not found')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

describe('SearchField component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('saves the entered value to local storage when the Search button is clicked', () => {
    render(<MockApp />);
    const InputElement = screen.getByPlaceholderText(
      'What product are you looking for?'
    );
    const SearchButton = screen.getByRole('button');

    fireEvent.change(InputElement, { target: { value: 'Test Value' } });
    fireEvent.click(SearchButton);

    waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'search',
        'Test Value'
      );
    });
  });

  it('retrieves the value from local storage upon mounting', () => {
    localStorageMock.getItem.mockReturnValue('Test Value');

    render(<MockApp />);
    const InputElement = screen.getByPlaceholderText(
      'What product are you looking for?'
    ) as HTMLInputElement;
    waitFor(() => {
      expect(InputElement).toHaveValue('Test Value');
    });
  });
});
