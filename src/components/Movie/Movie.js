import css from './Movie.module.css'

const Movie = ({movie}) => {

    const{id, title, vote_average, poster_path, genre_ids} = movie

    const image_path = 'https://image.tmdb.org/t/p/w500'

    const currentTheme = undefined

    return (
        <div className={currentTheme === 'dark'? css.card:css.lightCard}>
        <div>
            {poster_path && <img className={css.img} src={`${image_path}${poster_path}`} alt={title}/>}
        </div>
    <div className={css.title}>
        {title}
    </div>
        </div>
    );
};

export {Movie};