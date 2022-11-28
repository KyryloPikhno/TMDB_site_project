import {useDispatch, } from "react-redux";
import {genreActions} from "../../redux/slices/genre.slice";
import {Genre} from "../Genre/Genre";
import {useEffect, useState} from "react";


const Genres = () => {

    const [genres, setGenres] = useState([])

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(genreActions.getAll()).then(({payload})=>setGenres(payload.genres))
    },[])

    // console.log(genres);

    return (
        <div>
            {
                genres && genres.map(genre =><Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {Genres};