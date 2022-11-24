import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    movies:[],
    loading:false,
    error:null
};

const movieSlice= createSlice({
    name:'movieSlice',
    initialState,
    reducers:{}
})

const {reducer: movieReducer, actions: {},} = movieSlice;

const movieActions ={

}

export {movieReducer, movieActions, movieSlice};