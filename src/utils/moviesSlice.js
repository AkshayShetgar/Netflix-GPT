import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer : null,
    trendingMovies : null,
    popularMovies : null,
    upcomingMovies : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer : (state, action) => {
        state.trailer = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrendingMovies, addPopularMovies, addUpcomingMovies, addTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;
