import {createSearchParams, useLocation, useNavigate} from "react-router-dom";

import css from './Badge.module.css';


const Badge = ({badge}) => {
    const navigate = useNavigate()

    const location = useLocation()

    const currentPath = '/' + location.pathname.split('/')[1]

    const linker = (id) => {
        navigate({
            pathname: currentPath,
            search: createSearchParams({
                page: '1',
                with_genres: id
            }).toString()
        });
    };

    return (
        <div className={css.badge} onClick={() => linker(badge.id)}>
            {badge.name}
        </div>
    );
};

export {Badge};