import {Button, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../redux/slices/genre.slice";



const Genre = ({genre}) => {

    const {currentGenre} = useSelector(state => state.genreReducer)

    const dispatch = useDispatch()


    return (
        <Stack direction="row" spacing={2}>
            <Button onClick={()=>dispatch(genreActions.getCurrentGenre(genre))}>{genre.name}</Button>
        </Stack>
    );
};

export {Genre};