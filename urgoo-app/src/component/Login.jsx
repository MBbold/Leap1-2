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
        const inputPhoneNumber = +phoneNumberRef.current.value;
        const inputPhoneNumber1 = phoneNumberRef.current.value;
        let phoneRegex = /^[0-9]{8}$/;
        const registeredPhone = userDataObj.filter((e)=> e.phone === inputPhoneNumber)
        if(inputPhoneNumber.toString().length === 8 && phoneRegex.test(inputPhoneNumber.toString())){
            if(registeredPhone.length > 0){
                alert("Таны утас бүртгэлтэй байна")
                setIsLogin(true)
            } else{
                alert("Амжилттай бүртгүүллээ")
                setUserDataSignUp(userNameRef.current.value, inputPhoneNumber)
                getDataUsers()
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
      
    //   const validatePhoneHandler = (phoneInput) => {
    //     let phoneRegex = /^[0-9]{8}$/;
    
    //     if (phoneInput.trim().length === 8 && phoneRegex.test(phoneInput.trim())) {
    //       return true;
    //     } else return false;
    //   };








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
                        <button className="loginBtn" onClick={()=> {userPhoneIsRegisteredChecked()}}>Бүртгүүлэх </button>
                    </div>
            }
            

        </div>
    )
}