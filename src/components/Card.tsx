import Image from "next/image";

export default function Card() {
    return (
        <div className="max-w-[300px]">
            <Image
                src="/prop1.webp"
                alt="Casa 1"
                width={300}
                height={200}
            />
            <div className="bg-white flex flex-col px-6 gap-3 mt-3">
                <h2 className="text-2xl text-[#7065F0] font-bold">$2,700<span className="text-sm font-light text-black">/month</span></h2>
                <h2 className="text-2xl text-black font-bold">Beverly Springfield</h2>
                <p className="text-base text-black font-medium">2821 Lake Sevilla, Palm Harbor, TX</p>
                <div className="h-0.5 w-full bg-[#F0EFFB]"></div>
            </div>
        </div>
    )
}