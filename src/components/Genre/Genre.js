import {NavLink, useParams} from "react-router-dom";

import css from './Genre.module.css'


const Genre = ({genre}) => {

    console.log(useParams());

    const genreName = genre.name.split(" ").join("")
    const genreId = genre.id.toString()

    return (
        <NavLink className={css.box} to={`/movies_with_genre=${genreName}/${genreId}/page=1`}>
            <div>{genre.name}</div>
        </NavLink>
    );
};

export {Genre};