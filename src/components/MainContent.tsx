'use client';

import dynamic from 'next/dynamic';
import LazyLoad from '@/components/LazyLoad';
import FadeInOnView from '@/animations/FadeInOnView';

// Importación dinámica de los componentes que queremos cargar de forma diferida
const MapSection = dynamic(() => import('@/components/MapSection'), { ssr: false });
const SecondSection = dynamic(() => import('@/components/withState/SecondSection'), { ssr: false });

export default function MainContent() {
    return (
        <>
            <div className="overflow-auto max-w-[701px] max-h-[846px] scale-50 sm:scale-75 lg:scale-100">
                <FadeInOnView>
                    <LazyLoad placeholderHeight='826px'>
                        <MapSection />
                    </LazyLoad>
                </FadeInOnView>
            </div>

            <section className="flex flex-col sm:flex-row w-full justify-between gap-8 px-6 pb-20">
                <FadeInOnView>
                    <LazyLoad placeholderHeight='600px'>
                        <SecondSection />
                    </LazyLoad>
                </FadeInOnView>
            </section>
        </>
    );
}
