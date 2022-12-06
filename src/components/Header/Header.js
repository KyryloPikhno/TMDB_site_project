import {Genres} from "../Genres/Genres";
import {SearchForm} from "../SearchForm/SearchForm";
import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <div className={css.header}>
            <NavLink to={'/'}>
                <img className={css.img}  src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png" alt="logo"/>
            </NavLink>
            <div className={css.containerForGenre}>
                <h3>GENRES</h3>
                <Genres/>
            </div>
            <div>
                <SearchForm/>
            </div>
        </div>
    );
};

export {Header};