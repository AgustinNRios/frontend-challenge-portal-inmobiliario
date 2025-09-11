
interface Props {
    text: string;
    bgColor?: string;
    color?: string;
}

export default function MainButton({text, bgColor, color}: Props) {
    return (
        <div className={`py-2 px-4 rounded-lg ${bgColor} `}>
            <p className={`${color} font-medium`}>{text}</p>
        </div>
    )
}