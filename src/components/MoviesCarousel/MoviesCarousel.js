import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {movieActions} from "../../redux/slices/movie.slice";
import {Movie} from "../Movie/Movie";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import css from './MoviesCarousel.module.css'
import {orange} from "@mui/material/colors";


const MoviesCarousel = () => {
    const {popularMovies} = useSelector(state => state.movieReducer)
    const carousel = useRef(null);
    console.log(popularMovies);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getPopularMovies())
    }, [dispatch])

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!popularMovies.results || !popularMovies.results.length) return null;

    return (
        <div className={css.container}>
            <button onClick={handleLeftClick}>
                <ArrowBackIosNewIcon fontSize="large" sx={{color: orange[500]}}/>
            </button>
            <div className={css.carousel} ref={carousel}>
                {popularMovies.results && popularMovies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <button onClick={handleRightClick}>
                <ArrowForwardIosIcon fontSize="large" sx={{color: orange[500]}}/>
            </button>
        </div>
    );
};

export {MoviesCarousel};