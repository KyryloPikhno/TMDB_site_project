import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {PaginationMain} from "../PaginationMain/PaginationMain";
import {movieActions} from "../../redux/slices";
import {LinkButton} from "../LinkButton/LinkButton";
import {SkeletonUI} from "../SkeletonUI/SkeletonUI";
import {Card} from "../Card/Card";
import css from './Movies.module.css'


const Movies = () => {
    const [query] = useSearchParams({page: '1'});

    const {movies, totalPages, currentPage, loading, error} = useSelector(state => state.movieReducer)

    const {currentTheme} = useSelector(state => state.themeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (query.get('sort_by')) {
            dispatch(movieActions.getAll({
                page: query.get('page'),
                sort: query.get('sort_by')
            }));
        }
        if (!query.get('query') && !query.get('sort_by')) {
            dispatch(movieActions.getAll({
                page: query.get('page'),
                genre: query.get('with_genres'),
            }));
        } else {
            dispatch(movieActions.search({
                page: query.get('page'),
                query: query.get('query'),
            }))
        }
    }, [query, currentPage]);

    return (
        <div className={currentTheme === 'dark' ? css.wrap : css.lightWrap}>
            <LinkButton/>
            {
                loading ?
                    <div className={css.wrapper}>
                        <SkeletonUI/>
                    </div>
                    :
                    <div className={css.wrapper}>
                        {movies && <div className={css.container}>
                            {movies && movies.map(value => <Card key={value.id} value={value}/>)}
                        </div>}
                        <div className={css.pagination}>
                            <PaginationMain totalPages={totalPages} currentPage={currentPage}/>
                        </div>
                    </div>
            }
        </div>
    );
};


export {Movies};