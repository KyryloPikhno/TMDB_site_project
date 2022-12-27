import {useSearchParams} from "react-router-dom";
import Pagination from "@mui/material/Pagination"

import css from './PaginationMain.module.css'


const PaginationMain = ({totalPages, currentPage}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const handleChange = (e, page) => {
        e.preventDefault();

        if (query.get('query')) {
            setQuery(() => ({query: query.get('query'), page}));
        } else if (query.get('with_genres')) {
            setQuery(() => ({
                page,
                with_genres: query.get('with_genres').toString(),
            }));
        } else if (query.get('sort_by')) {
            setQuery(() => ({
                page,
                sort_by: query.get('sort_by')
            }));
        } else {
            setQuery(() => ({
                page,
            }));
        }
        window.scrollTo(0, 0);
    };

    return (
        <div className={css.container}>
            <Pagination count={totalPages} color="standard" onChange={handleChange} page={currentPage}></Pagination>
        </div>
    );
};

export {PaginationMain};