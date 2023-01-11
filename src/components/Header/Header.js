import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {SearchForm} from "../SearchForm/SearchForm";
import {Sorter} from "../Sorter/Sorter";
import {Genres} from "../Genres/Genres";
import img from '../../images/gray-movie.png'
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
                     src={img}
                     alt="logo_movie"/>
            </div>
            <div className={css.searchForm}>
                <SearchForm setVisible={setVisible}/>
            </div>
            <div className={css.block}>
                <div>
                    <Genres setVisible={setVisible}/>
                </div>
                <div className={css.wrap}>
                    <div>
                        <Sorter setVisible={setVisible}/>
                    </div>
                    <div>
                        <ThemeSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export {Header};