import {NavLink} from "react-router-dom";

import css from './Genre.module.css'


const Genre = ({genre}) => {


    const genreName = genre.name.split(" ").join("")
    const genreId = genre.id.toString()

    return (
        <NavLink className={css.box} to={`/movies_with_genre=${genreName}/${genreId}`}>
            <div>{genre.name}</div>
        </NavLink>
    );
};

export {Genre};