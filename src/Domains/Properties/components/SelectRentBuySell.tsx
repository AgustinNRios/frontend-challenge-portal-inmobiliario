"use client"
import { useContext } from "react";
import {addToast} from "@heroui/toast";
import { PublicationTypeContext } from "../context/PublicationTypeContext";
import { PropertyType } from "../model/Property";

export const SelectRentBuySell = () => {
    const { publicationType, setPublicationType } = useContext(PublicationTypeContext);
    function onSell(){
        addToast({
            title: "Coming soon!",
            description: "This feature is not available at the moment.",
            color: 'danger'
        })
    }
    return (
        <div className="flex flex-col">
            <div className="flex flex-row  w-[297px] h-[56px] rounded-t-lg bg-white">
                <button className={`w-full h-full text-lg ${publicationType === PropertyType.Rent ? 'border-[#7065F0] border-b-[3px] text-[#7065F0] font-bold' : 'border-[#efefef] border-b-[2px] pb-[1px] text-black font-medium'}`} onClick={() => setPublicationType(PropertyType.Rent)}>Rent</button>
                <button className={`w-full h-full text-lg ${publicationType === PropertyType.Buy ? 'border-[#7065F0] border-b-[3px] text-[#7065F0] font-bold' : 'border-[#efefef] border-b-[2px] pb-[1px] text-black font-medium'}`} onClick={() => setPublicationType(PropertyType.Buy)}>Buy</button>
                <button className={`w-full h-full text-lg ${publicationType === PropertyType.Sale ? 'border-[#7065F0] border-b-[3px] text-[#7065F0] font-bold' : 'border-[#efefef] border-b-[2px] pb-[1px] text-black font-medium'}`} onClick={()=>onSell()}>Sell</button>
            </div>
        </div>
    )
}
