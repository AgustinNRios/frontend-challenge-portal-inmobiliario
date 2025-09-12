'use client';

import { useState } from 'react';
import { Property } from '../model/Property';
import { SelectRentBuySell } from './SelectRentBuySell';
import { PropertiesList } from './PropertiesList';
import { PlaceAndDateForm } from './PlaceAndDateForm';

export const Properties = () => {
    const [selected, setSelected] = useState("Buy");
    const [properties, setProperties] = useState<Property[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className="flex flex-col">
            <SelectRentBuySell selected={selected} setSelected={setSelected}></SelectRentBuySell>
            <PlaceAndDateForm option={selected} setProperties={setProperties} setIsLoading={setIsLoading}></PlaceAndDateForm>
            <PropertiesList isLoading={isLoading} properties={properties}></PropertiesList>
        </div>
    );
};