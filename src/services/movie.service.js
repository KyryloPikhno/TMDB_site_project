import {axiosService} from "./axios.service";

import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (page = '1', genre, sort) => axiosService.get(`${baseURl}${urls.movies}`,
        {
            params: {
                page,
                with_genres: genre,
                sort_by: sort,
            }
        }),
    search: (page, query) => axiosService.get(`${baseURl}${urls.search}`,
        {
            params: {
                query,
                page
            }
        }),
    getTrailer: (movieId) => axiosService.get(`${baseURl}${urls.movie}/${movieId}/videos`,
        {
            params: {}
        }),
    getSimilar: (id) => axiosService.get(`${baseURl}${urls.movie}/${id}/similar`)
};


export {movieService};