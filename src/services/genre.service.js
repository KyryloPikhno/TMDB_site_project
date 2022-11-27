import {axiosService} from "./axios.service";
import {baseURl, urls} from "../configs";

const genreService = {
    getAll:()=>axiosService.get(`${baseURl}${urls.genres}`)
}

export {genreService}