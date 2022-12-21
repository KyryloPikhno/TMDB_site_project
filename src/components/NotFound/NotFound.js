import {useNavigate} from "react-router-dom";

import css from './NotFound.module.css';


const NotFound = () => {
    const navigate = useNavigate()

    const returner = () => {
        navigate(`/all_movies?page=1`)
    }

    return (
        <div className={css.container}>
            <h1>Not Found Page</h1>
            <button onClick={returner}>All movies</button>
        </div>
    );
};


export {NotFound};