import { createContext, useState, useContext } from "react";

const LoggedUserContext = createContext()
export const LoggedUserProvider = (props)=>{
    const {children} = props;
    const [isLoggedUser, setIsLoggedUser] = useState()
    return(
        <LoggedUserContext.Provider value={{isLoggedUser, setIsLoggedUser}}>
            {children}
        </LoggedUserContext.Provider>
    )
}

export const useLoggedUserContext =()=>useContext(LoggedUserContext)