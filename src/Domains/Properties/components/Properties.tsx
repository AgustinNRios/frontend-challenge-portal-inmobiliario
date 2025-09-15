'use client';
import { useState } from 'react';
import { Property } from '../model/Property';
import { SelectRentBuySell } from './SelectRentBuySell';
import dynamic from 'next/dynamic';

const PropertiesList = dynamic(() => import('./PropertiesList').then(mod => mod.PropertiesList), { 
    ssr: false, 
    loading: () => <p>Loading...</p> 
});
import { PlaceAndDateForm } from './PlaceAndDateForm';
import { useDisclosure } from '@heroui/use-disclosure';

export const Properties = () => {
    const [selected, setSelected] = useState("Buy");
    const [properties, setProperties] = useState<Property[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex flex-col mt-6 items-start">
            <div className="relative">
                <div className="absolute top-0 left-0">
                    <SelectRentBuySell selected={selected} setSelected={setSelected}></SelectRentBuySell>
                    <PlaceAndDateForm onOpen={onOpen} option={selected} setProperties={setProperties} setIsLoading={setIsLoading}></PlaceAndDateForm>
                </div>
            </div>
            <PropertiesList isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} isLoading={isLoading} properties={properties} selected={selected}></PropertiesList>
        </div>
    );
};