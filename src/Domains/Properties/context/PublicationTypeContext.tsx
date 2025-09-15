import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { PropertyType } from "../model/Property";

type PublicationType = PropertyType.Rent | PropertyType.Buy | PropertyType.Sale;

interface PublicationTypeContextProps {
    publicationType: PublicationType;
    setPublicationType: Dispatch<SetStateAction<PublicationType>>;
}

export const PublicationTypeContext = createContext<PublicationTypeContextProps>({
    publicationType: PropertyType.Rent,
    setPublicationType: () => {},
});

export const PublicationTypeProvider = ({ children }: { children: ReactNode }) => {
    const [publicationType, setPublicationType] = useState<PublicationType>(PropertyType.Rent);
    return (
        <PublicationTypeContext.Provider value={{ publicationType, setPublicationType }}>
            {children}
        </PublicationTypeContext.Provider>
    );
};
