import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState ={
    genres:[],
    error:null,
    loading: false
}

const getAll = createAsyncThunk(

)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{}
})