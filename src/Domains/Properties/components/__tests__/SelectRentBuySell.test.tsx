import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SelectRentBuySell } from '../SelectRentBuySell';
import { PublicationTypeContext, PublicationTypeProvider } from '../../context/PublicationTypeContext';
import { PropertyType } from '../../model/Property';
import { addToast } from '@heroui/toast';

// Mock the addToast function
jest.mock('@heroui/toast', () => ({
    addToast: jest.fn(),
}));

describe('SelectRentBuySell', () => {
    test('renders correctly and shows Rent as active by default', () => {
        render(
            <PublicationTypeProvider>
                <SelectRentBuySell />
            </PublicationTypeProvider>
        );

        const rentButton = screen.getByRole('button', { name: /Rent/i });
        const buyButton = screen.getByRole('button', { name: /Buy/i });
        const sellButton = screen.getByRole('button', { name: /Sell/i });

        expect(rentButton).toBeInTheDocument();
        expect(buyButton).toBeInTheDocument();
        expect(sellButton).toBeInTheDocument();

        expect(rentButton).toHaveClass('border-[#7065F0]');
        expect(buyButton).not.toHaveClass('border-[#7065F0]');
    });

    test('calls setPublicationType with Buy when Buy button is clicked', () => {
        const setPublicationType = jest.fn();

        render(
            <PublicationTypeContext.Provider value={{ publicationType: PropertyType.Rent, setPublicationType }}>
                <SelectRentBuySell />
            </PublicationTypeContext.Provider>
        );

        const buyButton = screen.getByRole('button', { name: /Buy/i });
        fireEvent.click(buyButton);

        expect(setPublicationType).toHaveBeenCalledWith(PropertyType.Buy);
    });

    test('calls onSell and shows a toast when Sell button is clicked', () => {
        render(
            <PublicationTypeProvider>
                <SelectRentBuySell />
            </PublicationTypeProvider>
        );

        const sellButton = screen.getByRole('button', { name: /Sell/i });
        fireEvent.click(sellButton);

        expect(addToast).toHaveBeenCalledWith({
            title: 'Coming soon!',
            description: 'This feature is not available at the moment.',
            color: 'danger',
        });
    });
});
