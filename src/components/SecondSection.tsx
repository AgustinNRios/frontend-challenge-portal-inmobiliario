"use client"

import { useState } from "react";
import SwitchButton from "./SwitchButton.";
import WeMakeItEasy from "./WeMakeItEasy";
import Image from "next/image";
import CardWithIcon from "./CardWithIcon";

export default function SecondSection() {
    const [isOn, setIsOn] = useState(true);

    return (
        <div className="relative flex flex-row items-center justify-center w-full gap-16">
            <div className="relative ">
                <Image
                    src={"/casa2.webp"}
                    alt="casa2"
                    width={500}
                    height={600}
                />
                <div className="absolute top-1/12 left-[-6rem]">
                    <CardWithIcon
                        img="/IconPlay.svg"
                        title="Virtual home tour"
                        text="We provide you with virtual tour"
                    />
                </div>
                <div className="absolute -bottom-1/12 left-[4rem]">
                    <CardWithIcon
                        img="/IconHouse.svg"
                        title="Find the best deal"
                        text="Browse thousands of properties"
                        isIn={false}
                    />
                </div>
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