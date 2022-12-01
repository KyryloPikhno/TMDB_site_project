import {axiosService} from "./axios.service";
import {baseURl, urls} from "../configs";

const genreService = {
    getAll: (genreName = '') => axiosService.get(`${baseURl}${urls.genres}`, {
        params: {
            with_genres: genreName
        }
    })
};

export {genreService}