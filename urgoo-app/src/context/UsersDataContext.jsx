import { createContext, useState, useContext } from "react";

const UsersDataContext = createContext()
export const UsersDataProvider = (props)=>{
    const {children} = props;
    const [usersData, setUsersData] = useState()
    return(
        <UsersDataContext.Provider value={{usersData, setUsersData}}>
            {children}
        </UsersDataContext.Provider>
    )
}

export const useUsersDataContext =()=>useContext(UsersDataContext)