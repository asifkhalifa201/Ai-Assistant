import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('toggles sidebar when hamburger button is clicked', () => {
  render(<App />);
  
  // Find the toggle button
  const toggleBtn = screen.getByLabelText(/toggle sidebar/i);
  expect(toggleBtn).toBeInTheDocument();

  // Find the sidebar element
  const sidebar = screen.getByRole('complementary');
  expect(sidebar).toBeInTheDocument();

  // Initially, sidebar should have '-translate-x-full' class on mobile simulation
  expect(sidebar).toHaveClass('-translate-x-full');

  // Click toggle button to open
  fireEvent.click(toggleBtn);

  // Now, sidebar should have 'translate-x-0' class
  expect(sidebar).toHaveClass('translate-x-0');

  // Click toggle button again to close
  fireEvent.click(toggleBtn);
  expect(sidebar).toHaveClass('-translate-x-full');
});

test('renders initial active chat title in header', () => {
  render(<App />);
  const headerTitle = screen.getByRole('heading', { level: 1, name: /new chat/i });
  expect(headerTitle).toBeInTheDocument();
});
