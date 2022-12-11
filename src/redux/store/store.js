import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, themeReducer} from "../slices";


const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    themeReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
});


export {
    setupStore
};