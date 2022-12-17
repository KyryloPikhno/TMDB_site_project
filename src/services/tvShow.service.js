import {axiosService} from "./axios.service";

import {baseURl, urls} from "../configs";


const tvShowService = {
    getAll: (page = '1', genre,sort) => axiosService.get(`${baseURl}${urls.shows}`,
        {
            params: {
                with_genres: genre,
                sort_by: sort,
                page,
            }
        }),
    search: (page, query) => axiosService.get(`${baseURl}${urls.searchTV}`,
        {
            params: {
                query,
                page,
            }
        }),
    // getTrailer: (id) => axiosService.get(`${baseURl}${urls.movie}/${id}/videos?`,
    //     {
    //         params: {}
    //     }),
};


export {tvShowService};