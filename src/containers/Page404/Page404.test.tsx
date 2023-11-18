import { expect, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '../../test/helpers/renderWithRouter';

it('Page404 Component Rendering and Navigation Test', () => {
  renderWithRouter(null, '/efefe');
  expect(screen.getByText('Page not found')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(window.location.pathname).toBe('/');
});
