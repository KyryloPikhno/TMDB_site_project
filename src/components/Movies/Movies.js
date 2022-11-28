import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {

    const {currentGenre} = useSelector(state => state.genreReducer)

    const [movies, setMovies] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        if (currentGenre) {
            setMovies(movies?.filter(movie => movie.genre_ids.includes(currentGenre.id)))
        } else {
            dispatch(movieActions.getAll()).then(({payload}) => setMovies(payload.results))
        }
    }, [dispatch, currentGenre]);

    console.log(movies);

    console.log(currentGenre);

    return (
        <div className={css.container}>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};