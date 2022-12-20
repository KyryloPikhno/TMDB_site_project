import {useDispatch, useSelector} from "react-redux";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useEffect, useRef} from "react";
import {orange} from "@mui/material/colors";

import {movieActions, tvShowActions} from "../../redux/slices";
import {Card} from "../Card/Card";
import css from './MoviesAndShowsCarousel.module.css'
import {useLocation} from "react-router-dom";


const MoviesAndShowsCarousel = ({id}) => {
    let {similarMovies} = useSelector(state => state.movieReducer)

    let {similarTVShows} = useSelector(state => state.tvShowReducer)

    console.log(similarTVShows);
    console.log(similarMovies);

    const carousel = useRef(null);

    const location = useLocation()
    const currentPath = '/' + location.pathname.split('/')[1]

    const dispatch = useDispatch()

    useEffect(() => {
        if (currentPath === '/all_movies') {
            dispatch(movieActions.getSimilarMovies({id}))
        }
        if (currentPath === '/all_TV-shows') {
            dispatch(tvShowActions.getSimilarTvShows({id}))
        }
    }, [dispatch, id]);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    console.log(currentPath);

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    // if (!similarTVShows.results || !similarTVShows.results.length) return null;
    //
    // if (!similarMovies.results || !similarMovies.results.length) return null;


    return (
        <div className={css.container}>
            <button onClick={handleLeftClick}>
                <ArrowBackIosNewIcon fontSize="large" sx={{color: orange[500]}}/>
            </button>
            <div className={css.carousel} ref={carousel}>
                {similarMovies.results && similarMovies.results.map(value => <Card key={value.id} value={value}/>)}
            </div>
            <button onClick={handleRightClick}>
                <ArrowForwardIosIcon fontSize="large" sx={{color: orange[500]}}/>
            </button>
        </div>
    );
};


export {MoviesAndShowsCarousel};