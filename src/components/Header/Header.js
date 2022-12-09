import {Genres} from "../Genres/Genres";
import {SearchForm} from "../SearchForm/SearchForm";
import css from './Header.module.css'
import {useNavigate} from "react-router-dom";


const Header = () => {

    const navigate = useNavigate()

    return (
        <div className={css.header}>
            <div className={css.imgBox} onClick={()=>navigate('/all_movies/page=1')}>
                <img className={css.img}  src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png" alt="logo_movie"/>
            </div>
            <div>
                <SearchForm/>
            </div>
            <div>
                <Genres/>
            </div>
        </div>
    );
};

export {Header};