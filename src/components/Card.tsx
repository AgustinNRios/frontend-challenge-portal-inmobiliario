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
    // const getBlurDataURL = (url: string) => {
    //     if (!url.includes('pexels.com')) return undefined;
    //     const urlObj = new URL(url);
    //     urlObj.searchParams.set('w', '10'); // Set width to 10px for a tiny version
    //     urlObj.searchParams.set('h', '10'); // Set height to 10px
    //     urlObj.searchParams.set('auto', 'compress');
    //     urlObj.searchParams.set('cs', 'tinysrgb');
    //     return urlObj.toString();
    // }

    return (
        <div className={`${scale ? "scale-65" : ""}`}>
            <div className={`rounded-2xl ${scale ? "p-1 border-3 bg-white border-[#7065F0]" : "border-1 border-[#F0EFFB] "} ${horizontal ? "flex flex-row w-full rounded-2xl" : "flex flex-col rounded-2xl"}`}>
                <Image
                    className={`${horizontal ? "w-[142px] h-[142px] object-cover rounded-s-2xl " : "w-[324px] max-h-[200px] rounded-t-2xl "}`}
                    src={image}
                    alt="Foto casa"
                    width={324}
                    height={200}
                    placeholder="blur"
                    // blurDataURL={getBlurDataURL(image)}
                />
                <div className={`bg-white rounded-b-2xl flex flex-col  ${!horizontal ? "gap-3 px-6 h-[216px] pt-6" : "gap-1 px-2 pt-2"}`}>
                    {autoOption === 'Buy' ? (
                        <h2 className={`text-primary font-bold whitespace-nowrap overflow-ellipsis ${!horizontal ? "text-2xl" : "text-md mt-2"}`}>{`$${price}`}</h2>
                    ) : autoOption === 'Rent' ? (
                        <h2 className={`text-primary font-bold whitespace-nowrap overflow-ellipsis ${!horizontal ? "text-2xl" : "text-md"}`}>{`$${rentalMonthPrice}`}<span className="text-sm font-light text-black">/month</span></h2>
                    ) : (
                        <h2 className={`text-primary font-bold whitespace-nowrap overflow-ellipsis ${!horizontal ? "text-2xl" : "text-md"}`}>{`$${rentalMonthPrice}`}<span className="text-sm font-light text-black">/month</span></h2>
                    )}
                    <h2 className={` text-black font-bold ${!horizontal ? "text-2xl" : "text-xl truncate max-w-[120px]"}`}>{location}</h2>
                    <p className={`text-base text-black/50 font-medium ${!horizontal ? "text-base" : "text-sm truncate max-w-[120px]"}`}>{direction}</p>
                    <div className="h-0.5 w-full bg-[#F0EFFB]"></div>
                    <div className="flex flex-row gap-6 mb-4">
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