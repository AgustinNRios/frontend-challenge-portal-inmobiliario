"use client"

interface Props {
    isOn?: boolean;
    setIsOn?: () => void;
}

export default function SwitchButton({isOn, setIsOn}: Props) {

    return (
        <div className="bg-[#EFEFFB4D] border-1 items-center border-[#DEDEF7] p-1 rounded-lg w-[334px] h-[60px] mb-6">
            <button
                onClick={setIsOn}
                className={`py-2.5 px-7 text-lg text-center rounded-lg ${isOn ? "bg-white text-[#7065F0] font-semibold border-1 border-gray-300" : "text-gray-600"} `}
            >
                For tenants
            </button>
            <button
                onClick={setIsOn}
                className={`py-2.5 px-7 text-lg text-center rounded-lg ${isOn ? "text-gray-600" : "bg-white text-[#7065F0] font-semibold border-1 border-gray-300"} `}
            >
                For landlords
            </button>
        </div>
    )
}