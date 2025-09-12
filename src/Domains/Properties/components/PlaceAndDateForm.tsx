"use client";

import { Dispatch, SetStateAction, useState } from 'react';
import { DateRangePicker, Select, SelectItem } from '@heroui/react';
import { getLocalTimeZone } from '@internationalized/date';
import { Property } from '../model/Property';
import { fetchProperties } from '../service/PropertiesService';

// Get unique locations from the mock data
const uniqueLocationsMock = [
  "Palm Harbor, TX",
  "Beverly Hills, CA",
  "Miami, FL",
  "Orlando, FL",
  "Austin, TX"
];

interface Props {
    option: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setProperties: Dispatch<SetStateAction<Property[]>>;
    onOpen: ()=>void;
}

export const PlaceAndDateForm = ({ option, setIsLoading, setProperties, onOpen }: Props) => {
    const [location, setLocation] = useState('');
    const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null);

    const handleSearch = async () => {
        setProperties([]);
        onOpen(); // Open the drawer immediately
        if (!location || !dateRange) {
            return;
        }
        setIsLoading(true);
        try {
            const results = await fetchProperties(location, dateRange, option);
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
        <form onSubmit={handleSubmit} className="bg-white flex flex-row items-center gap-4 w-full h-auto p-6 rounded-lg shadow-md">
            <div className="flex flex-col gap-1 flex-grow">
                <label className="font-medium text-gray-700">Location</label>
                <Select data-testid="location-select" classNames={{trigger: "bg-white"}} placeholder="Select a location" onSelectionChange={selection => {
                    const selectedKey = (selection as Set<string>).values().next().value;
                    setLocation(selectedKey || '');
                }}>
                    {uniqueLocationsMock.map(loc => (
                        <SelectItem key={loc} id={loc}>{loc}</SelectItem>
                    ))}
                </Select>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div className="flex flex-col gap-1">
                <label className="font-medium text-gray-700">When</label>
                <DateRangePicker 
                    classNames={{inputWrapper: "bg-white", input: "text-xs"}}
                    data-testid="date-range-picker"
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
            <div className="w-px h-10 bg-gray-200"></div>
            <button type="submit" className="py-2 px-6 rounded-lg bg-[#7065F0] text-white font-medium self-end">Browse Properties</button>
        </form>
    );
};