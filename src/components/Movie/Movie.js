const Movie = ({movie}) => {

    const{id, title, vote_average, poster_path, genre_ids} = movie

    const image_path = 'https://image.tmdb.org/t/p/w500'

    return (
        <div>
        <div>
            {poster_path && <img src={`${image_path}${poster_path}`} alt={title}/>}
        </div>
    <div>
        {title}
    </div>
        </div>
    );
};

export {Movie};