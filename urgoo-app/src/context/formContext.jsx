import { createContext, useState, useContext } from "react";

const FormContext = createContext()
export const FormProvider = (props)=>{
    const {children} = props;
    const [formArr, setformArr] = useState({})
    const [isLogin, setIsLogin] = useState(false)

    return(
        <FormContext.Provider value={{formArr, setformArr, isLogin, setIsLogin}}>
            {children}
        </FormContext.Provider>
    )
}

export const useFormContext =()=>useContext(FormContext)