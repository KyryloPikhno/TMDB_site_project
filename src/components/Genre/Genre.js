import {NavLink, useParams} from "react-router-dom";

import css from './Genre.module.css'


const Genre = ({genre}) => {
    const {id, name} = genre

    const {page} = useParams()

    const genreName = name.split(" ").join("")
    const genreId = id.toString()

    return (
        <NavLink className={css.box}  to={`/movies_with_genre=${genreName}/${genreId}/page=${page}`}>
            <div>{genre.name}</div>
        </NavLink>
    );
};

export {Genre};