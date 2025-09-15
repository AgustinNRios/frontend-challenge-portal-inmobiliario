import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeMakeItEasy from '../WeMakeItEasy';

// Mock the MainButton component
jest.mock('../MainButton', () => {
    return jest.fn(({ text, img }) => (
        <button>
            {text}
            {img && <img src={img} alt="" />}
        </button>
    ));
});

describe('WeMakeItEasy component', () => {
    test('renders correctly for tenants', () => {
        render(<WeMakeItEasy tenants={true} />);

        // Check heading and paragraph for tenants
        expect(screen.getByRole('heading', { name: /We make it easy for tenants and landlords./i })).toBeInTheDocument();
        expect(screen.getByText(/Whether it’s selling your current home/i)).toBeInTheDocument();

        // Check that MainButton is rendered
        const button = screen.getByRole('button', { name: /See more/i });
        expect(button).toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', '/arrowRight.svg');
    });

    test('renders correctly for landlords (default)', () => {
        render(<WeMakeItEasy />);

        // Check heading and paragraph for landlords
        expect(screen.getByRole('heading', { name: /We make it easy for landlords and tenants./i })).toBeInTheDocument();
        expect(screen.getByText(/adsajdfhakvbfbvladbdkl/i)).toBeInTheDocument();

        // Check that MainButton is rendered
        const button = screen.getByRole('button', { name: /See more/i });
        expect(button).toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', '/arrowRight.svg');
    });
});
