import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    moviesByGenre:[],
    loading:false,
    error:null,
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


const getByGenre = createAsyncThunk(
    'movieSlice/getByGenre',
    async ({genreName},{rejectWithValue})=>{
        try {
            const{data} = await  movieService.getAll(genreName)
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice= createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.error = null
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending,(state,action)=>{
                state.loading= true
                state.error = null
            })
            .addCase(getByGenre.fulfilled, (state, action) => {
                state.moviesByGenre = action.payload
                state.error = null
                state.loading = false
            })
            .addCase(getByGenre.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getByGenre.pending,(state,action)=>{
                state.loading= true
                state.error = null
            })
})

const {reducer: movieReducer, actions:{}} = movieSlice;

const movieActions ={
    getAll,
    getByGenre
}

export {movieReducer, movieActions};