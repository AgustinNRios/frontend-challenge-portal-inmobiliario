import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PropertyPoint from '../PropertyPoint';
import { propertiesMock } from '../../Mocks/PropertiesMock';
import { PublicationTypeProvider } from '../../context/PublicationTypeContext';

// Mock the Card component as it's a child of PropertyPoint
jest.mock('/src/components/Card', () => {
    return jest.fn(({ direction, location }) => (
        <div data-testid="mock-card">
            <p>{direction}</p>
            <p>{location}</p>
        </div>
    ));
});

describe('PropertyPoint', () => {
    const property = propertiesMock[0]; // Using the first property from the mock for testing

    test('renders correctly and shows card on click', async () => {
        const user = userEvent.setup();
        render(
            <PublicationTypeProvider>
                <PropertyPoint property={property} popoverPlacement="top" />
            </PublicationTypeProvider>
        );

        // Find and click the trigger button to open the popover
        const triggerButton = screen.getByRole('button', { name: `Ver detalles de la propiedad en ${property.location}` });
        await user.click(triggerButton);

        // Wait for the mocked card to appear and assert its content
        const mockCard = await screen.findByTestId('mock-card');
        expect(mockCard).toBeInTheDocument();
        expect(screen.getByText(property.direction)).toBeInTheDocument();
        expect(screen.getByText(property.location)).toBeInTheDocument();
    });
});
