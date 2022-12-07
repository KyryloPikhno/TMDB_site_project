import {useDispatch, useSelector} from "react-redux";
import {useEffect, } from "react";
import {useNavigate, useParams} from "react-router-dom";

import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './MoviesWithGenre.module.css'
import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";
import useLocalStorage from "use-local-storage";

const MoviesWithGenre = () => {
    const {name, id} = useParams()
    const {moviesByGenre} = useSelector(state => state.movieReducer)
    let [page,setPage] = useLocalStorage('genrePage',1);

    const navigate = useNavigate();

    let totalPages = moviesByGenre.total_pages

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getByGenre({page, id}))
        navigate(`/movies_with_genre=${name}/${id}/page=${page}`)
        window.scrollTo(0, 0);
    }, [dispatch, id, page]);

    return (
        <div className={css.container}>
            {moviesByGenre.results && moviesByGenre.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <PaginationForMovies totalPages={totalPages}  setPage={setPage}/>
        </div>
    );
};

export {MoviesWithGenre};