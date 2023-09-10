import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    SET_MOVIES: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { SET_MOVIES } = movieSlice.actions;

// export const selectMovies = (state: any) => state.movie.movies;
export const movieReducer = movieSlice.reducer;
