import {Genres} from "../Genres/Genres";
import css from './Header.module.css'

const Header = () => {


    return (
        <div className={css.header}>
            Header
            <div className={css.containerForGenre}>
                <h3>GENRES</h3>
                <Genres/>
            </div>
        </div>
    );
};

export {Header};