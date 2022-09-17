import { createContext, useState, useContext, useEffect } from "react";

const PathNameContext = createContext()
export const PathNameProvider = (props)=>{
    const {children} = props;
    const [pathName, setPathName] = useState()

    return(
        <PathNameContext.Provider value={{pathName, setPathName}}>
            {children}
        </PathNameContext.Provider>
    )
}

export const usePathNameContext =()=>useContext(PathNameContext)