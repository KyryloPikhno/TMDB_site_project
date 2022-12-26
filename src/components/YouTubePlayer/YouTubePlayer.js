import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import Youtube from 'react-youtube';

import css from './YouTubePlayer.module.css';


const YouTubePlayer = () => {
    const {trailers} = useSelector(state => state.movieReducer)

    const {tvShowTrailer} = useSelector(state => state.tvShowReducer)

    const location = useLocation()

    const currentPath = '/' + location.pathname.split('/')[1]

    return (
        <div>
            {
                currentPath === '/all_TV-shows' ?
                    <div className={css.trailer_wrapper}>
                        {tvShowTrailer.results && tvShowTrailer.results.length !== 0 &&
                            <Youtube videoId={tvShowTrailer.results[0].key} opts={
                                {
                                    playerVars: {
                                        autoplay: 1,
                                        cc_load_policy: 0,
                                        fs: 0,
                                        iv_load_policy: 0,
                                        modestbranding: 0,
                                        rel: 0,
                                        showinfo: 0,
                                    }
                                }}/>}
                    </div>
                    :
                    <div className={css.trailer_wrapper}>
                        {trailers.results && trailers.results.length !== 0 &&
                            <Youtube videoId={trailers.results[0].key} opts={
                                {
                                    playerVars: {
                                        autoplay: 1,
                                        cc_load_policy: 0,
                                        fs: 0,
                                        iv_load_policy: 0,
                                        modestbranding: 0,
                                        rel: 0,
                                        showinfo: 0,
                                    }
                                }}/>}
                    </div>
            }
        </div>
    )
};


export {YouTubePlayer}