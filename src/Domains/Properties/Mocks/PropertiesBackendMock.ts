import { Property } from "../model/Property";
import { propertiesMock } from "./PropertiesMock";

export const getPropertiesByLocationAndDate = async (
    location: string,
    requestedRange: { start: Date; end: Date } | null,
    option: string
): Promise<Property[]> => {
    console.log("Filtering for:", { location, requestedRange });

    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProperties = propertiesMock.filter(property => {
                // 1. Filter by location (case-insensitive)
                const locationMatch = property.location.toLowerCase().includes(location.toLowerCase());
                // 2. Filter by type ('Sale' for 'Buy' option, 'Rent' for 'Rent' option)
                const typeMatch = option === 'Buy' ? property.type === 'Sale' : property.type === 'Rent';

                if (!locationMatch || !typeMatch) {
                    return false;
                }

                // If no date range is provided, we don't filter by date
                if (!requestedRange || !requestedRange.start || !requestedRange.end) {
                    return true;
                }

                // 3. Check for date availability overlap
                const isAvailable = property.availability.some(availableSlot => {
                    const requestedStart = requestedRange.start.getTime();
                    const requestedEnd = requestedRange.end.getTime();
                    const slotStart = availableSlot.start.getTime();
                    const slotEnd = availableSlot.end.getTime();

                    // Overlap condition:
                    // (SlotStart <= RequestedEnd) and (SlotEnd >= RequestedStart)
                    return slotStart <= requestedEnd && slotEnd >= requestedStart;
                });

                return isAvailable;
            });

            console.log("Found properties:", filteredProperties);
            resolve(filteredProperties);
        }, 1500); // Simulate a 500ms network delay
    });
};