import {NavLink} from "react-router-dom";

import css from './LinkButton.module.css'


const LinkButton = () => {

    return (
        <div className={css.container}>
            <NavLink to={'/all_movies'}>Movies</NavLink>
            <hr/>
            <NavLink to={'/all_TV-shows'}>TV shows</NavLink>
        </div>
    );
};


export {LinkButton};