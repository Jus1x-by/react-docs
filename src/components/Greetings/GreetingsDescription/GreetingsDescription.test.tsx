import { render, screen } from '@testing-library/react';
import { GreetingsDescription } from './GreetingsDescription';

describe('GreetingsDescription Component', () => {
  it('renders correctly with the provided description', () => {
    const description = 'This is a custom description.';

    render(<GreetingsDescription description={description} />);

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders correctly with the default description when no description is provided', () => {
    const defaultDescription = "Manage your documents issued by SMU Academy or track your career goal.";

    render(<GreetingsDescription />);

    const descriptionElement = screen.getByText(defaultDescription);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders correctly with an empty string as description', () => {
    render(<GreetingsDescription description="" />);

    const descriptionElement = screen.getByTestId('greet-desc');
    expect(descriptionElement).toBeInTheDocument();
  });
});