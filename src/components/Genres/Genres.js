import {useDispatch, useSelector,} from "react-redux";
import {genreActions} from "../../redux/slices/genre.slice";
import {Genre} from "../Genre/Genre";
import {useEffect} from "react";


const Genres = () => {

    const {genres} = useSelector(state => state.genreReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])

    return (
        <div>
            {
                genres && genres.map(genre =><Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {Genres};