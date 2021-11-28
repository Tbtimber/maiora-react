import { render, screen } from '@testing-library/react';
import MaioraHeader from '../components/Header';

test('renders learn react link', () => {
  render(<MaioraHeader />);
  const linkElement = screen.getByText(/MEN/i);
  expect(linkElement).toBeInTheDocument();
});
