import { Properties } from "@/Domains/Properties/components/Properties";
import StatisticsNumber from "./StatisticsNumber";

export default function FirstSection() {
    return (
        <div className="flex flex-col justify-center mx-auto gap-8">
            <h1 className="font-bold text-6xl max-w-[480px]">Buy, rent, or sell your property easily.</h1>
            <p className="max-w-[440px] text-xl font-medium">A great platform to buy, sell, or even rent your properties without any commisions.</p>
            <div className="flex flex-row gap-16 mt-4">
                <StatisticsNumber
                    number={50}
                    text="renters"
                />
                <StatisticsNumber
                    number={10}
                    text="properties"
                />
            </div>
            <Properties/>
        </div>
    )
}