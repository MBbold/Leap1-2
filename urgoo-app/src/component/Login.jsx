import "../Style/Login.css"
export const Login = () =>{
    
    return(
        <div className="loginContainer">
            <h1>Login</h1>
            <div className="loginLine">
                <p>Name</p>
                <input className="formInput" type="text" placeholder="FirstName" />
            </div>
            <div className="loginLine">
                <p>Phone</p>
                <input className="formInput" type="number" placeholder="Phone" />
            </div>
            <button className="loginBtn">Нэвтрэх</button>
        </div>
    )
}