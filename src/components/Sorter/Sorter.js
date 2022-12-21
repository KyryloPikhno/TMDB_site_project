import {createSearchParams, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

import css from './Sorter.module.css'


const Sorter = () => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    const navigate = useNavigate()

    const location = useLocation()

    const currentPath = '/' + location.pathname.split('/')[1]

    const sorter = (value) => {
        navigate({
            pathname: currentPath,
            search: createSearchParams({
                page: '1',
                sort_by: value,
            }).toString()
        });
    };

    return (
        <div className={currentTheme === 'dark' ? css.container : css.lightContainer}>
            <button onClick={() => sorter('vote_average.desc')}>Vote average</button>
            <button onClick={() => sorter('first_air_date.desc')}>First air date</button>
            <button onClick={() => sorter('popularity.desc')}>Popularity</button>
        </div>
    );
};


export {Sorter};