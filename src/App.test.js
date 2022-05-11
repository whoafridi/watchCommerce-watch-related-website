import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header/Header';

describe("Test the App Component", () => {
  test('renders in react fetures text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Featured products/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in doucment", () => {
    render(<App />);
    const childElement = screen.findByText("Login")
    expect(childElement).toBeTruthy();
  });
});


