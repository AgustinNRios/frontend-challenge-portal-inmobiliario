import { Property } from "@/Domains/Properties/model/Property";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";
import Card from "./Card";



interface Props {
    placement:"top-start"|"top"|"top-end"|"bottom-start"|"bottom"|"bottom-end"|"right-start"|"right"|"right-end"|"left-start"|"left"|"left-end";
    size: 1 | 2 | 3 ;
    property: Property;
}

export default function App({placement, size, property}: Props) {
    const content = (
      <PopoverContent>
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
            option={'Buy'}
        ></Card>
      </PopoverContent>
    );
  
    return (
      <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
        <Popover key={placement} color="secondary" placement={placement}>
        <PopoverTrigger>
            <Button className="capitalize" color="secondary" variant="flat">
            {placement.replace("-", " ")}
            </Button>
        </PopoverTrigger>
        {content}
        </Popover>
      </div>
    );
  }