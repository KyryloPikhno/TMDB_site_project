import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {tvShowActions} from "../../redux/slices";
import {PaginationMain} from "../PaginationMain/PaginationMain";
import {SkeletonUI} from "../SkeletonUI/SkeletonUI";
import {Card} from "../Card/Card";
import css from './TVShows.module.css'


const TVShows = () => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    const [query] = useSearchParams({page: '1'});

    const {tvShows, totalPages, currentPage, loading, error} = useSelector(state => state.tvShowReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (query.get('sort_by')) {
            dispatch(tvShowActions.getAll({
                page: query.get('page'),
                sort: query.get('sort_by')
            }));
        }
        if (!query.get('query') && !query.get('sort_by')) {
            dispatch(tvShowActions.getAll({
                page: query.get('page'),
                genre: query.get('with_genres'),
            }));
        } else {
            dispatch(tvShowActions.search({
                page: query.get('page'),
                query: query.get('query'),
            }))
        }
    }, [query, currentPage]);

    return (
        <div className={currentTheme === 'dark' ? css.wrap : css.lightWrap}>
            {
                loading ?
                    <SkeletonUI/>
                    :
                    <div>
                        {tvShows && <div className={css.container}>
                            {tvShows && tvShows.map(value => <Card key={value.id} value={value}/>)}
                        </div>}
                    </div>
            }
            <div className={css.pagination}>
                <PaginationMain totalPages={totalPages} currentPage={currentPage}/>
            </div>
        </div>
    );
};


export {TVShows};