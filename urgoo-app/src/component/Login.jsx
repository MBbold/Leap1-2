import { useRef } from "react"
import "../Style/Login.css"
import { getFirebase, setDataUser, useGetDataFromFire, setUserDataSignUp } from "../firestore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logoImg from "../image/logo.png" 
import { useUsersDataContext } from "../context/UsersDataContext"
import { useLoggedUserContext } from "../context/LoggedUserContext"
import { useUserDataContext } from "../context/UserDataContext"


export const Login = () =>{
    const phoneNumberRef = useRef()
    const userNameRef = useRef()
    const {userDataObj, getDataUsers} = useGetDataFromFire();
    const {usersData, setUsersData} = useUsersDataContext();
    const {isLoggedUser, setIsLoggedUser} = useLoggedUserContext(false);
    const {userData, setuserData} = useUserDataContext()
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
            navigate('./home')
            loggedUserCheck()

        }else {
            alert("Таны дугаар бүртгэлгүй байна")
            console.log("usersData", usersData);
        }
      };
      
    const loggedUserCheck = ()=>{
        usersData.forEach((doc)=>{
            if(doc.data().phone === +phoneNumberRef.current.value){
                setuserData({userId:doc.id, name:doc.data().name , phone: doc.data().phone})
            }
        })
        setIsLoggedUser(true)
    }

    return(
        <div className="login">
            {isLogin ? <h1 className="center">Нэвтрэх хэсэг</h1> : <h1 className="center">Бүртгүүлэх хэсэг</h1>}
            <div className="loginContainer">
                <img src={logoImg} alt="" />
                {isLogin ? <div className="loginPage">
                        <div className="loginLine">
                            {/* <p></p> */}
                            <input className="registerInput" ref={phoneNumberRef} type="numeric" placeholder="Хэрэглэгчийн утас" />
                        </div>
                        </div> : <div className="loginPage">
                            <div className="loginLine">
                            <input className="registerInput" ref={phoneNumberRef} type="numeric" placeholder="Хэрэглэгчийн утас" />
                            </div>
                        <div className="loginLine">
                            <input className="registerInput" ref={userNameRef} type="text" placeholder="Хэрэглэгчийн нэр" />
                        </div>
                    </div>
                }
                {isLogin ? <div className="containerBtn center">
                        <button className="loginBtn" onClick={()=>{setIsLogin(true); getLoggedUserData(); }}>Нэвтрэх </button>
                        {/* <button className="loginBtn" onClick={()=>setIsLogin(false)}>Бүртгүүлэх </button> */}
                        </div> : <div className="containerBtn center">
                            <button className="loginBtn" onClick={()=> {userPhoneIsRegisteredChecked()}}>Бүртгүүлэх </button>
                        </div>
                }
                {isLogin ? <div className="loginFooder">
                    <p>Нууц үгээ мартсан</p>
                    <p onClick={()=>{setIsLogin(false)}}>Бүртгүүлэх</p>
                </div> : ""}
                

            </div>
        </div>
    )
}