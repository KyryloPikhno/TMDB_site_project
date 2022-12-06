import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {movieActions} from "../../redux/slices/movie.slice";
import Slider from "react-slick";


import {Movie} from "../Movie/Movie";



const MoviesCarousel = () => {
    const {popularMovies} = useSelector(state => state.movieReducer)

    console.log(popularMovies);

    const dispatch = useDispatch()
    const slider = useRef();

    useEffect(() => {
        dispatch(movieActions.getPopularMovies())
    }, [dispatch])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        ]
    };

    return (
        <Slider ref={slider} {...settings}>
            {popularMovies.results &&  popularMovies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </Slider>
    );
};

export {MoviesCarousel};