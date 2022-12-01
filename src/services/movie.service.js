import {axiosService} from "./axios.service";
import {baseURl, urls} from "../configs";


const movieService = {
    getAll: (name) => axiosService.get(`${baseURl}${urls.movies}`, {
        params: {
            with_genres: name
        }
    })
};

export {movieService};