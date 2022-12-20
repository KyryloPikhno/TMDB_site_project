import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {KeepMountedModal} from "../KeepMountedModal/KeepMountedModal";
import {YouTubePlayer} from "../YouTubePlayer/YouTubePlayer";
import {movieActions, tvShowActions} from "../../redux/slices";
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
        original_name,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average,
        vote_count,
    } = state;

    const {currentTheme} = useSelector(state => state.themeReducer);

    const dispatch = useDispatch()

    const tvShowId = id.toString()

    const movieId = id.toString()

    useEffect(() => {
        if (original_name !== undefined) {
            dispatch(tvShowActions.getTrailer({id: tvShowId}))

        } else {
            dispatch(movieActions.getTrailer({id: movieId}))
        }

        window.scrollTo(0, 0);
    }, [tvShowId, movieId]);

    const {genres} = useSelector(state => state.genreReducer)

    const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item)

    return (
        <div className={currentTheme === 'dark' ? css.container : css.containerLight}>
            <div className={css.backdropBox}>
                {backdrop_path &&
                    <img className={css.backdrop} src={`${urls.image_path}${backdrop_path}`} alt={title}/>}
                <div className={css.badges}>
                    {badges && badges.map(badge => <Badge key={badge.id} badge={badge}/>)}
                </div>
            </div>
            <div className={currentTheme === 'dark' ? css.box : css.lightBox}>
                <div className={css.wrap}>
                    <KeepMountedModal poster_path={poster_path} title={title}/>
                </div>
                <div className={css.info}>
                    <h1 className={css.title}>{title}</h1>
                    <p>Original language: {original_language}</p>
                    <p>Original title: {original_title || original_name}</p>
                    <p>Release date: {release_date}</p>
                    <p>Age limit: {adult ? 'For older 18' : 'for family viewing'}</p>
                    <p>Id: {id}</p>
                    <Stars vote_average={vote_average}/>
                    <p>Popularity: {popularity}</p>
                    <p>Vote count: {vote_count}</p>
                    <p>Overview: {overview}</p>
                </div>
            </div>
            <YouTubePlayer/>
        </div>
    );
};

export {Details};