import FirstSection from "@/components/FirstSection";
import FadeInOnView from "@/animations/FadeInOnView";
import SecondLazySection from "@/components/lazySections/SecondLazySection";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
      <main className="flex flex-col gap-16 items-center w-full sm:items-start">
        <section className="w-full justify-center bg-[#efeffb8c]">
          <div className="flex flex-col pt-7 lg:pt-0 items-center lg:flex-row w-full overflow-w-hidden px-5 justify-center lg:items-start gap-6">
            <div className="flex justify-end w-full mt-9 sm:mt-18 lg:w-[701px]">
              <div className="w-full lg:w-[544px] z-20">
                <FadeInOnView>
                  <FirstSection/>
                </FadeInOnView>
              </div>
            </div>
            <div className="overflow-auto max-w-[701px] max-h-[846px] scale-50 sm:scale-75 lg:scale-100">
              <MapSection/>
            </div>
          </div>
        </section>
        <SecondLazySection/>
      </main>
  );
}
