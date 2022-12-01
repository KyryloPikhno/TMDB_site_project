import {axiosService} from "./axios.service";
import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (genreName='') => axiosService.get(`${baseURl}${urls.movies}`, {
        params: {
            with_genres: genreName
        }
    })
};

export {movieService};