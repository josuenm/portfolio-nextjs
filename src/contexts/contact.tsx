import React, { createContext } from "react";



interface ContactProviderProps {
    children: React.ReactNode | React.ReactNode[];
}


export type ContactContextType = {
    isOpen: boolean;
    toggle: (value: boolean) => void;
}



export const ContactContext = createContext(false as ContactContextType | boolean);



export function ContactProvider({children}: ContactProviderProps) {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = (value: boolean) => setIsOpen(value);

    return(
        <ContactContext.Provider value={{isOpen, toggle} as ContactContextType}>
            {children}
        </ContactContext.Provider>
    )
}