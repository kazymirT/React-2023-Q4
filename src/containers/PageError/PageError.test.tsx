import { expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ErrorPage } from './PageError';
import { BrowserRouter } from 'react-router-dom';

it('ErrorPage Component Rendering and Navigation Test', () => {
  render(
    <BrowserRouter>
      <ErrorPage />
    </BrowserRouter>
  );
  expect(screen.getByText('Page not found')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(window.location.pathname).toBe('/');
});
