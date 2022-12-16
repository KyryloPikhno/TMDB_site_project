import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, themeReducer, tvShowReducer} from "../slices";


const rootReducer = combineReducers({
    movieReducer,
    tvShowReducer,
    genreReducer,
    themeReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});


export {
    setupStore
};