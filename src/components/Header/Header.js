import {Genres} from "../Genres/Genres";
import {SearchForm} from "../SearchForm/SearchForm";
import css from './Header.module.css'


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