import "../Style/Form.css"
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
  import { useState } from "react";
  import { useMovieContext } from "../context/movieData";
import { useUserDataContext } from "../context/UserDataContext";
  
const Form =()=>{
    const {movie, setMovie} = useMovieContext()
    const [inputValue, setInputValue] = useState({});
    const [countAdult, setCountAdult] = useState(0)
    const [countChild, setCountChild] = useState(0)
    const times = ['12:00', '14:00', '17:00', '19:00', '21:00','23:00'];
    const [active, setActive] = useState(times[0]);
    const {userData, setuserData} = useUserDataContext()
    return(
        
        <div className="container">
            <div className="movieContainer">
                <div className="movieImage">
                    <img src={movie.profile} alt="" className="infoImage" />
                </div>
                <div className="movieForm">
                        <div className="formContainer">
                            {/* <input className="formInput" onChange={(event) => setInputValue({...inputValue, 'Name':event.target.value})}  type="text" placeholder="Firstname"/>
                            <input className="formInput" onChange={(event) => setInputValue({...inputValue, 'Phone':event.target.value})} type="number" placeholder="Phone"/> */}
                            <input className="formInput" onChange={(event) => setInputValue({...inputValue, 'Email':event.target.value})} type="email" placeholder="me@example.com" required/>
                            <p>Том хүн*</p>
                            <div className="btnDiv">
                                <button onClick={()=>setCountAdult(countAdult-1)} className="addBtn">-</button>
                                <input type="number" placeholder={countAdult} className="movieInputBtn"/>
                                <button onClick={()=>setCountAdult(countAdult+1)} className="addBtn">+</button>
                            </div>
                            <p>Хүүхэд*</p>
                            <div className="btnDiv">
                                <button onClick={()=>setCountChild(countChild-1)} className="addBtn">-</button>
                                <input type="number" placeholder={countChild} className="movieInputBtn"/>
                                <button onClick={()=>setCountChild(countChild+1)} className="addBtn">+</button>
                            </div>
                            <p>Цагаа сонгоно уу?*</p>
                                <div className="movieTimes">
                                    {times.map(time => (
                                        <button className={ active===time ? 'active1 timeBtn' : 'timeBtn'} onClick={() => {setActive(time)}}>
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            <div className="movieBtn">
                                <Link className="movieBtnLink" to="/table" onClick={()=>{console.log("inputValue", inputValue)
                                                if(inputValue.Email.indexOf("@")<1 || (inputValue.Email.indexOf(".") - inputValue.Email.indexOf("@") <2)){alert("email zuw buglu")}else{
                                                    {setuserData({...inputValue, Adult:countAdult, Child:countChild, Time:active})}
                                                }}}> Үргэлжлүүлэх</Link>
                                {/* <input className="link2" onClick={()=> { console.log("inputValue", inputValue)
                                    if(Object.keys(inputValue).length===0 || Object.keys(inputValue).length<2)
                                        { alert('Buren buglu')}
                                        if(inputValue.Phone.length===8){console.log("Utas Bolson")} else {alert("Utas zuw buglu")}
                                                if(inputValue.Email.indexOf("@")<1 || (inputValue.Email.indexOf(".") - inputValue.Email.indexOf("@") <2)){alert("email zuw buglu")}else{
                                                }
                                                }} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="submit" to="/movie"/>
                                */}
                                <Link className="movieBtnLink" to="/movie" > Буцах</Link>
                            </div>
                            
                        </div>
                        <div>
                            
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Form;



        
        
