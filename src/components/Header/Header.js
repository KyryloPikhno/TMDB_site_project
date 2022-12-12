import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {movieActions} from "../../redux/slices";
import {SearchForm} from "../SearchForm/SearchForm";
import {Genres} from "../Genres/Genres";
import css from './Header.module.css'


const Header = () => {
    const navigate = useNavigate()

    const {currentTheme} = useSelector(state => state.themeReducer);

    const dispatch = useDispatch()

    const returner = () => {
        const page = 1
        dispatch(movieActions.getAll({page}))
        navigate(`/all_movies/page=${page}`)
    }

    return (
        <div className={currentTheme === 'dark'? css.header : css.lightHeader}>
            <div className={css.imgBox} onClick={returner}>
                <img className={css.img}
                     src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png"
                     alt="logo_movie"/>
            </div>
            <div>
                <SearchForm/>
            </div>
            <div>
                <Genres/>
            </div>
            <div>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export {Header};