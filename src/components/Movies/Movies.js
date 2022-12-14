import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";
import {movieActions} from "../../redux/slices";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {
    const [query, setQuery] = useSearchParams({page:'1'});

    const {movies} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch();

    const totalPages = movies.total_pages

    useEffect(() => {
        if (!query.get('query')) {
            dispatch(movieActions.getAll({
                page: query.get('page'),
                genre: query.get('with_genres')
            }));
        } else {
            dispatch(movieActions.search({page: query.get('page'), query: query.get('query')}))
        }
    }, [query]);


    // useEffect(() => {
    //     dispatch(movieActions.getAll({page:query.get('page')}))
    // }, [dispatch,query]);

    return (
        <div className={css.wrap}>
            <div className={css.carouselContainer}>
                {/*<MoviesCarousel/>*/}
            </div>
            {movies.results && <div className={css.container}>
                {movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
                <PaginationForMovies totalPages={totalPages} setQuery={setQuery}/>
            </div>}
        </div>
    );
};

export {Movies};