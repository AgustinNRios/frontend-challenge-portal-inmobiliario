import { getPropertiesByLocationAndDate as getPropertiesFromMock } from '../Mocks/PropertiesBackendMock';
import { Property } from '../model/Property';

export const fetchProperties = (
    location: string, 
    dateRange: { start: Date; end: Date } | null,
    option: string
): Promise<Property[]> => {
    return getPropertiesFromMock(location, dateRange, option);
};