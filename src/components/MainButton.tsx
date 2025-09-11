import Image from "next/image";

interface Props {
    text: string;
    bgColor?: string;
    color?: string;
    img?: string;
}

export default function MainButton({text, bgColor, color, img}: Props) {
    return (
        <button 
            type="button"
            aria-label="Main Button"
            className={`py-2 px-4 flex flex-row rounded-lg ${bgColor} `}
        >
            <p className={`${color} font-medium`}>{text}</p>
            {img ? 
            <Image
                src={img}
                alt="button icon"
                width={20}
                height={20}
                className="inline-block ml-2"
            /> : 
            null}
        </button>
    )
}