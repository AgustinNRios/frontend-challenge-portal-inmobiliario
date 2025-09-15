'use client';
import { Property } from "@/Domains/Properties/model/Property";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import Card from "../../../components/Card";
import Image from "next/image";
import { useState, useContext } from "react";
import { PublicationTypeContext } from "../context/PublicationTypeContext";
import useWindowWidth from "@/hooks/useWindowWidth";

interface Props {
    popoverPlacement:"top-start"|"top"|"top-end"|"bottom-start"|"bottom"|"bottom-end"|"right-start"|"right"|"right-end"|"left-start"|"left"|"left-end";
    size?: 1 | 2 | 3 ;
    property: Property;
    isOpen?: boolean;
    scale?: boolean;
    opacity?: number;
}

export default function PropertyPoint({popoverPlacement, size = 1, property, isOpen=false, scale=true, opacity}: Props) {
    const windowWidth = useWindowWidth();
    const { publicationType } = useContext(PublicationTypeContext);
    const [LocationHidden, setLocationHidden] = useState(!isOpen);

    const content = (
        <PopoverContent aria-label={`Detalles de la propiedad en ${property.direction}, ${property.location}`} className="bg-transparent">
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
                horizontal={false}
                option={property.type}
                scale={scale}
            ></Card>
        </PopoverContent>
    );
    return (

    <div className="flex flex-col items-center">
        <Image
            src={"/Location.svg"}
            alt="Marcador de ubicación en el mapa"
            width={56}
            height={60}
            className={LocationHidden ? "opacity-0 mb-1" : "mb-1"}
        />
        <Popover onClose={() => setLocationHidden(true)} defaultOpen={isOpen} shadow="none" className="bg-transparent" key={property.id+popoverPlacement} placement={popoverPlacement}>
        <PopoverTrigger>
            <button aria-label={`Ver detalles de la propiedad en ${property.location}`} className={`opacity-${publicationType === property.type? 100: 50 }`} onClick={() => setLocationHidden(!LocationHidden)}>
                { property.id == '1' ? (
                    <Image
                    src={"/circle.svg"}
                    alt="posicion actual"
                    width={56}
                    height={56}
                    />
                ):(
                    <Image
                        src={"/CommonPoint.svg"}
                        alt="Punto de interés en el mapa"
                        width={size == 1 ? 18 : size == 2 ? 14 : 10}
                        height={size == 1 ? 18 : size == 2 ? 14 : 10}
                    />
                )}
            </button>
        </PopoverTrigger>
        {content}
        </Popover>
    </div>
    );
  }