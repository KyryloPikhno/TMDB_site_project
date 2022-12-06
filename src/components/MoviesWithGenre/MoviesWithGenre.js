import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from "MoviesWithGenre.module.css";


const MoviesWithGenre = () => {
    const {name,id} = useParams()

    const {moviesByGenre} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const page = 2
        dispatch(movieActions.getByGenre({page, id}))
    }, [dispatch,id]);

    return (
        <div className={css.container}>
            {moviesByGenre.results && moviesByGenre.results.map(movie =><Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export {MoviesWithGenre};