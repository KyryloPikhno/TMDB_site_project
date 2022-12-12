import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState,} from "react";

import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";
import {movieActions} from "../../redux/slices";
import {Movie} from "../Movie/Movie";
import css from './MoviesWithGenre.module.css'


const MoviesWithGenre = () => {
    const {name, id, page: currentPage} = useParams();

    const [page, setPage] = useState(currentPage);

    const {moviesByGenre} = useSelector(state => state.movieReducer)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const totalPages = moviesByGenre.total_pages

    useEffect(() => {
        dispatch(movieActions.getByGenre({page, id}))
        navigate(`/movies_with_genre=${name}/${id}/page=${page}`)
        window.scrollTo(0, 0);
    }, [dispatch, id, page]);

    return (
        <div className={css.container}>
            {moviesByGenre.results && moviesByGenre.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            {moviesByGenre.results && <PaginationForMovies totalPages={totalPages} setPage={setPage}/>}
        </div>
    );
};

export {MoviesWithGenre};