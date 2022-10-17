import axios from "axios";
import { useEffect, useState } from "react";

const key = "335035be";

const FilmRequest = () => {
    const [movie, setMovie] = useState();
    const [title, setTitle] = useState("Toy Story");

    useEffect(() => {
        console.log("Loaded");
        const getMovie = async () => {
            try {
                const res = await axios.get(`http://www.omdbapi.com/?apikey=${key}&t=${title}`);
                console.log("Response:", res);
                setMovie(res.data);
            } catch (err) {
                console.error(err);
            }
        }
        getMovie();
    }, [title]);

    if (movie) {
        return (
            <>
                <label>Movie Title</label>
                <input type="text" id="movieTitle" value={title} onChange={event => setTitle(event.target.value)} />
                <h2>{movie.Title}</h2>
                <img src={movie.Poster}></img>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
}

export default FilmRequest;