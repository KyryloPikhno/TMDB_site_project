import {axiosService} from "./axios.service";

const genreService = {
    getAll:()=>axiosService.get(urls.genres)
}