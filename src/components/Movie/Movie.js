import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";

import {Badge} from "../Badge/Badge";
import {Stars} from "../Stars/Stars";
import {urls} from "../../configs";
import css from './Movie.module.css'


const Movie = ({movie}) => {
    const {genres} = useSelector(state => state.genreReducer)

    const {id, title, vote_average, poster_path, genre_ids} = movie

    const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(value => value)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(genreActions.getCurrentGenres(badges))
    // }, [dispatch]);

    return (
        <Link to={`detailed_info_with_id=${id}`} state={{...movie}} className={css.card}>
            <div className={css.badgeContainer}>
                {badges && badges.map(badge => <Badge key={badge.id} badge={badge}/>)}
            </div>
            <div className={css.imgBox}>
                {poster_path && <img className={css.img} src={`${urls.image_path}${poster_path}`} alt={title}/>}
            </div>
            <div className={css.title}>
                {title}
            </div>
            <div className={css.stars}>
                <Stars vote_average={vote_average}/>
            </div>
        </Link>
    );
};

export {Movie};