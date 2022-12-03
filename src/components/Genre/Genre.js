import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {genreActions} from "../../redux/slices/genre.slice";
import css from './Genre.module.css'


const Genre = ({genre}) => {
    const dispatch = useDispatch()

    const genreName = genre.name.split(" ").join("")

    return (
        <NavLink className={css.box} to={`/movies_with_genre=${genreName}`}>
            <div onClick={()=>dispatch(genreActions.getCurrentGenre(genre))}>{genre.name}</div>
        </NavLink>
    );
};

export {Genre};