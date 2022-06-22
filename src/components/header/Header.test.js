import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  render(<Header />);
  expect(screen.getByText("DEMO Streaming")).toBeInTheDocument()
  expect(screen.getByText("Login")).toBeInTheDocument()
  expect(screen.getByText("Start your free trial")).toBeInTheDocument()
});

