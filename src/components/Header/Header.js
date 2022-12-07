import {Genres} from "../Genres/Genres";
import {SearchForm} from "../SearchForm/SearchForm";
import css from './Header.module.css'


const Header = () => {

    // const navigate = useNavigate()

    return (
        <div className={css.header}>
            <div>
                <img className={css.img}  src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png" alt="logo_movie"/>
            </div>
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