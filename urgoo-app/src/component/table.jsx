import { useState } from "react";
import "../App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";
  import { useMovieContext } from "../context/movieData";
import { useUserDataContext } from "../context/UserDataContext";

export const Table =()=>{
    const {movie, setMovie} = useMovieContext()
    const table = new Array(30).fill(false);
    const {userData, setuserData} = useUserDataContext()
    const [seat, setSeat] = useState([])

    const count = 0
    return(
        <div className="container">
            {console.log("userData",userData)}

            <h1>Суудал захиалга хийнэ үү</h1>
            <div className="tableGrid">
                {table.map((el, i)=>
                    <input  type="checkbox" className="tableCheck" id={i+1} onChange={(event)=>{setSeat([...seat, i+1])}}/>)}
                    {/* {console.log(input.value)} */}
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>НЭР:</p><p>{userData.Name}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>КИНОНЫ НЭР:</p><p>{movie.name}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>ҮЗВЭРИЙН ЦАГ:</p><p>{userData.Time}  PM</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>ТАСАЛБАР:</p><p>{userData.Adult + userData.Child}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>Суудал:</p>{seat.map((el)=><p>{el}</p>)}
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>ТАСАЛБАРЫН ҮНЭ:</p><p>{userData.Adult*10000 +userData.Child*5000}</p>
                </div>
                {console.log("seat",seat)}

            </div>
            <button className="billBtn">Төлбөр төлөх</button>
            <Link  className="link2" to="/form">Буцах</Link>
            {/* <button onClick={()=>{console.log("Daragdlaa",movie)}}>Буцах</button> */}
        </div>

    )
}