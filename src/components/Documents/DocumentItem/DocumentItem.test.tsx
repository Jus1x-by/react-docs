import { render, screen } from '@testing-library/react';
import { DocumentItem } from './DocumentItem';

describe('DocumentItem Component', () => {
  it('renders correctly with children', () => {
    render(<DocumentItem>Test Document Item</DocumentItem>);

    const childElement = screen.getByText('Test Document Item');
    expect(childElement).toBeInTheDocument();
  });

  it('applies default classes correctly', () => {
    const { container } = render(<DocumentItem>Test Document Item</DocumentItem>);

    const itemContainer = container.firstChild;
    expect(itemContainer).toHaveClass('documents-main__item__container');
    expect(itemContainer).toHaveClass('grey-line');
  });

  it('applies additional classNames correctly', () => {
    const additionalClasses = ['custom-class1', 'custom-class2'];
    const { container } = render(
      <DocumentItem classNames={additionalClasses}>Test Document Item</DocumentItem>
    );

    const itemContainer = container.firstChild;
    expect(itemContainer).toHaveClass('custom-class1');
    expect(itemContainer).toHaveClass('custom-class2');
  });
});