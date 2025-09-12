"use client";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import Card from '@/components/Card';
import { Property } from '../model/Property';

interface Props {
    properties: Property[];
    isLoading: boolean;
}

export const PropertiesList = ({ properties, isLoading }: Props) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    if (isLoading) {
        return <div>Loading properties...</div>;
    }

    if (properties.length === 0) {
        return <div>No properties found for the selected criteria.</div>;
    }

    return (
        <>
            <Button onPress={onOpen}>Open Drawer</Button>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Available Properties</DrawerHeader>
                            <DrawerBody>
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
                                        ></Card>
                                    )
                                })}
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}