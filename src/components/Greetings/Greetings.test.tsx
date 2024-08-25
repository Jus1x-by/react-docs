import { render, screen } from '@testing-library/react';
import { Greetings } from './Greetings';

describe('Greetings Component', () => {
  it('renders GreetingsTitle and GreetingsDescription with the provided fullName', () => {
    const fullName = 'John Doe';

    render(<Greetings fullName={fullName} />);

    const titleElement = screen.getByText(`Hi, ${fullName} 👋`);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      "Manage your documents issued by SMU Academy or track your career goal."
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it('applies the additional className prop correctly', () => {
    const fullName = 'Jane Doe';
    const className = 'additional-class';

    const { container } = render(<Greetings fullName={fullName} className={className} />);

    expect(container.firstChild).toHaveClass('greetings');
    expect(container.firstChild).toHaveClass(className);
  });
});