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
    onOpen: () => void;
    onOpenChange: () => void;
    selected: string;
}

export const PropertiesList = ({ properties, isLoading, isOpen, onOpen, onOpenChange, selected }: Props) => {

    return (
        <>
            {/* <Button onPress={onOpen}>Open Drawer</Button> */}
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
                <DrawerContent>
                    {(onClose) => (
                        <>
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
                                            option={selected}
                                        ></Card>
                                    )
                                })}
                            </DrawerBody>
                            {/* <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter> */}
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}