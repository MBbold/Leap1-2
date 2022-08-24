import { createContext, useState, useContext } from "react";

const SeatDataContext = createContext()
export const SeatDataProvider = (props)=>{
    const {children} = props;
    const [seatData, setSeatData] = useState()
    return(
        <SeatDataContext.Provider value={{seatData, setSeatData}}>
            {children}
        </SeatDataContext.Provider>
    )
}

export const useSeatDataContext =()=>useContext(SeatDataContext)