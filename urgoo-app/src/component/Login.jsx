import { useRef } from "react"
import "../Style/Login.css"
import { getFirebase } from "../firestore"
export const Login = () =>{
    const inputRef = useRef()
    return(
        <div className="loginContainer">
            <h1 className="center">Нэвтрэх хэсэг</h1>
            <div className="loginLine">
                <p>Хэрэглэгчийн нэр</p>
                <input className="formInput" type="text" placeholder="" />
            </div>
            <div className="loginLine">
                <p>Хэрэглэгчийн утас</p>
                <input className="formInput" ref={inputRef} type="number" placeholder="" />
            </div>
            <button className="loginBtn" onClick={()=>getFirebase(inputRef.current.value)}>Нэвтрэх </button>
        </div>
    )
}