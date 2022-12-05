import {useSelector} from "react-redux";

import {Badge} from "../Badge/Badge";
import css from './Movie.module.css'
import {Stars} from "../Stars/Stars";
import {Link} from "react-router-dom";


const Movie = ({movie}) => {
    const {genres} = useSelector(state => state.genreReducer)

    const {id, title, vote_average, poster_path, genre_ids} = movie

    const image_path = 'https://image.tmdb.org/t/p/w500'

    const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(value => value.name)

    return (
        <Link to={`detailed_info_with_id=${id}`}>
            <div className={css.card}>
                <div className={css.badgeContainer}>
                    {badges && badges.map((badge, index) => <Badge key={index} badge={badge}/>)}
                </div>
                <div className={css.imgBox}>
                    {poster_path && <img className={css.img} src={`${image_path}${poster_path}`} alt={title}/>}
                </div>
                <div className={css.title}>
                    {title}
                </div>
                <div className={css.stars}>
                    <Stars vote_average={vote_average}/>
                </div>
            </div>
        </Link>
    );
};

export {Movie};