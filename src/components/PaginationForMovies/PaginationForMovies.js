import {useSearchParams} from "react-router-dom";
import Pagination from "@mui/material/Pagination"

import css from './PagonationForMovies.module.css'


const PaginationForMovies = ({totalPages, currentPage}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const handleChange = (e, page) => {
        e.preventDefault();

        if (query.get('query')) {
            setQuery(value => ({query: query.get('query'), page}));
        } else if (query.get('with_genres')) {
            setQuery(value => ({
                page,
                with_genres: query.get('with_genres').toString()
            }));
        } else {
            setQuery(value => ({page}));
        }
        window.scrollTo(0, 0);
    };

    return (
        <div className={css.container}>
            <Pagination count={totalPages} color="standard" onChange={handleChange} page={currentPage}></Pagination>
        </div>
    );
};

export {PaginationForMovies};