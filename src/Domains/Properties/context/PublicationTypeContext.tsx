import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { PropertyType } from "../model/Property";

interface PublicationTypeContextProps {
    publicationType: PropertyType;
    setPublicationType: Dispatch<SetStateAction<PropertyType>>;
}

export const PublicationTypeContext = createContext<PublicationTypeContextProps>({
    publicationType: PropertyType.Rent,
    setPublicationType: () => {},
});

export const PublicationTypeProvider = ({ children }: { children: ReactNode }) => {
    const [publicationType, setPublicationType] = useState<PropertyType>(PropertyType.Rent);
    return (
        <PublicationTypeContext.Provider value={{ publicationType, setPublicationType }}>
            {children}
        </PublicationTypeContext.Provider>
    );
};
