import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/SecondSection";
import SwitchButton from "@/components/SwitchButton.";
import WeMakeItEasy from "@/components/WeMakeItEasy";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans  items-center justify-items-center max-w-[1440px] min-h-screen pb-8 gap-16 ">
      <div className="w-full p-6">
        <Navbar/>
      </div>
      <main className="flex flex-col gap-[32px] items-center w-full sm:items-start">
        <section className="flex flex-row w-full justify-between ">
          <div className="w-50% bg-[#EFEFFB4D]">
            <h1 className="font-bold text-6xl max-w-[540px]">Buy, rent, or sell your property easily.</h1>
            <p className="max-w-[400px]">A great platform to buy, sell, or even rent your properties without any commisions.</p>
          </div>
          <div className="relative w-full max-w-6/12 h-[800px] bg-[url('/mapaFondo.webp')]">
            {/* <Image 
              src="/mapaFondo.webp" 
              alt="mapaFondo" 
              fill
              className="object-cover"
            /> */}
            <Card/>
          </div>
        </section>
        <section className="flex flex-col sm:flex-row w-full justify-between gap-8 px-6">
          <SecondSection/>
        </section>
      </main>
      {/* <footer className="flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
    </div>
  );
}
