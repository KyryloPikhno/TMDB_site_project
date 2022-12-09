import {useDispatch, useSelector,} from "react-redux";
import {genreActions} from "../../redux/slices/genre.slice";
import {Genre} from "../Genre/Genre";
import {useEffect} from "react";
import css from './Genres.module.css'

const Genres = () => {

    const {genres} = useSelector(state => state.genreReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])

    return (
        <div className={css.containerForGenre}>
            <h3>GENRES</h3>
            {genres && genres.map(genre =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};