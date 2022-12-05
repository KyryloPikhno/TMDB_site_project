import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movie.slice";
import css from "../Movies/Movies.module.css";
import {Movie} from "../Movie/Movie";
import {useParams} from "react-router-dom";

const MoviesWithGenre = () => {
    const {name,id} = useParams()

    const {moviesByGenre} = useSelector(state => state.movieReducer)

    console.log(moviesByGenre);
    const dispatch = useDispatch()

    console.log(id);

    useEffect(() => {
        const page = 2
        dispatch(movieActions.getByGenre({page, id}))
    }, [dispatch,id]);

    return (
        <div className={css.container}>
            {
                moviesByGenre.results && moviesByGenre.results.map(movie =><Movie key={movie.id} movie={movie} />)
            }
        </div>
    );
};

export {MoviesWithGenre};