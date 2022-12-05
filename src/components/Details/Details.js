import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

import {Stars} from "../Stars/Stars";
import {Badge} from "../Badge/Badge";
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

    const {genres} = useSelector(state => state.genreReducer)

    const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item)

    const {currentGenres} = useSelector(state => state.genreReducer)
    console.log(currentGenres);

    return (

    <div className={css.container}>
        {backdrop_path && <img className={css.backdrop} src={`${urls.image_path}${backdrop_path}`} alt={title}/>}
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
                <div className={css.badges}>
                    {badges && badges.map(badge => <Badge key={badge.id} badge={badge}/>)}
                </div>
            </div>
        </div>
    </div>
    );
};

export {Details};