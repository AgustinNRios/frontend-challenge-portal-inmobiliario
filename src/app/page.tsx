'use client'
import Card from "@/components/Card";
import FirstSection from "@/components/FirstSection";
import NavbarComponent from "@/components/Navbar";
import PropertyPoint from "@/components/PropertyPoint";
import SecondSection from "@/components/SecondSection";
import { propertiesMock } from "@/Domains/Properties/Mocks/PropertiesMock";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans  items-center justify-items-center  min-h-screen pb-8 gap-16 "> 
      <div className="w-full p-6">
        <NavbarComponent/>
      </div>
      <main className="flex flex-col gap-16 items-center w-full sm:items-start">
        <section className="w-full justify-between bg-[#efeffb8c]">
          <div className=" flex flex-col pt-7 lg:pt-0 lg:flex-row w-full px-5 justify-between items-center gap-10">
            <FirstSection/>
            <div className="relative w-[900px] h-[800px] bg-[url('/mapaFondo.webp')] bg-cover">
              <div className="absolute top-[5px] left-[450px]">
                <PropertyPoint popoverPlacement="left-start" property={propertiesMock[0]} isOpen={true} scale={false}/>
              </div>
              <div className="absolute top-[165px] left-[740px]">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[3]} isOpen={false} opacity={30}/>
              </div>
              <div className="absolute top-[260px] left-[515px]">
                <PropertyPoint popoverPlacement="left" property={propertiesMock[2]} isOpen={false} size={3}/>
              </div>
              <div className="absolute z-100 top-[470px] left-[490px]">
                <PropertyPoint popoverPlacement="right-start" property={propertiesMock[1]} isOpen={true} opacity={50}/>
              </div>
              <div className="absolute top-[515px] left-[110px]">
                <PropertyPoint popoverPlacement="top" property={propertiesMock[4]} isOpen={false} size={2} opacity={50}/>
              </div>
              <div className="absolute top-[555px] left-[357px]">
                <PropertyPoint popoverPlacement="top-start" property={propertiesMock[5]} isOpen={false} opacity={30}/>
              </div>
              <div className="absolute top-[515px] left-[810px]">
                <PropertyPoint popoverPlacement="left" property={propertiesMock[6]} isOpen={false} size={2}/>
              </div>
              <div className="absolute top-[650px] left-[393px]">
                <PropertyPoint popoverPlacement="top" property={propertiesMock[7]} isOpen={false}/>
              </div>
              <div className="absolute top-[109px] left-[490px]">
                <Image
                  src={"/path.svg"}
                  alt="camino"
                  width={279}
                  height={402}
                  className="!w-[279px] !h-[402px]"
                />
              </div>
              <div className="absolute top-[55px] left-[450px]">
                <Image
                  src={"/circle.svg"}
                  alt="circulo"
                  width={56}
                  height={56}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row w-full justify-between gap-8 px-6 pb-20">
          <SecondSection/>
        </section>
      </main>
      {/* <footer className="flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
