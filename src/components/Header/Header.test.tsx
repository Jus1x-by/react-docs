import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  it.skip('renders correctly with the provided fullName', () => {
    const fullName = 'John Doe';

    render(<Header  />);

    const headerElement = screen.getByText(fullName);
    expect(headerElement).toBeInTheDocument();

    const userNameElement = screen.getByText(fullName);
    expect(userNameElement).toBeInTheDocument();
  });

  it('applies the correct class to the header', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass('header');
  });
});