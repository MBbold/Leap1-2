import "../App.css"
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
            <nav>
            </nav>
            
            <div className="infoContainer">
                <div className="infoTitle">
                    <img src={movie.profile} alt="" className="infoImage" />
                </div>
                <div className="infoTitle">
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <div style={{display:'flex',  flexDirection:'column', width:'300px', height:'100vh'}}>
                            <input onChange={(event) => setInputValue({...inputValue, 'Name':event.target.value})} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="text" placeholder="Firstname"/>
                            <input onChange={(event) => setInputValue({...inputValue, 'Phone':event.target.value})} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="number" placeholder="Phone"/>
                            <input onChange={(event) => setInputValue({...inputValue, 'Email':event.target.value})} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="email" placeholder="me@example.com" required/>
                            <p>Том хүн*</p>
                            <div style={{marginLeft:'10px'}}>
                                <button onClick={()=>setCountAdult(countAdult-1)} className="addBtn">-</button>
                                <input type="number" placeholder={countAdult} className="inputBtn"/>
                                <button onClick={()=>setCountAdult(countAdult+1)} className="addBtn">+</button>
                            </div>
                            <p>Хүүхэд*</p>
                            <div style={{marginLeft:'10px'}}>
                                <button onClick={()=>setCountChild(countChild-1)} className="addBtn">-</button>
                                <input type="number" placeholder={countChild} className="inputBtn"/>
                                <button onClick={()=>setCountChild(countChild+1)} className="addBtn">+</button>
                            </div>
                            <p>Цагаа сонгоно уу?*</p>
                                <div className=".grid-container">
                                    {times.map(time => (
                                        <button className={ active===time ? 'active1 timeBtn' : 'timeBtn'} onClick={() => {setActive(time)}}>
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            <div className="formBtn">
                                <Link className="formBtnLink" to="/table" onClick={()=>{console.log("inputValue", inputValue)
                                    if(Object.keys(inputValue).length===0 || Object.keys(inputValue).length<2)
                                        { alert('Buren buglu')}
                                        if(inputValue.Phone.length===8){console.log("Utas Bolson")} else {alert("Utas zuw buglu")}
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
                                <Link className="formBtnLink" to="/movie" > Буцах</Link>
                            </div>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;



        
        
