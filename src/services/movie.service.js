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
    search: (page, title) => axiosService.get(`${baseURl}${urls.movies}`,
        {
            params: {
                with_genres: title,
                page,
            }
        }
    )
};

export {movieService};