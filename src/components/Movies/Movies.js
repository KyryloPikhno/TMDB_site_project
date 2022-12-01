import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {

    const {currentGenre} = useSelector(state =>  state.genreReducer)
    // const {movies} = useSelector(state => state.movieReducer)

    const [movies, setMovies] = useState([])
    const [genreName, setGenreName] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        // if (currentGenre) {
        //     console.log(currentGenre);
        //
        //     setGenreName(currentGenre.name)
        //
        //     dispatch(movieActions.getByGenre({genreName})).then(({payload})=>setMovies(payload))
        // } else {
        //     dispatch(movieActions.getAll()).then(({payload})=>setMovies(payload))
        // }

            console.log(currentGenre);

            setGenreName(currentGenre?.name)

            dispatch(movieActions.getByGenre({genreName})).then(({payload})=>setMovies(payload))

    }, [dispatch, currentGenre]);

    // console.log(movies);


    // console.log(currentGenre);

    return (
        <div className={css.container}>
            {movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};