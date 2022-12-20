import {useDispatch, useSelector} from "react-redux";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
import {orange} from "@mui/material/colors";

import {movieActions, tvShowActions} from "../../redux/slices";
import {Card} from "../Card/Card";
import css from './MoviesAndShowsCarousel.module.css'


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
        dispatch(movieActions.getSimilarMovies({id}))

        dispatch(tvShowActions.getSimilarTvShows({id}))
    }, [id, dispatch]);

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