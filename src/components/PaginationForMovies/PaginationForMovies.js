import Pagination from "@mui/material/Pagination"

import css from './PagonationForMovies.module.css'
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import useLocalStorage from "use-local-storage";


const PaginationForMovies = ({totalPages}) => {

    let [currentPage, setCurrentPage] = useLocalStorage('page',1);

    const dispatch = useDispatch()

    const handleChange = (e, page) => {
        e.preventDefault();
        dispatch(movieActions.getPage(page))

        setCurrentPage(page)
    };


    return (
        <div className={css.container}>
            <Pagination count={totalPages} color="standard" page={currentPage} onChange={handleChange}></Pagination>
        </div>
    );
};

export {PaginationForMovies};