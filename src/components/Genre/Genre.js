import {useSearchParams} from "react-router-dom";
import { useSelector} from "react-redux";

import css from './Genre.module.css'


const Genre = ({genre}) => {
    const {currentTheme} = useSelector(state => state.themeReducer);

    const [query,setQuery] = useSearchParams()

    return (
        <div className={currentTheme === 'dark' ? css.box : css.lightBox}
             onClick={() => setQuery({
                 page: '1',
                 with_genres: genre.id.toString()
             })}>
            <div>{genre.name}</div>
        </div>
    );
};

export {Genre};