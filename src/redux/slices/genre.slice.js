import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    currentGenres: []
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
        getCurrentGenres: (state, action)=> {
            state.currentGenres = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
});

const {reducer: genreReducer, actions:{getCurrentGenres}} = genreSlice;

const genreActions = {
    getAll,
    getCurrentGenres
};

export {
    genreActions,
    genreReducer
};