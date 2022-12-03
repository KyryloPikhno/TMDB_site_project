import {axiosService} from "./axios.service";

import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (page = 1,genreName='') => axiosService.get(`${baseURl}${urls.movies}`, {params: {page, with_genres: genreName}})
};

export {movieService};