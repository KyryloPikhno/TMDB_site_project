import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'
import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";
import {MoviesCarousel} from "../MoviesCarousel/MoviesCarousel";
import {useNavigate} from "react-router-dom";
import useLocalStorage from "use-local-storage";


const Movies = () => {

    const [page,setPage] = useLocalStorage('page',1);
    const {movies} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let totalPages = movies.total_pages

    useEffect(() => {
        navigate(`/all_movies/page=${page}`)
        dispatch(movieActions.getAll({page}))
        window.scrollTo(0, 0);
    }, [dispatch,page]);

    return (
        <div className={css.wrap}>
            <div className={css.carouselContainer}>
                <MoviesCarousel/>
            </div>
            <div className={css.container}>
                {movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
                <PaginationForMovies totalPages={totalPages}  setPage={setPage} />
            </div>
        </div>
    );
};

export {Movies};