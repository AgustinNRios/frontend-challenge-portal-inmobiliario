import Image from "next/image";

interface Props {
    img: string,
    title: string,
    text: string,
    isIn?: boolean,
}

export default function CardWithIcon({img, title, text, isIn=true}: Props) {
    return (
        <div className={` bg-white border-2 rounded-lg border-[#E0DEF7] min-w-[300px] ${isIn ? "flex flex-row gap-5 p-2 lg:p-5" : "flex relative  p-2 lg:p-5 px-8"} `}>
            <div className={`w-[64px] ${isIn ? "" : "absolute -top-4/12  right-5 lg:right-5"}`}>
                <Image
                    src={img}
                    alt="icono"
                    width={64}
                    height={64}
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-[#100A55] text-xl font-bold">{title}</h3>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    )
}