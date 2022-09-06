import { useState, useEffect } from "react";
import { signUp, getUserDataFromFireStore, useUpdateUserData } from "../firestore";
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
import { useSeatDataContext } from "../context/SeatContext";

export const Table =()=>{
    const {movie, setMovie} = useMovieContext()
    const table = new Array(30).fill(false);
    const {userData, setuserData} = useUserDataContext()
    const [seat, setSeat] = useState([])
    const [orderSeatData, setOrderSeatData] = useState([])
    const {UpdateData} = useUpdateUserData();
    const count = 0
    const getSeatOrderData = async ()=>{
       let seatOrderData = await getUserDataFromFireStore()
       seatOrderData = seatOrderData.map(num=> parseInt(num))
       setOrderSeatData([...seatOrderData])
    }
    // getSeatOrderData();

    useEffect(()=>{
        getSeatOrderData();
    },[])
    const inputEventHandler = (event) =>{
        const id = event.target.id;
        const isSeleced = seat.includes(id);
        if(!isSeleced){
            setSeat([...seat, id])
        }
        if(isSeleced){
            setSeat(seat.filter((el)=>el!=id))
        }
    }
    console.log("orderSeatData",orderSeatData);
    return(
        <div className="container">
            <h1>Суудал захиалга хийнэ үү</h1>
            <div className="tableGrid">
                
                {table.map((el, i)=>
                    {
                        // orderSeatData.map()
                        const isOrdered = orderSeatData.includes(i+1);
                        return <input  type="checkbox" className="tableCheck" disabled={isOrdered ? true:false} id={i+1} onChange={inputEventHandler}/>
                    }
                    )}
            </div>
            <div style={{display:'flex', flexDirection:'column', color:'white'}}>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>НЭР:</p><p>{userData.name}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>КИНОНЫ НЭР:</p><p>{movie.name}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>ҮЗВЭРИЙН ЦАГ:</p><p>{userData.Time}  PM</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>ТАСАЛБАР:</p><p>{userData.adult + userData.child}</p>
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>Суудал:</p>{seat.map((el)=><p>{el}</p>)}
                </div>
                <div style={{display:'flex'}}>
                    <p style={{fontWeight:'500'}}>ТАСАЛБАРЫН ҮНЭ:</p><p>{userData.adult*10000 +userData.child*5000}</p>
                </div>
                {console.log("seat",seat)}

            </div>
            <button onClick={()=>UpdateData()} className="billBtn">Төлбөр төлөх</button>
            <Link  className="link2" to="/form">Буцах</Link>
        </div>

    )
}