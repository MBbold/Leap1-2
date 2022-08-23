import { createContext, useState, useContext } from "react";
import movieData from "../data/urgoo.json";

const MoviesDataContext = createContext()
export const MoviesDataProvider = (props)=>{
    const {children} = props;
    const [moviesArr, setMoviesArr] = useState(movieData)
    return(
        <MoviesDataContext.Provider value={{moviesArr, setMoviesArr}}>
            {children}
        </MoviesDataContext.Provider>
    )
}

export const useMoviesDataContext =()=>useContext(MoviesDataContext)