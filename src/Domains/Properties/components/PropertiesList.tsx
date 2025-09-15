"use client";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
} from "@heroui/drawer";
import Card from '@/components/Card';
import { Property } from '../model/Property';

interface Props {
    properties: Property[];
    isLoading: boolean;
    isOpen: boolean;
    onOpenChange: () => void;
}

export const PropertiesList = ({ properties, isLoading, isOpen, onOpenChange }: Props) => {

    return (
        <>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
                <DrawerContent>
                    {(onClose) => (
                        <DrawerBody>
                            {isLoading && <div>Loading properties...</div>}
                            {!isLoading && properties.length === 0 && <div>No properties found for the selected criteria.</div>}
                            <DrawerHeader className="flex flex-col gap-1">Available Properties</DrawerHeader>
                            {properties.map((property) => {
                                return (
                                    <Card
                                        key={property.id}
                                        image={property.image}
                                        rentalMonthPrice={property.rentalMonthPrice}
                                        price={property.price}
                                        location={property.location}
                                        direction={property.direction}
                                        rooms={property.rooms}
                                        bathrooms={property.bathrooms}
                                        width={property.width}
                                        height={property.height}
                                        horizontal={true}
                                        option={property.type}
                                    ></Card>
                                )
                            })}
                        </DrawerBody>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}