import { getPropertiesByLocationAndDate as getPropertiesFromMock } from '../Mocks/PropertiesBackendMock';
import { Property, PropertyType } from '../model/Property';

export const fetchProperties = (
    location?: string,
    dateRange?: { start: Date; end: Date } | null,
    propertyType?: PropertyType
): Promise<Property[]> => {
    return getPropertiesFromMock(location, dateRange, propertyType);
};