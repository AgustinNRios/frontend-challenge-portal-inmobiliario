export interface Property {
    id: string;
    ownerId: string;
    name: string;
    type: PropertyType; //publication type  

    //card info 
    image: string;
    rentalMonthPrice: number | null;
    price: number | null; //on buy
    location: string;
    direction: string;
    rooms: number;
    bathrooms: number;
    width: number;
    height: number;
    availability: { start: Date; end: Date; }[];
}

export enum PropertyType {
    Rent = "Rent",
    Buy = "Buy",
    Sale = "Sale"
}