import {axiosService} from "./axios.service";
import {baseURl, urls} from "../configs";


const movieService = {
    getAll: () => axiosService.get(`${baseURl}${urls.movies}`)
};

export {movieService};