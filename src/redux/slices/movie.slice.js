import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    trailers: {},
    popularMovies: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, genre)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(page, query)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getTrailer = createAsyncThunk(
    'movieSlice/getTrailer',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTrailer(movieId)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getPopularMovies = createAsyncThunk(
    'movieSlice/getPopularMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getPopularMovies()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages
                state.error = null
                state.loading = false
                if (action.payload.total_pages > 500) {
                    state.totalPages = 500;
                    // Because this API have error
                } else {
                    state.totalPages = action.payload.total_pages;
                }
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(search.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages
                state.error = null
                state.loading = false
            })
            .addCase(search.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(search.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getTrailer.fulfilled, (state, action) => {
                state.trailers = action.payload
                state.error = null
                state.loading = false
            })
            .addCase(getTrailer.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getTrailer.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.popularMovies = action.payload.results
                state.error = null
                state.loading = false
            })
            .addCase(getPopularMovies.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getPopularMovies.pending, (state) => {
                state.loading = true
                state.error = null
            })
});

const {reducer: movieReducer, actions:{getPage}} = movieSlice;

const movieActions ={
    getAll,
    search,
    getPage,
    getTrailer,
    getPopularMovies
}

export {movieReducer, movieActions};