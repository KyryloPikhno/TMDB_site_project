import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genreActions} from "../../redux/slices/genre.slice";
import {Genre} from "../Genre/Genre";

const Header = () => {
    const [genres, setGenres] = useState([])

    const {currentGenre} = useSelector(state=>state.genreReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(genreActions.getAll()).then(({payload})=>setGenres(payload.genres))
    },[])

    return (
        <div>
            {
                genres && genres.map(genre =><Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {Header};