import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardWithIcon from '../CardWithIcon';

describe('CardWithIcon', () => {
    const defaultProps = {
        img: '/test-icon.svg',
        title: 'Test Title',
        text: 'This is a test description.',
    };

    test('renders correctly with default props (isIn = true)', () => {
        const { container } = render(<CardWithIcon {...defaultProps} />);

        // Check if image, title, and text are rendered
        expect(screen.getByAltText('icono')).toHaveAttribute('src', defaultProps.img);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('This is a test description.')).toBeInTheDocument();

        // Check for classes when isIn is true
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('flex-row');
        expect(mainDiv).not.toHaveClass('relative');
    });

    test('renders correctly when isIn is false', () => {
        const { container } = render(<CardWithIcon {...defaultProps} isIn={false} />);

        // Check if image, title, and text are rendered
        expect(screen.getByAltText('icono')).toHaveAttribute('src', defaultProps.img);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('This is a test description.')).toBeInTheDocument();

        // Check for classes when isIn is false
        const mainDiv = container.firstChild;
        expect(mainDiv).toHaveClass('relative');
        
        const imageContainer = screen.getByAltText('icono').parentElement;
        expect(imageContainer).toHaveClass('absolute');
    });
});
