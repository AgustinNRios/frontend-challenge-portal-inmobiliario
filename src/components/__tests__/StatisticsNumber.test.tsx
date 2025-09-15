import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatisticsNumber from '../StatisticsNumber';

describe('StatisticsNumber component', () => {
    test('renders the number with a "k+" suffix and the text', () => {
        render(<StatisticsNumber number={50} text="renters" />);

        // Check for the number with 'k+'
        expect(screen.getByRole('heading', { name: /50k\+/i })).toBeInTheDocument();

        // Check for the text
        expect(screen.getByText('renters')).toBeInTheDocument();
    });
});
