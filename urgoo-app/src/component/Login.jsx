import { useRef } from "react"
import "../Style/Login.css"
import { getFirebase, setDataUser, useGetDataFromFire, setUserDataSignUp } from "../firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Login = () =>{
    const phoneNumberRef = useRef()
    const userNameRef = useRef()
    
    const {userDataObj, getDataUsers} = useGetDataFromFire();
    // const {setDataUsers} = setUserDataSignUp()

    const [isLogin, setIsLogin] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false)
    const [loggedUserData, setLoggedUserData] = useState();
    const navigate = useNavigate();

    const userPhoneIsRegisteredChecked =()=>{
        const inputPhoneNumber = +phoneNumberRef.current.value
        console.log(userDataObj, "userDataObj");
        const registeredPhone = userDataObj.filter((e)=> e.phone === inputPhoneNumber)
        console.log(registeredPhone,"registeredPhone");
        if(inputPhoneNumber.length === 8){
            if(registeredPhone.length > 0){
                alert("Таны утас бүртгэлтэй байна")
            } else{
                alert("Амжилттай бүртгүүллээ")
                setUserDataSignUp(userNameRef.current.value, inputPhoneNumber)
                getDataUsers()
                console.log(userDataObj, "userDataObj Амжилттай");
    
            }
        }else{
            alert("Утасны дугаар буруу байна")
        }
        
    }
    const getLoggedUserData = () => {
        const inputPhoneNumber = +phoneNumberRef.current.value
        const registeredPhone = userDataObj.filter((e)=> e.phone === inputPhoneNumber)
        const result = registeredPhone
        setLoggedUserData(...result);
        if(registeredPhone.length > 0){
            navigate('./Home')
        }else {
            alert("Таны дугаар бүртгэлгүй байна")
        }
      };
    return(
        <div className="loginContainer">
            {isLogin ? <div className="loginPage">
                    <h1 className="center">Нэвтрэх хэсэг</h1>
                    <div className="loginLine">
                        <p>Хэрэглэгчийн утас</p>
                        <input className="formInput" ref={phoneNumberRef} type="number" placeholder="" />
                    </div>
                    </div> : <div className="loginPage">
                    <h1 className="center">Бүртгүүлэх хэсэг</h1>
                        <div className="loginLine">
                            <p>Хэрэглэгчийн нэр</p>
                            <input className="formInput" ref={userNameRef} type="text" placeholder="" />
                        </div>
                    <div className="loginLine">
                        <p>Хэрэглэгчийн утас</p>
                        <input className="formInput" ref={phoneNumberRef} type="number" placeholder="" />
                    </div>
                </div>
            }
            {isLogin ? <div className="containerBtn center">
                    <button className="loginBtn" onClick={()=>{setIsLogin(true); getLoggedUserData(); }}>Нэвтрэх </button>
                    <button className="loginBtn" onClick={()=>setIsLogin(false)}>Бүртгүүлэх </button>
                    </div> : <div className="containerBtn center">
                        <button className="loginBtn" onClick={()=> {userPhoneIsRegisteredChecked(); setIsLogin(true)}}>Бүртгүүлэх </button>
                    </div>
            }
            

        </div>
    )
}