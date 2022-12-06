import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    moviesByGenre: [],
    moviesBySearch: [],
    trailers:{},
    page: 1,
    loading: false,
    error: null,
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getByGenre = createAsyncThunk(
    'movieSlice/getByGenre',
    async ({page, id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page, id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({page, title}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(page, title)
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


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getPage:(state,action)=>{
            state.page = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.moviesByGenre = []
                state.moviesBySearch = []
                state.error = null
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getByGenre.fulfilled, (state, action) => {
                state.moviesByGenre = action.payload
                state.movies = []
                state.moviesBySearch = []
                state.error = null
                state.loading = false
            })
            .addCase(getByGenre.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getByGenre.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(search.fulfilled, (state, action) => {
                state.moviesBySearch = action.payload
                state.moviesByGenre = []
                state.movies = []
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
});

const {reducer: movieReducer, actions:{getPage}} = movieSlice;

const movieActions ={
    getAll,
    getByGenre,
    search,
    getPage,
    getTrailer
}

export {movieReducer, movieActions};