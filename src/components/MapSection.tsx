import { propertiesMock } from "@/Domains/Properties/Mocks/PropertiesMock";
import Image from "next/image";
import PropertyPoint from "@/Domains/Properties/components/PropertyPoint";

export default function MapSection() {
    return (
            <div className="relative w-[681px] h-[826px]">
                <Image
                    src={"/mapaFondo.webp"}
                    alt="camino desde la posicion actual"
                    width={701}
                    height={846}
                    className="w-[701px] h-[826px]"
                    priority
                />
                    <div className="absolute top-[-15px] left-[340px]">
                        <PropertyPoint popoverPlacement="left-start" property={propertiesMock[0]} isOpen={true} scale={false} />
                    </div>
                    <div className="absolute top-[117px] left-[550px]">
                        <PropertyPoint popoverPlacement="bottom" property={propertiesMock[3]} size={2} isOpen={false} opacity={30} />
                    </div>
                    <div className="absolute top-[200px] left-[385px]">
                        <PropertyPoint popoverPlacement="left" property={propertiesMock[2]} isOpen={false} size={3} />
                    </div>
                    <div className="absolute top-[365px] left-[375px]">
                        <PropertyPoint popoverPlacement="right" property={propertiesMock[1]} isOpen={true} opacity={50} />
                    </div>
                    <div className="absolute top-[470px] left-[110px]">
                        <PropertyPoint popoverPlacement="top" property={propertiesMock[4]} isOpen={false} size={3} opacity={30} />
                    </div>
                    <div className="absolute top-[530px] left-[250px]">
                        <PropertyPoint popoverPlacement="top-start" property={propertiesMock[5]} isOpen={false} size={2} opacity={30} />
                    </div>
                    <div className="absolute top-[515px] left-[610px]">
                        <PropertyPoint popoverPlacement="left" property={propertiesMock[6]} isOpen={false} size={2} />
                    </div>
                    <div className="absolute top-[665px] left-[280px]">
                        <PropertyPoint popoverPlacement="top" property={propertiesMock[7]} isOpen={false} />
                    </div>
                    <div className="absolute top-[102px] left-[385px]">
                        <Image
                            src={"/path.svg"}
                            alt="camino desde la posicion actual"
                            width={215}
                            height={307}
                            className="!w-[215px] !h-[307px]"
                        />
                    </div>
            </div>
    )
}