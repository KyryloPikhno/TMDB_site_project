import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {PaginationForMovies} from "../PaginationForMovies/PaginationForMovies";
// import {MoviesCarousel} from "../MoviesCarousel/MoviesCarousel";
import {movieActions} from "../../redux/slices";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {
    const [query] = useSearchParams({page: '1'});

    const {movies, totalPages, currentPage} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        if (!query.get('query')) {
            dispatch(movieActions.getAll({
                page: query.get('page'),
                genre: query.get('with_genres')
            }));
        } else {
            dispatch(movieActions.search({page: query.get('page'), query: query.get('query')}))
        }
    }, [query, currentPage]);

    return (
        <div className={css.wrap}>
            <div className={css.carouselContainer}>
                {/*<MoviesCarousel/>*/}
            </div>
            {movies && <div className={css.container}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>}
            <div className={css.pagination}>
                <PaginationForMovies totalPages={totalPages} currentPage={currentPage}/>
            </div>
        </div>
    );
};

export {Movies};