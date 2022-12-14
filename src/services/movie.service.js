import {axiosService} from "./axios.service";

import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (page= '1', genre) => axiosService.get(`${baseURl}${urls.movies}`,
        {
            params: {
                with_genres: genre,
                page,
            }
        }),
    search: (page, query) => axiosService.get(`${baseURl}${urls.search}`,
        {
            params: {
                query,
                page,
            }
        }),
    getTrailer: (movieId) => axiosService.get(`${baseURl}${urls.movie}/${movieId}/videos?`,
        {
            params: {}
        }),
    getPopularMovies: () => axiosService.get(`${baseURl}${urls.popularMovies}`)
};

export {movieService};