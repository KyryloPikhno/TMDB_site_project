import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tvShowService} from "../../services";


const initialState = {
    tvShows: [],
    tvShowTrailer: {},
    popularTVShows: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
};

const getAll = createAsyncThunk(
    'tvShowSlice/getAll',
    async ({page, genre, sort}, {rejectWithValue}) => {
        try {
            const {data} = await tvShowService.getAll(page, genre, sort)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'tvShowSlice/search',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await tvShowService.search(page, query)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getTrailer = createAsyncThunk(
    'tvShowsSlice/getTrailer',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await tvShowService.getTrailer(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

// const getPopularTvShows = createAsyncThunk(
//     'tvShowSlice/getPopularTvShows',
//     async (_, {rejectWithValue}) => {
//         try {
//             const {data} = await tvShowService.getPopularMovies()
//             return data
//         } catch (e) {
//             return rejectWithValue(e.response.data)
//         }
//     }
// );


const tvShowSlice = createSlice({
    name: 'tvShowSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.tvShows = action.payload.results
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
                state.tvShows = action.payload.results
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
                state.tvShowTrailer = action.payload
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

const {reducer: tvShowReducer, actions:{getPage}} = tvShowSlice;

const tvShowActions ={
    getAll,
    search,
    getPage,
    getTrailer
}

export {tvShowReducer, tvShowActions};