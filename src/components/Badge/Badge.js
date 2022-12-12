import {useNavigate} from "react-router-dom";

import css from './Badge.module.css';


const Badge = ({badge}) => {
    const genreName = badge.name.split(" ").join("")

    const genreId = badge.id.toString()

    const navigate = useNavigate()

    return (
        <div className={css.badge} onClick={() => navigate(`/movies_with_genre=${genreName}/${genreId}/page=1`)}>
            {badge.name}
        </div>
    );
};

export {Badge};