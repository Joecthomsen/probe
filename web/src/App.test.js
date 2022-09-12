import { render, screen } from '@testing-library/react';
import App from './App';
import UserProfile from "./pages/UserProfile";

test('renders learn react link', () => {
  render(<App />);
});

test('userProfile has input for name', () => {
render(<UserProfile />)
  const inputNameField = screen.queryAllByRole('textbox');
  expect(inputNameField.length).toBe(11)    // BAD TEST, just trying stuff

})
