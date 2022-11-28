import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    currentGenre:null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response?.data);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        getCurrentGenre: (state, action)=> {
            state.currentGenre = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
});

const {reducer: genreReducer, actions:{getCurrentGenre}} = genreSlice;

const genreActions = {
    getAll,
    getCurrentGenre
};

export {
    genreActions,
    genreReducer
};