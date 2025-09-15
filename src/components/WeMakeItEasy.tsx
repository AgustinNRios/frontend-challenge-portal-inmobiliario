import MainButton from "./MainButton";

interface Props {
    tenants?: boolean;
}

export default function WeMakeItEasy({tenants}: Props) {
    return (
        <div className="pt-5">
            <h1 className="text-4xl font-bold max-w-[440px]">{tenants ? "We make it easy for tenants and landlords." : "We make it easy for landlords and tenants."}</h1>
            <p className="max-w-[400px] my-9 h-[104px]">{tenants ? "Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services." : "adsajdfhakvbfbvladbdkl. The best part? you’ll save a bunch of money and time with our services."}</p>
            <MainButton
                text="See more"
                bgColor="bg-primary"
                color="text-white"
                img="/arrowRight.svg"
            />
        </div>
    )
}