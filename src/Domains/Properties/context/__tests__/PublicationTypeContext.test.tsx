import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useContext } from 'react';
import { PublicationTypeContext, PublicationTypeProvider } from '../PublicationTypeContext';
import { PropertyType } from '../../model/Property';

// A test component that consumes the context
const TestComponent = () => {
    const { publicationType, setPublicationType } = useContext(PublicationTypeContext);

    return (
        <div>
            <p data-testid="publication-type">{publicationType}</p>
            <button onClick={() => setPublicationType(PropertyType.Buy)}>Set to Buy</button>
            <button onClick={() => setPublicationType(PropertyType.Rent)}>Set to Rent</button>
        </div>
    );
};

describe('PublicationTypeContext', () => {
    test('provides the default value and updates it correctly', () => {
        render(
            <PublicationTypeProvider>
                <TestComponent />
            </PublicationTypeProvider>
        );

        // Check the default value
        expect(screen.getByTestId('publication-type')).toHaveTextContent(PropertyType.Rent);

        // Click the button to change the value to 'Buy'
        const setBuyButton = screen.getByRole('button', { name: /Set to Buy/i });
        fireEvent.click(setBuyButton);

        // Check if the value has been updated
        expect(screen.getByTestId('publication-type')).toHaveTextContent(PropertyType.Buy);

        // Click the button to change the value back to 'Rent'
        const setRentButton = screen.getByRole('button', { name: /Set to Rent/i });
        fireEvent.click(setRentButton);

        // Check if the value has been updated again
        expect(screen.getByTestId('publication-type')).toHaveTextContent(PropertyType.Rent);
    });
});
