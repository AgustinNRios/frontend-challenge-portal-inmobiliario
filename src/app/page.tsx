'use client'
import Card from "@/components/Card";
import FirstSection from "@/components/FirstSection";
import NavbarComponent from "@/components/Navbar";
import PropertyPoint from "@/components/PropertyPoint";
import SecondSection from "@/components/SecondSection";
import { propertiesMock } from "@/Domains/Properties/Mocks/PropertiesMock";

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
            <div className="relative w-full lg:max-w-6/12 h-[800px] bg-[url('/mapaFondo.webp')]">
              <div className="absolute top-1/12 left-5/12">
                <PropertyPoint popoverPlacement="left" property={propertiesMock[0]} isOpen={false} scale={false}/>
              </div>
              <div className="absolute top-3/12 left-9/12">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[0]} isOpen={false} opacity={30}/>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[0]} isOpen={false}/>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[0]} isOpen={false}/>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[0]} isOpen={false}/>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[0]} isOpen={false}/>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[0]} isOpen={false}/>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <PropertyPoint popoverPlacement="bottom" property={propertiesMock[0]} isOpen={false}/>
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
