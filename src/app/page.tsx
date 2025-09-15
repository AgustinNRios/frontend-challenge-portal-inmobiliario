import FirstSection from "@/components/FirstSection";
import PropertyPoint from "@/Domains/Properties/components/PropertyPoint";
import SecondSection from "@/components/withState/SecondSection";
import { propertiesMock } from "@/Domains/Properties/Mocks/PropertiesMock";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col gap-16 items-center w-full sm:items-start">
        <section className="w-full justify-center bg-[#efeffb8c]">
          <div className="flex flex-col pt-7 lg:pt-0 items-center lg:flex-row w-full overflow-w-hidden px-5 justify-center lg:items-start gap-6">
            <div className="flex justify-end w-full mt-18 lg:w-[701px]">
              <div className="w-full lg:w-[544px] z-20">
                <FirstSection/>
              </div>
            </div>
            <div className="overflow-auto max-w-[701px] max-h-[846px] scale-50 sm:scale-75 lg:scale-100">
              <div className="relative w-[681px] h-[826px]">
                <Image
                  src={"/mapaFondo.webp"}
                  alt="camino desde la posicion actual"
                  width={701}
                  height={846}
                  className="w-[701px] h-[826px]"
                  priority
                />
                {/* <div className="absolute top-[55px] left-[285px]">
                  <Image
                    src={"/circle.svg"}
                    alt="posicion actual"
                    width={56}
                    height={56}
                  />
                </div> */}
                <div className="absolute top-[5px] left-[285px]">
                  <PropertyPoint popoverPlacement="left-start" property={propertiesMock[0]} isOpen={true} scale={false}/>
                </div>
                <div className="absolute top-[165px] left-[540px]">
                  <PropertyPoint popoverPlacement="bottom" property={propertiesMock[3]} isOpen={false} opacity={30}/>
                </div>
                <div className="absolute top-[260px] left-[515px]">
                  <PropertyPoint popoverPlacement="left" property={propertiesMock[2]} isOpen={false} size={3}/>
                </div>
                <div className="absolute top-[335px] left-[309px]">
                  <PropertyPoint popoverPlacement="right-start" property={propertiesMock[1]} isOpen={true} opacity={50}/>
                </div>
                <div className="absolute top-[515px] left-[110px]">
                  <PropertyPoint popoverPlacement="top" property={propertiesMock[4]} isOpen={false} size={2} opacity={50}/>
                </div>
                <div className="absolute top-[555px] left-[357px]">
                  <PropertyPoint popoverPlacement="top-start" property={propertiesMock[5]} isOpen={false} opacity={30}/>
                </div>
                <div className="absolute top-[515px] left-[610px]">
                  <PropertyPoint popoverPlacement="left" property={propertiesMock[6]} isOpen={false} size={2}/>
                </div>
                <div className="absolute top-[550px] left-[393px]">
                  <PropertyPoint popoverPlacement="top" property={propertiesMock[7]} isOpen={false}/>
                </div>
                <div className="absolute top-[102px] left-[300px]">
                  <Image
                    src={"/path.svg"}
                    alt="camino desde la posicion actual"
                    width={215}
                    height={307}
                    className="!w-[215px] !h-[307px]"
                  />
                </div>
              </div>
            </div>
            {/* <div className="relative w-full max-w-[701px] h-[846px] max-h-[846px] bg-[url('/mapaFondo.webp')] bg-cover overflow-hidden shrink-0" role="img" aria-label="Mapa con puntos de propiedades">
            </div> */}
          </div>
        </section>
        <section className="flex flex-col sm:flex-row w-full justify-between gap-8 px-6 pb-20">
          <SecondSection/>
        </section>
      </main>
  );
}
