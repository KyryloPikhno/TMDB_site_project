import Pagination from "@mui/material/Pagination"

import css from './PagonationForMovies.module.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";


const PaginationForMovies = ({setPage,totalPages}) => {

    const {page} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    const handleChange = (e, page) => {
        setPage(page)
        dispatch(movieActions.getPage(page))
    }


    return (
        <div className={css.container}>
            <Pagination count={totalPages} color="standard" onChange={handleChange}></Pagination>
        </div>
    );
};


export {PaginationForMovies};