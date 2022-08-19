import "./App.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
    useNavigate
  } from "react-router-dom";
import { Form } from "./form";
import { useMovieContext } from "./movieData";

export const  MovieInfo =()=>{
    // let location = useLocation();
    // console.log(location)
    const {movie, setMovie} = useMovieContext()
    console.log("movie2", movie);
    return(
        <div className="container">
            <nav>

            </nav>
            
            <div className="infoContainer">
                <div className="infoTitle">
                    <img src={movie.profile} alt="" className="infoImage" />
                </div>
                <div className="infoTitle">
                    <p>Дэлгэцнээ гарах:{movie.date}</p>
                    <p>
                        {movie.age} | {movie.time}
                    </p>
                    <p>
                        Мэдээлэл: {movie.information}
                    </p>
                    <div>
                        <Link state={movie.state} className="link2" to="/form">Захиалга</Link>
                        <Link className="link2" to="/"> Буцах</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}