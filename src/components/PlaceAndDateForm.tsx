"use client"

interface Props {
    fill?: string;
    size?: number;
    height?: number;
    width?: number;
}
export const PlaceAndDateForm = ({fill, size, height, width, ...props}: Props) => {
    return (
        <form className="bg-white flex flex-row gap-2 w-[783px] h-[104px] px-7 py-6 rounded-b-lg rounded-tr-lg rounded-br-lg">
            <div className="flex flex-col gap-1">
                <label>Ubication</label>
                <select className="border-none outline-0 rounded-lg p-2">
                    <option value="">Select an option</option>
                </select>
            </div>
            <div className="w-[1px] h-10 bg-[#7065F0] opacity-5"></div>
            <div className="flex flex-col gap-1">
                <label>Ubication</label>
                <input className="border-none outline-0 rounded-lg p-2" type="date"/>
            </div>
            <div className="w-[1px] h-10 bg-[#7065F0] opacity-5"></div>
            <button type="submit" className="py-2 px-4 rounded-lg bg-[#7065F0] text-white font-medium">Browse Properties</button>
        </form>
    )
}