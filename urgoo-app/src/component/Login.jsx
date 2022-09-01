import "../Style/Login.css"
export const Login = () =>{
    
    return(
        <div className="loginContainer">
            <h1 className="center">Нэвтрэх хэсэг</h1>
            <div className="loginLine">
                <p>Хэрэглэгчийн нэр</p>
                <input className="formInput" type="text" placeholder="" />
            </div>
            <div className="loginLine">
                <p>Хэрэглэгчийн утас</p>
                <input className="formInput" type="number" placeholder="" />
            </div>
            <button className="loginBtn">Нэвтрэх</button>
        </div>
    )
}