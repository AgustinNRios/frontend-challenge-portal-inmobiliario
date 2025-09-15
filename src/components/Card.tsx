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
    option: string;
}

export default function Card({image, price, rentalMonthPrice, location, direction, rooms, bathrooms, width, height, horizontal = false, scale, option}: Props) {
    const autoOption = option === 'Buy' || option === 'Rent' ? option : price ? 'Buy' : rentalMonthPrice ? 'Rent' : '';
    return (
        <div className={`${scale ? "scale-75" : ""}`}>
            <div className={`${scale ? "p-1 border-3 bg-white border-[#7065F0] rounded-2xl" : "border-1 border-[#F0EFFB] "} ${horizontal ? "flex flex-row w-full rounded-2xl" : "flex flex-col"}`}>
                <Image
                    className={`${horizontal ? "w-[142px] h-[142px] object-cover rounded-2xl " : "w-full rounded-t-2xl "}`}
                    src={image}
                    alt="Foto casa"
                    width={300}
                    height={200}
                />
                <div className={`bg-white flex flex-col mt-3 ${!horizontal ? "gap-3 px-6 " : "gap-1 px-2"}`}>
                    {autoOption === 'Buy' ? (
                        <h2 className={`text-primary font-bold whitespace-nowrap overflow-ellipsis ${!horizontal ? "text-2xl" : "text-md"}`}>{`$${price}`}</h2>
                    ) : autoOption === 'Rent' ? (
                        <h2 className={`text-primary font-bold whitespace-nowrap overflow-ellipsis ${!horizontal ? "text-2xl" : "text-md"}`}>{`$${rentalMonthPrice}`}<span className="text-sm font-light text-black">/month</span></h2>
                    ) : (
                        <h2 className={`text-primary font-bold whitespace-nowrap overflow-ellipsis ${!horizontal ? "text-2xl" : "text-md"}`}>{`$${rentalMonthPrice}`}<span className="text-sm font-light text-black">/month</span></h2>
                    )}
                    <h2 className={` text-black font-bold ${!horizontal ? "text-2xl" : "text-xl truncate max-w-[100px]"}`}>{location}</h2>
                    <p className={`text-base text-black font-medium ${!horizontal ? "text-base" : "text-sm truncate max-w-[100px]"}`}>{direction}</p>
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