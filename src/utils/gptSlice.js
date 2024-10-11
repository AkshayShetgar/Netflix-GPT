import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
    },
    reducers : {
        toggleSearchGptView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const {toggleSearchGptView} = gptSlice.actions;

export default gptSlice.reducer;