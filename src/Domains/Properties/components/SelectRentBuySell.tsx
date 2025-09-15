"use client"
import { Dispatch, SetStateAction } from "react";
import {addToast} from "@heroui/toast";

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
        setSelected("Buy")
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-row  w-[297px] h-[56px] rounded-t-lg bg-white">
                <button className={`w-full h-full text-lg ${selected === "Rent" ? 'border-[#7065F0] border-b-[3px] text-[#7065F0] font-bold' : 'border-[#efefef] border-b-[2px] pb-[1px] text-black font-medium'}`} onClick={() => setSelected("Rent")}>Rent</button>
                <button className={`w-full h-full text-lg ${selected === "Buy" ? 'border-[#7065F0] border-b-[3px] text-[#7065F0] font-bold' : 'border-[#efefef] border-b-[2px] pb-[1px] text-black font-medium'}`} onClick={() => setSelected("Buy")}>Buy</button>
                <button className={`w-full h-full text-lg ${selected === "Sell" ? 'border-[#7065F0] border-b-[3px] text-[#7065F0] font-bold' : 'border-[#efefef] border-b-[2px] pb-[1px] text-black font-medium'}`} onClick={()=>onSell()}>Sell</button>
            </div>
        </div>
    )
}
