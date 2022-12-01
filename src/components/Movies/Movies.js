import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {

    const {currentGenre} = useSelector(state =>  state.genreReducer)
    const {movies} = useSelector(state => state.movieReducer)

    // const [filter, setFilter] = useState([])
    // const [query, setQuery] = useSearchParams();

    const dispatch = useDispatch()

    useEffect(() => {
        if (currentGenre) {
            const name = currentGenre.name
            dispatch(movieActions.getAll({name}))
        } else {
            dispatch(movieActions.getAll())
        }
    }, [dispatch, currentGenre]);

    // console.log(movies);


    // console.log(currentGenre);

    return (
        <div className={css.container}>
            {movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};