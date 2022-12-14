import {useDispatch, useSelector,} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux/slices";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'


const Genres = () => {
    const {genres} = useSelector(state => state.genreReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch])

    return (
        <div className={css.containerForGenre}>
            {/*{genres.length !== 0 && <h3>GENRES</h3>}*/}
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};