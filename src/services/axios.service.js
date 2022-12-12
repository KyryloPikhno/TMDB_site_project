import axios from "axios";

import {baseURl} from "../configs";


const _accessTokenKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDZmNTMyOGVhYjMwN2I3MTM5MjNmZTUzYzU5MjU2OSIsInN1YiI6IjYzNGFiZTM0MTA4OWJhMDA3ZDUzODY4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ACz4f6I94aAvceySLFzh9mH4Asy4rutGDbrOl1qbDtE';

const axiosService = axios.create({
     baseURl: baseURl
});

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${_accessTokenKey}`

    return config
});

export {axiosService};