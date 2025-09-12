"use client"
import { Dispatch, SetStateAction } from "react";
import {addToast} from "@heroui/react";

interface Props {
    setSelected: Dispatch<SetStateAction<string>>;
    selected: string;
}
export const SelectRentBuySell = ({selected = 'Buy', setSelected}: Props) => {
    function onSell(){
        setSelected("Sell")
        addToast({
            title: "Coming soon!",
            description: "This feature is not available at the moment.",
            color: 'danger'
        })
    }
    return (
        <div className="flex flex-col bg-amber-900">
            <div className="flex flex-row gap-2 w-[297px] h-[56px] rounded-t-lg bg-white">
                <button className={`w-full h-full border-b-[3px] text-lg font-medium text-black ${selected === "Buy" ? 'border-[#7065F0] text-[#7065F0] font-bold' : 'border-[#ffffff] text-[#7065F0]'}`} onClick={() => setSelected("Buy")}>Buy</button>
                <button className={`w-full h-full border-b-[3px] text-lg font-medium text-black ${selected === "Rent" ? 'border-[#7065F0] text-[#7065F0] font-bold' : 'border-[#ffffff] text-[#7065F0]'}`} onClick={() => setSelected("Rent")}>Rent</button>
                <button className={`w-full h-full border-b-[3px] text-lg font-medium text-black ${selected === "Sell" ? 'border-[#7065F0] text-[#7065F0] font-bold' : 'border-[#ffffff] text-[#7065F0]'}`} onClick={()=>onSell()}>Sell</button>
            </div>
        </div>
    )
}
