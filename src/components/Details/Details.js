import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import Youtube from 'react-youtube';

import {movieActions} from "../../redux/slices";
import {Badge} from "../Badge/Badge";
import {Stars} from "../Stars/Stars";
import {urls} from "../../configs";
import css from './Details.module.css';


const Details = () => {
    const {state} = useLocation()

    const {
        adult,
        backdrop_path,
        id,
        genre_ids,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average,
        vote_count,
    } = state;

    const {trailers} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    const movieId = id.toString()

    useEffect(() => {
        dispatch(movieActions.getTrailer({movieId}))
        window.scrollTo(0, 0);
    }, [movieId])

    const {genres} = useSelector(state => state.genreReducer)

    const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item)

    return (
        <div className={css.container}>
            <div className={css.backdropBox}>
                {backdrop_path &&
                    <img className={css.backdrop} src={`${urls.image_path}${backdrop_path}`} alt={title}/>}
                <div className={css.badges}>
                    {badges && badges.map(badge => <Badge key={badge.id} badge={badge}/>)}
                </div>
            </div>
            <div className={css.box}>
                <div className={css.wrap}>
                    {poster_path && <img className={css.poster} src={`${urls.image_path}${poster_path}`} alt={title}/>}
                </div>
                <div className={css.info}>
                    <h1 className={css.title}>{title}</h1>
                    <p>Original language: {original_language}</p>
                    <p>Original title: {original_title}</p>
                    <p>Release date: {release_date}</p>
                    <p>Age limit: {adult ? 'For older 18' : 'for family viewing'}</p>
                    <p>Id: {id}</p>
                    <Stars vote_average={vote_average}/>
                    <p>Popularity: {popularity}</p>
                    <p>Vote count: {vote_count}</p>
                    <p>Overview: {overview}</p>
                </div>
            </div>
            <div>
                {trailers.results && trailers.results.length !== 0 && <Youtube videoId={trailers.results[0].key} opts={
                    {
                        width: '100%',
                        height: '500px',
                        playerVars: {
                            autoplay: 2,
                            controls: 0,
                            cc_load_policy: 0,
                            fs: 0,
                            iv_load_policy: 0,
                            modestbranding: 0,
                            rel: 0,
                            showinfo: 0,
                        },
                    }}/>}
            </div>
        </div>
    );
};

export {Details};