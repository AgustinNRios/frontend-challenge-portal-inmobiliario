import Image from "next/image";
import IconAndNumber from "./Icon&Number";

interface Props {
    image: string;
    rentalMonthPrice: number | null;
    price: number | null; //on buy
    location: string;
    direction: string;
    rooms: number;
    bathrooms: number;
    width: number;
    height: number;
    horizontal: boolean;
    scale?: boolean;
}

export default function Card({image, price, location, direction, rooms, bathrooms, width, height, horizontal = false, scale}: Props) {
    return (
        <div className={`${scale ? "scale-75" : ""}`}>
            <div className={`${scale ? "p-1 border-3 bg-white border-[#7065F0] rounded-2xl" : "border-1 border-[#F0EFFB] "} ${horizontal ? "flex flex-row w-full" : "flex flex-col max-w-[300px]"}`}>
                <Image
                    src={image}
                    alt="Foto casa"
                    width={300}
                    height={200}
                />
                <div className="bg-white flex flex-col px-6 gap-3 mt-3">
                    <h2 className="text-2xl text-primary font-bold">{`$${price}`}<span className="text-sm font-light text-black">/month</span></h2>
                    <h2 className="text-2xl text-black font-bold">{location}</h2>
                    <p className="text-base text-black font-medium">{direction}</p>
                    <div className="h-0.5 w-full bg-[#F0EFFB]"></div>
                    <div className="flex flex-row justify-between mb-4">
                        <IconAndNumber
                            src="/IconBed.svg"
                            number={rooms}
                        />
                        <IconAndNumber
                            src="/IconBath.svg"
                            number={bathrooms}
                        />
                        <IconAndNumber
                            src="/IconSpace.svg"
                            number={`${width}x${height} m²`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}