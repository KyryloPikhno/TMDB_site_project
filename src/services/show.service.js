import {axiosService} from "./axios.service";

import {baseURl, urls} from "../configs";


const showService = {
    getAll: (page = '1', genre) => axiosService.get(`${baseURl}${urls.shows}`,
        {
            params: {
                with_genres: genre,
                page,
            }
        }),
    search: (page, query) => axiosService.get(`${baseURl}${urls.searchTV}`,
        {
            params: {
                query,
                page,
            }
        })
};


export {showService};