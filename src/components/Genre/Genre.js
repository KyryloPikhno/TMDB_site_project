import {NavLink, useParams} from "react-router-dom";

import css from './Genre.module.css'
import {useSelector} from "react-redux";


const Genre = ({genre}) => {
    const {id, name} = genre

    const {currentTheme} = useSelector(state => state.themeReducer);

    const {page} = useParams()

    const genreName = name.split(" ").join("")
    const genreId = id.toString()

    return (
        <NavLink className={currentTheme === 'dark' ? css.box : css.lightBox}
                 to={`/movies_with_genre=${genreName}/${genreId}/page=${page}`}>
            <div>{genre.name}</div>
        </NavLink>
    );
};

export {Genre};