import { expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBtn } from './ErrorBtn';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

it('Error btn click', () => {
  render(
    <BrowserRouter>
      <ErrorBoundary>
        <ErrorBtn />
      </ErrorBoundary>
    </BrowserRouter>
  );
  expect(screen.getByText('Error')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('An error occurred')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(screen.queryByText('An error occurred')).toBe(null);
});
