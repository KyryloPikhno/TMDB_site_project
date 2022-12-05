import {useLocation} from "react-router-dom";
import css from './Details.module.css'
import {urls} from "../../configs";
import {Stars} from "../Stars/Stars";


const Details = () => {

const {state} = useLocation()

    const {
        adult,
        backdrop_path,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        vote_average,
        vote_count
    } = state;

    return (
        <div className={css.container}>
            {backdrop_path && <img  className={css.backdrop} src={`${urls.image_path}${backdrop_path}`} alt={title}/>}
            <div className={ css.box}>
                {/*<div className={css.wrap}>*/}
                {/*    <PosterPreview visible={modal} setVisible={setModal}>*/}
                {/*        {poster_path && <img className={css.poster} onClick={()=>setModal(true)} src={`${urls.image_path}${poster_path}`} alt={title}/>}*/}
                {/*    </PosterPreview>*/}
                {/*</div>*/}
                <div className={  css.info}>
                    <h1 className={css.title}>{title}</h1>
                    <p>Original language: {original_language}</p>
                    <p>Original title: {original_title}</p>
                    <p>Release date: {release_date}</p>
                    <p>Age limit: {adult? 'For older 18':'for family viewing'}</p>
                    <p>Id: {id}</p>
                    <Stars  vote_average={vote_average}/>
                    <p>Popularity: {popularity}</p>
                    <p>Vote count: {vote_count}</p>
                    <p>Overview: {overview}</p>
                    <div className={css.badges}>
                        {/*{badge && badge.map((genre, index)=> <Badge key={index} genre={genre}/>)}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Details};