import {axiosService} from "./axios.service";
import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (genre='') => axiosService.get(`${baseURl}${urls.movies}`, {
        params: {
             with_genres: genre
        }
    })
};

export {movieService};