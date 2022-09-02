import "../App.css"
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import { useMovieContext } from "../context/movieData";
import img from "./noImage.jpg";

export const  MovieInfo =()=>{
    const {movie, setMovie} = useMovieContext()
    console.log("movie2", movie);
    return(
        <div className="container">
            <div className="infoContainer">
                <div className="infoTitle">
                  {movie ? <img src={movie.profile} alt="" className="infoImage" /> : <img src={img} alt="" className="infoImage" />}  
                </div>
                <div className="infoTitle">
                    {movie ? <p>Дэлгэцнээ гарах:{movie.date}</p> : <p>Дэлгэцнээ гарах: </p>}
                    {/* <p>Дэлгэцнээ гарах:{movie.date}</p> */}
                    {movie ? <p>{movie.age} | {movie.time}</p> : <p>none</p>}

                    {/* <p>
                        {movie.age} | {movie.time}
                    </p> */}
                    {movie ? <p>Мэдээлэл: {movie.information}</p> : <p>Мэдээлэл: </p>}

                    {/* <p>
                        Мэдээлэл: {movie.information}
                    </p> */}
                    <div>
                        <Link state={movie.state} className="link2" to="/form">Захиалга</Link>
                        <Link className="link2" to="/Home"> Буцах</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}