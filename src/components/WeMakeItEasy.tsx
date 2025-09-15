import FadeInOnView from "@/animations/FadeInOnView";
import MainButton from "./MainButton";

interface Props {
    tenants?: boolean;
}

export default function WeMakeItEasy({ tenants }: Props) {
    return (
        <div className="pt-5">
            {tenants ? (
                <FadeInOnView key="tenants">
                    <h1 className="text-4xl font-bold max-w-[440px]">We make it easy for tenants and landlords.</h1>
                    <p className="max-w-[400px] my-9 h-[104px]">The best part? you’ll save a bunch of money and time with our services.</p>
                </FadeInOnView>
            ) : (
                <FadeInOnView key="landlords">
                    <h1 className="text-4xl font-bold max-w-[440px]">We make it easy for landlords and tenants.</h1>
                    <p className="max-w-[400px] my-9 h-[104px]">Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
                </FadeInOnView>
            )}
            <MainButton
                text="See more"
                bgColor="bg-primary"
                color="text-white"
                img="/arrowRight.svg"
            />
        </div>
    )
}