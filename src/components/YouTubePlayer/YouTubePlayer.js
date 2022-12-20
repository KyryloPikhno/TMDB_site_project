import Youtube from 'react-youtube';

import css from './YouTubePlayer.module.css';


const YouTubePlayer = ({trailers}) => {

    return (
        <div className={css.trailer_wrapper}>
            {trailers.results && trailers.results.length !== 0 && <Youtube videoId={trailers.results[0].key} opts={
                {
                    width: '1200px',
                    height: '676px',
                    playerVars: {
                        autoplay: 1,
                        // controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                    }
                }}/>}
        </div>
    )

}

export {YouTubePlayer}