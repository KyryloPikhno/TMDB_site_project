import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import {useEffect} from "react";
import {Movie} from "../Movie/Movie";
import css from './MoviesBySearch.module.css'

const MoviesBySearch = () => {

    const {title} = useParams();

    const {moviesBySearch} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        const page = 1
        dispatch(movieActions.search({page, title}))
    }, [title]);

    console.log(moviesBySearch);
    return (
        <div className={css.container}>
            {
                moviesBySearch.results && moviesBySearch.results.map(movie=><Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {MoviesBySearch};