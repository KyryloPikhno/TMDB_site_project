import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentTheme: ''
};


const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        newTheme: (state, action) => {
            state.currentTheme = action.payload
        }
    }
});


const {reducer: themeReducer, actions:{newTheme}} = themeSlice;

const themeActions = {
    newTheme
};

export {
    themeReducer,
    themeActions
};
