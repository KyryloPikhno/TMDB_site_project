import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './MoviesWithGenre.module.css'
import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";

const MoviesWithGenre = () => {
    const {name, id} = useParams()

    const {moviesByGenre} = useSelector(state => state.movieReducer)

    const [page, setPage] = useState(1);

    let totalPages = moviesByGenre.total_pages

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getByGenre({page, id}))
        window.scrollTo(0, 0);
    }, [dispatch, id, page]);

    return (
        <div className={css.container}>
            {moviesByGenre.results && moviesByGenre.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <PaginationForMovies totalPages={totalPages} setPage={setPage}/>
        </div>
    );
};

export {MoviesWithGenre};