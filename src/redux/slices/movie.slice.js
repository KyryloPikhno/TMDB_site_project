import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies:[],
    loading:false,
    error:null
};


const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const{data} = await  movieService.getAll()
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
})

const {reducer: movieReducer} = movieSlice;

const movieActions ={
    getAll
}

export {movieReducer, movieActions};