import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {
    const [movies, setMovies] = useState([])

    // const {movies} = useSelector(state => state.movieReducer)
    //
    const {currentGenre} = useSelector(state => state.genreReducer)

    const dispatch = useDispatch()

    console.log(currentGenre);

    useEffect(() => {
        dispatch(movieActions.getAll()).then(({payload}) => setMovies(payload.results))
    }, [dispatch,movies])

    useEffect(() => {
        if (currentGenre) {
            setMovies(movies.filter(movie => movie.genre_ids.includes(currentGenre.id)))
        } else {
            dispatch(movieActions.getAll()).then(({payload}) => setMovies(payload.results))
        }
    }, [currentGenre])

    return (
        <div className={css.container}>
            {
                movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {Movies};