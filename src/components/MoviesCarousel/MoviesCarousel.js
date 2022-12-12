import {useDispatch, useSelector} from "react-redux";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useEffect, useRef} from "react";
import {orange} from "@mui/material/colors";

import {movieActions} from "../../redux/slices";
import {Movie} from "../Movie/Movie";
import css from './MoviesCarousel.module.css'


const MoviesCarousel = () => {
    const {popularMovies} = useSelector(state => state.movieReducer)

    const carousel = useRef(null);

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