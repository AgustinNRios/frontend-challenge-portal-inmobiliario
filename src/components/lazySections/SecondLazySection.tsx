'use client';
import FadeInOnView from "@/animations/FadeInOnView";
import LazyLoad from "../LazyLoad";
import dynamic from "next/dynamic";

const SecondSection = dynamic(() => import('@/components/withState/SecondSection'), {
    ssr: false,
  });

export default function SecondLazySection() {
    return (
        <section className="flex flex-col sm:flex-row w-full justify-center gap-8 px-6 pb-20">
            <FadeInOnView>
                <LazyLoad>
                    <SecondSection />
                </LazyLoad>
            </FadeInOnView>
        </section>
    )
}