import { createContext, useState, useContext } from "react";
// import movieData from "./data/urgoo.json";

const MovieContext = createContext()
export const MovieProvider = (props)=>{
    const {children} = props;
    const [movie, setMovie] = useState()
    return(
        <MovieContext.Provider value={{movie, setMovie}}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext =()=>useContext(MovieContext)