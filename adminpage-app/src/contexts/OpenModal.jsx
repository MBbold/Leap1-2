import { createContext, useState, useContext } from "react";
// import formContext from "../data/urgoo.json";

const OpenModalContext = createContext()
export const OpenModalProvider = (props)=>{
    const {children} = props;
    const [openModal, setOpenModal] = useState(false)

    return(
        <OpenModalContext.Provider value={{openModal, setOpenModal}}>
            {children}
        </OpenModalContext.Provider>
    )
}

export const useOpenModalContext =()=>useContext(OpenModalContext)