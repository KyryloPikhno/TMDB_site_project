import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genre.slice";

const Header = () => {

    const {genres} = useSelector(state=>state.genreReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch,genres])

    return (
        <div>
            {
                genres && genres.map(genre =><div>{'hi'}</div>)
            }
        </div>
    );
};

export {Header};