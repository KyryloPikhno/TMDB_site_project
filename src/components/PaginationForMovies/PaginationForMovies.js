import Pagination from "@mui/material/Pagination"

import css from './PagonationForMovies.module.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";


const PaginationForMovies = ({setCurrentPage,totalPages}) => {


    const {page} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    const handleChange = (e, page) => {
        e.preventDefault();
        dispatch(movieActions.getPage(page))

        setCurrentPage(page)
    };

    return (
        <div className={css.container}>
            <Pagination count={totalPages} color="standard" onChange={handleChange}></Pagination>
        </div>
    );
};

export {PaginationForMovies};