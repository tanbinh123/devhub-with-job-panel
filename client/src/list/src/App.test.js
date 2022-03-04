import { render, screen } from '@testing-library/react';
import List from './List';

test('renders learn react link', () => {
  render(<List />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
