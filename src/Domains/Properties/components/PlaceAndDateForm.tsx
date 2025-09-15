"use client";

import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { Select, SelectItem } from '@heroui/select';
import { DateRangePicker } from "@heroui/date-picker";
import { getLocalTimeZone } from '@internationalized/date';
import { Property } from '../model/Property';
import { fetchProperties } from '../service/PropertiesService';
import Image from 'next/image';
import { PublicationTypeContext } from '../context/PublicationTypeContext';
import { uniqueLocationsMock } from '../Mocks/PropertiesMock';
import { addToast } from "@heroui/toast";
import { PropertyType } from '../model/Property';

interface Props {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setProperties: Dispatch<SetStateAction<Property[]>>;
    onOpen: ()=>void;
}

export const PlaceAndDateForm = ({ setIsLoading, setProperties, onOpen }: Props) => {
    const { publicationType } = useContext(PublicationTypeContext);
    const [location, setLocation] = useState('Barcelona, Spain');
    const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null);

    const handleSearch = async () => {
        if(dateRange == null && publicationType == PropertyType.Rent) {
            addToast({
                title: "Date Range Required",
                description: "Please select a date range to search for rental properties.",
                color: 'danger'
            })
            return
        }
        setProperties([]);
        onOpen(); // Open the drawer immediately
        setIsLoading(true);
        console.log('valores del input', location, dateRange, publicationType);
        try {
            const results = await fetchProperties(location, dateRange, publicationType);
            setProperties(results);
        } catch (error) {
            console.error("Search failed:", error);
            setProperties([]); // Clear properties on error
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSearch();
    };
    return (
        <form onSubmit={handleSubmit} className=" flex flex-col md:flex-row items-center justify-between gap-3 lg:w-[783px] lg:h-[104px] p-6 rounded-b-lg lg:rounded-r-lg shadow-md bg-white">
            <div className='flex flex-col items-start lg:items-center justify-start gap-3 lg:gap-10 lg:flex-row'>
                <div className="flex flex-col gap-0 flex-grow">
                    <label className="font-medium text-gray-700">Location</label>
                    <Select aria-label="Location" size='sm' data-testid="location-select" classNames={{trigger: "ps-0 shadow-none bg-white data-[hover=true]:bg-white min-w-[160px]", value: "font-bold text-black", selectorIcon: "hidden"}} placeholder="Barcelona, Spain" onSelectionChange={selection => {
                        const selectedKey = (selection as Set<string>).values().next().value;
                        setLocation(selectedKey || '');
                    }}>
                        {uniqueLocationsMock.map(loc => (
                            <SelectItem key={loc} id={loc}>{loc}</SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="hidden lg:lg:block lg:w-px h-10 lg:bg-gray-200"></div>
                <div className="relative flex flex-col gap-0">
                    <label className="font-medium text-gray-700">When</label>
                    {!dateRange && (
                        <div className="absolute left-[-2px] top-6 p-2 ps-0 min-w-49 flex items-center z-10 bg-white pointer-events-none">
                            <span className="text-sm font-bold text-black">Select Move-in Date</span>
                        </div>
                    )}
                    <DateRangePicker
                        aria-label="When"
                        size='sm'
                        classNames={{
                            inputWrapper: "max-h-[32px] ps-0 bg-white shadow-none ",
                            input: "text-xs font-bold text-black",
                            segment: "text-black font-bold !important",
                        }}
                        data-testid="date-range-picker"
                        selectorIcon={
                            <Image
                                src={"/Calendar.svg"}
                                alt="Calendario"
                                width={16}
                                height={16}
                                className={""}
                            />
                        }
                        onChange={(dates) => {
                            if (dates?.start && dates?.end) {
                                const timeZone = getLocalTimeZone();
                                setDateRange({ 
                                    start: dates.start.toDate(timeZone), 
                                    end: dates.end.toDate(timeZone) 
                                });
                            } else {
                                setDateRange(null);
                            }
                        }} 
                    />
                </div>
                <div className="hidden lg:block w-px h-10 bg-gray-200"></div>
                <button type="submit" className="py-4 px-6 rounded-lg bg-[#7065F0] text-white text-base font-medium w-full lg:max-w-48 whitespace-nowrap">Browse Properties</button>
            </div>
        </form>
    );
};