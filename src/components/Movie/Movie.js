import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {genreActions} from "../../redux/slices/genre.slice";
import {Badge} from "../Badge/Badge";
import css from './Movie.module.css'


const Movie = ({movie}) => {
    const [genres, setGenres] = useState([])

    const {id, title, vote_average, poster_path, genre_ids} = movie

    const image_path = 'https://image.tmdb.org/t/p/w500'

    const currentTheme = undefined

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll()).then(({payload}) => setGenres(payload.genres))
        console.log(badges);
    }, [dispatch]);

    const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)

    return (
        <div className={currentTheme === 'dark' ? css.card : css.lightCard}>
            <div>
                {badges && badges.map((badge, index) => <Badge key={index} badge={badge}/>)}
            </div>
            <div>
                {poster_path && <img className={css.img} src={`${image_path}${poster_path}`} alt={title}/>}
            </div>
            <div className={css.title}>
                {title}
            </div>
        </div>
    );
};

export {Movie};