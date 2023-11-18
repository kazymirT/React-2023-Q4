import { expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Page404 } from './Page404';

it('Page404 Component Rendering and Navigation Test', () => {
  render(
    <BrowserRouter>
      <Page404 />
    </BrowserRouter>
  );
  expect(screen.getByText('Page not found')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(window.location.pathname).toBe('/');
});
