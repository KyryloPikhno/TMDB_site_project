import {axiosService} from "./axios.service";

import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (page , genreId) => axiosService.get(`${baseURl}${urls.movies}`,
        {
            params: {
                page,
                with_genres: genreId
            }
        })
};

export {movieService};