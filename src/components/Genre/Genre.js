import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import {genreActions} from "../../redux/slices/genre.slice";
import css from './Genre.module.css'


const Genre = ({genre}) => {

    const dispatch = useDispatch()

    return (
        <NavLink className={css.box} to={`/movies_with_genre=${genre.name}`}>
            <button onClick={()=>dispatch(genreActions.getCurrentGenre(genre))}>{genre.name}</button>
        </NavLink>
    );
};

export {Genre};