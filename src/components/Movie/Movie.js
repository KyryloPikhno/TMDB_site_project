import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Badge} from "../Badge/Badge";
import css from './Movie.module.css'
import {Stars} from "../Stars/Stars";


const Movie = ({movie}) => {
    const {genres}= useSelector(state=>state.genreReducer)

    const {id, title, vote_average, poster_path, genre_ids} = movie

    const image_path = 'https://image.tmdb.org/t/p/w500'

    const dispatch = useDispatch()

        const badges = genres.filter(genre => genre_ids.includes(genre.id)).map(value => value.name)

    return (
        <div className={css.card}>
            <div>
                {badges && badges.map((badge, index) => <Badge key={index} badge={badge}/>)}
            </div>
            <div>
                {poster_path && <img className={css.img} src={`${image_path}${poster_path}`} alt={title}/>}
            </div>
            <div className={css.title}>
                {title}
            </div>
            <div className={css.stars}>
                <Stars  vote_average={vote_average}/>
            </div>
        </div>
    );
};

export {Movie};