import {Genres} from "../Genres/Genres";
import css from './Header.module.css'
import {SearchForm} from "../SearchForm/SearchForm";

const Header = () => {


    return (
        <div className={css.header}>
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