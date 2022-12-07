import Pagination from "@mui/material/Pagination"

import css from './PagonationForMovies.module.css'
import {useParams} from "react-router-dom";




const PaginationForMovies = ({setPage,totalPages}) => {

    const handleChange = (e, page) => {
        e.preventDefault();
        setPage(page)
    };

    let {page}= useParams()

    let currentPage = +page

    return (
        <div className={css.container}>
            <Pagination count={totalPages} color="standard" page={currentPage} onChange={handleChange}></Pagination>
        </div>
    );
};

export {PaginationForMovies};