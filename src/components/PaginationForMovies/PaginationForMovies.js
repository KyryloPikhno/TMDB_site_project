import Pagination from "@mui/material/Pagination"

import css from './PagonationForMovies.module.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices/movie.slice";
import useLocalStorage from "use-local-storage";
import {useEffect} from "react";


const PaginationForMovies = ({page,setPage,totalPages}) => {


    // let [page, setPage] = useLocalStorage('page',1);
    // const {page} = useSelector(state => state.movieReducer);

    // console.log(page);
    // const dispatch = useDispatch()

    const handleChange = (e, page) => {
        e.preventDefault();
        // setPAge(page)
        setPage(page)
    };
    // useEffect(()=>{
    //     // dispatch(movieActions.getPage(currentPage))
    // },[])


    return (
        <div className={css.container}>
            <Pagination count={totalPages} color="standard" page={page} onChange={handleChange}></Pagination>
        </div>
    );
};

export {PaginationForMovies};