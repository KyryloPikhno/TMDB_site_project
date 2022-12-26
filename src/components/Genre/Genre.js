import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import { useSelector} from "react-redux";

import css from './Genre.module.css'


const Genre = ({genre,setVisible}) => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    const navigate = useNavigate()

    const location = useLocation()

    const currentPath = '/' + location.pathname.split('/')[1]

    const linker = () => {
        navigate({
            pathname: currentPath,
            search: createSearchParams({
                page: '1',
                with_genres: genre.id
            }).toString()
        });
        setVisible(false)
    };

    return (
        <div className={currentTheme === 'dark' ? css.box : css.lightBox}
             onClick={() => linker()}>
            <div>{genre.name}</div>
        </div>
    );
};


export {Genre};