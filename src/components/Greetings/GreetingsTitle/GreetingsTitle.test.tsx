import { render, screen } from '@testing-library/react';
import { GreetingsTitle } from './GreetingsTitle';

describe('GreetingsTitle Component', () => {
  it('renders correctly with the provided fullName', () => {
    const fullName = 'John Doe';

    render(<GreetingsTitle fullName={fullName} />);

    const greetingElement = screen.getByText(`Hi, ${fullName} 👋`);
    expect(greetingElement).toBeInTheDocument();
  });

  it('renders correctly with an empty fullName', () => {
    render(<GreetingsTitle fullName="" />);

    const greetingElement = screen.getByText('Hi, 👋');
    console.log('greetingElement.textContent', greetingElement.textContent)
    expect(greetingElement).toBeInTheDocument();
  });
}); 