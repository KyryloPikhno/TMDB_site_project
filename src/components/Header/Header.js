import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {SearchForm} from "../SearchForm/SearchForm";
import {Sorter} from "../Sorter/Sorter";
import {Genres} from "../Genres/Genres";
import css from './Header.module.css'


const Header = ({setVisible}) => {
    const navigate = useNavigate()

    const {currentTheme} = useSelector(state => state.themeReducer);

    const returner = () => {
        navigate(`/all_movies?page=1`)
        setVisible(false)
    }

    return (
        <div className={currentTheme === 'dark' ? css.header : css.lightHeader}>
            <div className={css.imgBox} onClick={returner}>
                <img className={css.img}
                     src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png"
                     alt="logo_movie"/>
            </div>
            <div>
                <SearchForm setVisible={setVisible}/>
            </div>
            <div>
                <Genres setVisible={setVisible}/>
            </div>
            <div>
                <Sorter setVisible={setVisible}/>
            </div>
            <div>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};


export {Header};