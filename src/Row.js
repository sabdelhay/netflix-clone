import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargRow})=> {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condtion
    useEffect(()=>{
        // if [] is empty, run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    //console.log(movies);

    return (
        <div className="row">
            {/* title*/}
            <h2>{title}</h2>
            {/* container -> posters*/}
            <div className="row__posters">
                {/* several row__poster */}
                {movies.map(movie =>(
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
