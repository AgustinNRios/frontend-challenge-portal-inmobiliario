"use client"

import { useState } from "react";
import SwitchButton from "./SwitchButton.";
import WeMakeItEasy from "./WeMakeItEasy";
import Image from "next/image";

export default function SecondSection() {
    const [isOn, setIsOn] = useState(true);

    return (
        <div className="flex flex-row items-center justify-center w-full gap-16">
            <div>
                <Image
                    src={"/casa2.webp"}
                    alt="casa2"
                    width={500}
                    height={600}
                />
            </div>
            <div>
                <SwitchButton
                    isOn={isOn}
                    setIsOn={() => {setIsOn(!isOn)}}
                />
                <WeMakeItEasy
                    tenants={isOn}
                />
            </div>
        </div>
    )
}