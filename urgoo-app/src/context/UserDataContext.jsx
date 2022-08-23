import { createContext, useState, useContext } from "react";

const UserDataContext = createContext()
export const UserDataProvider = (props)=>{
    const {children} = props;
    const [userData, setuserData] = useState()
    return(
        <UserDataContext.Provider value={{userData, setuserData}}>
            {children}
        </UserDataContext.Provider>
    )
}

export const useUserDataContext =()=>useContext(UserDataContext)