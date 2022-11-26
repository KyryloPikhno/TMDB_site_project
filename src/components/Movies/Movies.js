import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";


const Movies = () => {

    const {movies} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch,movies])

    return (
        <div>
            {
                movies.results && movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export {Movies};