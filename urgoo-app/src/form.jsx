import "./App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
    useNavigate,
    Navigate
  } from "react-router-dom";
  import { useState } from "react";
  import { useMovieContext } from "./movieData";
const Form =()=>{
    const {movie, setMovie} = useMovieContext()
    // let location = useLocation();
    const [inputValue, setInputValue] = useState({});
    const [countMan, setCountMan] = useState(0)
    const [countChild, setCountChild] = useState(0)

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
                            <input onChange={(event) => setInputValue({...inputValue, 'Нэр':event.target.value})} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="text" placeholder="Firstname"/>
                            <input onChange={(event) => setInputValue({...inputValue, 'Утас':event.target.value})} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="number" placeholder="Phone"/>
                            <input onChange={(event) => setInputValue({...inputValue, 'email':event.target.value})} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="email" placeholder="me@example.com" required/>
                            <p>Том хүн*</p>
                            <div style={{marginLeft:'10px'}}>
                                <button onClick={()=>setCountMan(countMan-1)} className="addBtn">-</button>
                                <input type="number" placeholder={countMan} className="inputBtn"/>
                                <button onClick={()=>setCountMan(countMan+1)} className="addBtn">+</button>
                            </div>
                            <p>Хүүхэд*</p>
                            <div style={{marginLeft:'10px'}}>
                                <button onClick={()=>setCountChild(countChild-1)} className="addBtn">-</button>
                                <input type="number" placeholder={countChild} className="inputBtn"/>
                                <button onClick={()=>setCountChild(countChild+1)} className="addBtn">+</button>
                            </div>
                            <p>Цагаа сонгоно уу?*</p>
                                <div className=".grid-container">
                                    <button className="timeBtn">12:50</button>
                                    <button className="timeBtn">2:10</button>
                                    <button className="timeBtn">3:55</button>
                                    <button className="timeBtn">6:10</button>


                                </div>
                            <input className="link2" onClick={()=> {
                                if(Object.keys(inputValue).length===0 || Object.keys(inputValue).length<3)
                                    { alert('Buren buglu')}
                                    if(inputValue.Phone.length===8){console.log("Utas Bolson")} else {alert("Utas zuw buglu")}
                                            if(inputValue.email.indexOf("@")<1 || (inputValue.email.indexOf(".") - inputValue.email.indexOf("@") <2)){alert("email zuw buglu")}
                                            }} style={{width:'200px', height:'30px', borderRadius:'50px', border:'1px solid black', margin:'10px'}} type="submit"/>
                            
                            {/* <Navigate to='/table'>Үргэлжлүүлнэ</Navigate> */}
                            <Link className="link2" to="/movie"> Буцах</Link>
                            
                        </div>
                        <div>
                            <Link to="/table">Үргэлжлүүлнэ үү</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;



        
        
