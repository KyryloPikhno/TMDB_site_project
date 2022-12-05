import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {
    const {movies} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const page = '1'
        dispatch(movieActions.getAll({page}))
    }, [dispatch]);

    // console.log(movies);

    return (
        <div className={css.container}>
            {movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};