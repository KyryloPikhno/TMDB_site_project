import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

import {Badge} from "../Badge/Badge";
import {Stars} from "../Stars/Stars";
import {urls} from "../../configs";
import css from './Card.module.css'


const Card = ({value}) => {
    const {genres} = useSelector(state => state.genreReducer)

    const {currentTheme} = useSelector(state => state.themeReducer);

    const location = useLocation()

    const currentPath = '/' + location.pathname.split('/')[1]

    const {id, title, name, vote_average, poster_path, genre_ids} = value

    const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(value => value)

    return (
        <Link className={currentTheme === 'dark' ? css.card : css.lightCard}
              to={`${currentPath}/detailed_info_with_id=${id}`} state={{...value}}>
            <div className={css.badgeContainer}>
                {badges && badges.map(badge => <Badge key={badge.id} badge={badge}/>)}
            </div>
            <div className={css.imgBox}>
                {poster_path && <img className={css.img} src={`${urls.image_path}${poster_path}`} alt={title}/>}
            </div>
            <div className={css.title}>
                {title || name}
            </div>
            <div>
                <Stars vote_average={vote_average}/>
            </div>
        </Link>
    );
};


export {Card};