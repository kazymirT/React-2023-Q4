import { expect, it } from 'vitest';
import { App } from './App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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
