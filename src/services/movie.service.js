import {axiosService} from "./axios.service";

import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (page, genreId) => axiosService.get(`${baseURl}${urls.movies}`,
        {
            params: {
                with_genres: genreId,
                page,
            }
        }),
    search: (page, title) => axiosService.get(`${baseURl}${urls.search}`,
        {
            params: {
                query: title,
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