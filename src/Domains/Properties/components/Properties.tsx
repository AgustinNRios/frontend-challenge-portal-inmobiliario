'use client';

import { useState } from 'react';
import { Property } from '../model/Property';
import { SelectRentBuySell } from './SelectRentBuySell';
import { PropertiesList } from './PropertiesList';
import { PlaceAndDateForm } from './PlaceAndDateForm';
import { useDisclosure } from '@heroui/react';

export const Properties = () => {
    const [selected, setSelected] = useState("Buy");
    const [properties, setProperties] = useState<Property[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex flex-col items-center lg:items-start">
            <SelectRentBuySell selected={selected} setSelected={setSelected}></SelectRentBuySell>
            <PlaceAndDateForm onOpen={onOpen} option={selected} setProperties={setProperties} setIsLoading={setIsLoading}></PlaceAndDateForm>
            <PropertiesList isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} isLoading={isLoading} properties={properties} selected={selected}></PropertiesList>
        </div>
    );
};