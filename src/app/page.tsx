'use client'
import Card from "@/components/Card";
import FirstSection from "@/components/FirstSection";
import NavbarComponent from "@/components/Navbar";
import SecondSection from "@/components/SecondSection";
import StatisticsNumber from "@/components/StatisticsNumber";
import { Properties } from "@/Domains/Properties/components/Properties";

export default function Home() {
  return (
    <div className="font-sans  items-center justify-items-center  min-h-screen pb-8 gap-16 "> 
      <div className="w-full p-6">
        <NavbarComponent/>
      </div>
      <main className="flex flex-col gap-16 items-center w-full sm:items-start">
        <section className="flex flex-row w-full justify-between">
          <FirstSection/>
          <div className="relative w-full max-w-6/12 h-[800px] bg-[url('/mapaFondo.webp')]">
            <Card
              image="/prop2.webp"
              price={2700}
              location="Beverly Sprinfield"
              direction="1234 Beverly Hills, CA"
              rooms={4}
              bathrooms={2}
              width={120}
              height={80}
              horizontal={false}
              rentalMonthPrice={null}
              scale={true}
            />
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
