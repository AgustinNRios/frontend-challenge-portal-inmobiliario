import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FirstSection from '../FirstSection';

// Mock child components to isolate the FirstSection component
jest.mock('@/Domains/Properties/components/Properties', () => ({
    Properties: () => <div data-testid="properties-mock"></div>,
}));

jest.mock('../StatisticsNumber', () => {
    return jest.fn(({ number, text }) => (
        <div data-testid="statistics-number-mock">
            <span>{number}</span>
            <span>{text}</span>
        </div>
    ));
});

describe('FirstSection component', () => {
    test('renders all elements correctly', () => {
        render(<FirstSection />);

        // Check for heading and paragraph
        expect(screen.getByRole('heading', { name: /Buy, rent, or sell your property easily./i })).toBeInTheDocument();
        expect(screen.getByText(/A great platform to buy, sell, or even rent your properties without any commisions./i)).toBeInTheDocument();

        // Check that mocked components are rendered
        expect(screen.getByTestId('properties-mock')).toBeInTheDocument();
        const statisticsNumbers = screen.getAllByTestId('statistics-number-mock');
        expect(statisticsNumbers).toHaveLength(2);

        // Check that the correct props are passed to StatisticsNumber
        expect(screen.getByText('50')).toBeInTheDocument();
        expect(screen.getByText('renters')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByText('properties')).toBeInTheDocument();
    });
});
