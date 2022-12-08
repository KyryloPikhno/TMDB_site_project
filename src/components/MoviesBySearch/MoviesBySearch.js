import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

// import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";
import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './MoviesBySearch.module.css';
import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";


const MoviesBySearch = () => {
    const {title, page: currentPage} = useParams();

    const {moviesBySearch} = useSelector(state => state.movieReducer);

    const [page, setPage] = useState(currentPage);

    const navigate = useNavigate()

    let totalPages = moviesBySearch.total_pages

    const dispatch = useDispatch()

    useEffect(() => {
        navigate(`/movies_with_title=${title}/page=${page}`)
        dispatch(movieActions.search({page, title}))
        window.scrollTo(0, 0);
    }, [dispatch, title, page]);

    return (
        <div className={css.container}>
            {moviesBySearch.results && moviesBySearch.results.map(movie=><Movie key={movie.id} movie={movie}/>)}
            <PaginationForMovies totalPages={totalPages} setPage={setPage}/>
        </div>
    );
};

export {MoviesBySearch};