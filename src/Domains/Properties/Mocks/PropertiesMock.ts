import { Property } from "../model/Property";

export const propertiesMock: Property[] = [
    {
        id: "1",
        ownerId: "owner-123",
        name: "Beverly Springfield",
        type: "rent",
        image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 27000,
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
        type: "rent",
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: 1600,
        price: null, // Not for sale
        location: "Palm Harbor, TX",
        direction: "123 Tarpon Bay, Palm Harbor, TX",
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
        type: "buy",
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
        type: "buy",
        image: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rentalMonthPrice: null, // Not for rent
        price: 1200000,
        location: "Sunnyvale, CA",
        direction: "789 Silicon Valley St, Sunnyvale, CA",
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
        type: "rent",
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
    }
]