import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer : null,
    trendingMovies : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrailer : (state, action) => {
        state.trailer = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addTrendingMovies, addTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
