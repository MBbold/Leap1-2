import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";
import { useMoviesDataContext } from "../context/moviesData";
import { useMovieContext } from "../context/movieData";
const Home = ()=>{
    const {moviesArr, setMoviesArr} = useMoviesDataContext()
    const {movie, setMovie} = useMovieContext()
    const navigate = useNavigate();
    return(
        <div className="container">
            <h1>Дэлгэцнээ гарч буй кинонууд</h1>
            <div className="grid-container">
                {/* <div className="grid-item">
                    <div className="image-div">
                        <img src="https://www.urgoo.mn/Files/FilmPosterGraphic/HO00001054.jpg" alt="" style={{width:'100%', height:'100%', objectFit:"cover"}} />
                    </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div> */}
                {moviesArr.map((el, i)=><div className="grid-item" key={i}>
                    <div className="image-div">
                        <img src={el.profile} alt="" className="img" />
                        <div className="movieTitle">
                            <p>{el.name}</p>
                            <p>{el.age}</p>
                        </div>
                        <div className="divLink">
                            {/* <Link to="/movie" className="link"> Цагийн хуваарь {'>'} Дэлгэрэнгүй </Link> */}
                            <button onClick={() => {setMovie({...el}); navigate("/movie")  }}> Цагийн хуваарь {'>'} Дэлгэрэнгүй </button>
                        </div>
                    </div>
                </div>)}
            </div>
            <Link to="/movie">Дэлгэрэнгүй</Link>
            <Link to="/">Буцах</Link>

        </div>
    )
}
export default Home