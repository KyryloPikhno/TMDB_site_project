import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";
import {MoviesCarousel} from "../MoviesCarousel/MoviesCarousel";
import {movieActions} from "../../redux/slices";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {
    const {page: currentPage} = useParams()

    const [page, setPage] = useState(currentPage);

    const {movies} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const totalPages = movies.total_pages

    useEffect(() => {
        navigate(`/all_movies/page=${page}`)
        dispatch(movieActions.getAll({page}))
        window.scrollTo(0, 0);
    }, [dispatch, page]);

    return (
        <div className={css.wrap}>
            <div className={css.carouselContainer}>
                <MoviesCarousel/>
            </div>
            {movies.results && <div className={css.container}>
                {movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
                <PaginationForMovies totalPages={totalPages} setPage={setPage}/>
            </div>}
        </div>
    );
};

export {Movies};