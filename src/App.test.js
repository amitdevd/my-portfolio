import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Amit Dwivedi portfolio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Amit Dwivedi/i })).toBeTruthy();
  expect(screen.getByText(/Work Experience/i)).toBeTruthy();
});
