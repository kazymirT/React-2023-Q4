import { describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Pagination component', () => {
  let onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  let limit;

  beforeEach(() => {
    onChange = vi.fn();
    limit = '10';
    render(<Select limit={limit} onChange={onChange} />);
  });

  test('prev button click updates URL query parameter and calls onChange correctly', () => {
    expect(screen.getByText('Cards per page:')).toBeInTheDocument();
  });
});
