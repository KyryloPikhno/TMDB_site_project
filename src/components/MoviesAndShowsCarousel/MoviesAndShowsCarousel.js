import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useEffect, useRef} from "react";
import {orange} from "@mui/material/colors";

import {movieActions, tvShowActions} from "../../redux/slices";
import {Card} from "../Card/Card";
import css from './MoviesAndShowsCarousel.module.css'


const MoviesAndShowsCarousel = () => {
    const {similarMovies} = useSelector(state => state.movieReducer)

    const {similarTVShows} = useSelector(state => state.tvShowReducer)

    const {id} = useParams()

    const carousel = useRef(null);

    const location = useLocation()

    const currentPath = '/' + location.pathname.split('/')[1]

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getSimilarMovies({id}))

        dispatch(tvShowActions.getSimilarTvShows({id}))
    }, [id, dispatch, currentPath]);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!similarTVShows || !similarTVShows.length) return null;

    if (!similarMovies || !similarMovies.length) return null;

    return (
        <div>
            {currentPath === '/all_TV-shows' ?
                <div className={css.container}>
                    <button onClick={handleLeftClick}>
                        <ArrowBackIosNewIcon fontSize="large" sx={{color: orange[500]}}/>
                    </button>
                    <div className={css.carousel} ref={carousel}>
                        {similarTVShows.length !== 0 && similarTVShows.map(value => <Card key={value.id}
                                                                                          value={value}/>)}
                    </div>
                    <button onClick={handleRightClick}>
                        <ArrowForwardIosIcon fontSize="large" sx={{color: orange[500]}}/>
                    </button>
                </div>
                :
                <div className={css.container}>
                    <button onClick={handleLeftClick}>
                        <ArrowBackIosNewIcon fontSize="large" sx={{color: orange[500]}}/>
                    </button>
                    <div className={css.carousel} ref={carousel}>
                        {similarMovies && similarMovies.map(value => <Card key={value.id} value={value}/>)}
                    </div>
                    <button onClick={handleRightClick}>
                        <ArrowForwardIosIcon fontSize="large" sx={{color: orange[500]}}/>
                    </button>
                </div>}
        </div>
    );
};


export {MoviesAndShowsCarousel};