import { render, screen } from '@testing-library/react';
import { Column } from './Column';

describe('Column Component', () => {
  it('renders correctly with the provided headerText and children', () => {
    const headerText = 'Column Header';
    const childText = 'Child Content';

    render(
      <Column headerText={headerText}>
        {childText}
      </Column>
    );

    const headerElement = screen.getByText(headerText);
    expect(headerElement).toBeInTheDocument();

    const childElement = screen.getByText(childText);
    expect(childElement).toBeInTheDocument();
  });

  it('applies the correct class to the column', () => {
    const headerText = 'Column Header';
    const columnClassName = 'custom-column-class';

    const { container } = render(
      <Column headerText={headerText} columnClassName={columnClassName}>
        <div>Child Content</div>
      </Column>
    );

    const columnElement = container.firstChild;
    expect(columnElement).toHaveClass('column');
    expect(columnElement).toHaveClass(columnClassName);
  });

  it('applies the correct class to the ColumnHeader', () => {
    const headerText = 'Column Header';
    const headerClassName = 'custom-header-class';

    render(
      <Column headerText={headerText} headerClassName={headerClassName}>
        <div>Child Content</div>
      </Column>
    );

    const headerElement = screen.getByText(headerText);
    expect(headerElement).toHaveClass('grey-line');
    expect(headerElement).toHaveClass(headerClassName);
  });
});