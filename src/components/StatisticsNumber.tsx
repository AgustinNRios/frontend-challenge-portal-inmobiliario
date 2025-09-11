interface Props {
    number: number;
    text: string;
}

export default function StatisticsNumber({ number, text }: Props) {
    return (
        <div className="flex flex-row items-center gap-4">
            <div className="w-1 h-16 bg-[#E0DEF7]"></div>
            <div className="flex flex-col items-start">
                <h2 className="text-3xl text-primary font-bold">{`${number}k+`}</h2>
                <p className="text-gray-500">{text}</p>
            </div>
        </div>
    )
}