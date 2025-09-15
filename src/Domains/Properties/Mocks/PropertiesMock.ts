import { Property, PropertyType } from "../model/Property";

export const propertiesMock: Property[] = [
    {
        id: "1",
        ownerId: "owner-123",
        name: "Beverly Springfield",
        type: PropertyType.Rent,
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 2700,
        price: null, // Not for sale
        location: "Palm Harbor, TX",
        direction: "2821 Lake Sevilla, Palm Harbor, TX",
        rooms: 4,
        bathrooms: 2,
        width: 6,
        height: 7.5,
        availability: [
            { start: new Date('2025-10-01'), end: new Date('2025-12-31') },
            { start: new Date('2026-02-01'), end: new Date('2026-06-30') }
        ]
    },
    {
        id: "2",
        ownerId: "owner-456",
        name: "Tarpon Bay",
        type: PropertyType.Rent,
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 1600,
        price: null, // Not for sale
        location: "Tarpon Bay",
        direction: "Palm Harbor, TX",
        rooms: 4,
        bathrooms: 2,
        width: 6,
        height: 8,
        availability: [
            { start: new Date(), end: new Date('2025-11-30') }
        ]
    },
    {
        id: "3",
        ownerId: "owner-789",
        name: "Modern Downtown Loft",
        type: PropertyType.Buy,
        image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: null, // Not for rent
        price: 750000,
        location: "Austin, TX",
        direction: "456 Congress Ave, Austin, TX",
        rooms: 2,
        bathrooms: 2,
        width: 10,
        height: 12,
        availability: [
            { start: new Date(), end: new Date('2099-12-31') } // Available for purchase
        ]
    },
    {
        id: "4",
        ownerId: "owner-101",
        name: "Sunnyvale Garden House",
        type: PropertyType.Buy,
        image: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: null, // Not for rent
        price: 1200000,
        location: "Austin, TX",
        direction: "789 Silicon Valley St, Austin, TX",
        rooms: 5,
        bathrooms: 4,
        width: 8,
        height: 10,
        availability: [
            { start: new Date(), end: new Date('2099-12-31') } // Available for purchase
        ]
    },
    {
        id: "5",
        ownerId: "owner-112",
        name: "Cozy Beachside Bungalow",
        type:  PropertyType.Rent,
        image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 3500,
        price: null, // Not for sale
        location: "Malibu, CA",
        direction: "101 Pacific Coast Hwy, Malibu, CA",
        rooms: 3,
        bathrooms: 2,
        width: 7,
        height: 7,
        availability: [
            { start: new Date('2025-09-15'), end: new Date('2026-01-15') }
        ]
    },
    {
        id: "6",
        ownerId: "owner-113",
        name: "Lakeside Villa",
        type: PropertyType.Rent,
        image: "https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 4200,
        price: null,
        location: "Lake Tahoe, CA",
        direction: "2500 Lakefront Ave, Lake Tahoe, CA",
        rooms: 5,
        bathrooms: 4,
        width: 9,
        height: 9,
        availability: [
            { start: new Date('2025-09-05'), end: new Date('2025-09-25') }
        ]
    },
    {
        id: "7",
        ownerId: "owner-114",
        name: "Urban Studio",
        type: PropertyType.Rent,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 2100,
        price: null,
        location: "New York, NY",
        direction: "888 Broadway, New York, NY",
        rooms: 1,
        bathrooms: 1,
        width: 5,
        height: 5,
        availability: [
            { start: new Date('2025-09-01'), end: new Date('2025-09-30') }
        ]
    },
    {
        id: "8",
        ownerId: "owner-115",
        name: "Suburban Family Home",
        type: PropertyType.Rent,
        image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 3200,
        price: null,
        location: "Chicago, IL",
        direction: "456 Oak St, Chicago, IL",
        rooms: 4,
        bathrooms: 3,
        width: 8,
        height: 8,
        availability: [
            { start: new Date('2025-09-10'), end: new Date('2025-10-10') }
        ]
    }
];

// Exporta locaciones únicas
export const uniqueLocationsMock = Array.from(
    new Set(propertiesMock.map((p) => p.location))
);