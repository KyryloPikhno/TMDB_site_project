import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movie.slice";




const MoviesCarousel = () => {
    const {popularMovies} = useSelector(state => state.movieReducer)

    console.log(popularMovies);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getPopularMovies())
    }, [dispatch])



    return (


                 <div>

                 </div>

    );
};

export {MoviesCarousel};