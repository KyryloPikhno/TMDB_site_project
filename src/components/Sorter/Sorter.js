import {useSearchParams} from "react-router-dom";

import css from './Sorter.module.css'


const Sorter = () => {
    const [query, setQuery] = useSearchParams();

    return (
        <div className={css.container}>
            <button onClick={() => setQuery({page: '1', sort_by: 'vote_average.desc'})}>Vote average</button>
            <button onClick={() => setQuery({page: '1',sort_by: 'first_air_date.desc'})}>First air date</button>
            <button onClick={() => setQuery({page: '1', sort_by: 'popularity.desc'})}>Popularity</button>
        </div>
    );
};

export {Sorter};