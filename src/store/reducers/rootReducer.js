import { combineReducers } from "redux";
import moviesReducer from './moviesReducer'
import toggleNavReducer from "./toggleNavReducer";
import offlineMoviesReducer from "./offlineMoviesReducer";
import genreReducer from "./genreReducer";

const rootReducer = combineReducers({ 
  movies:moviesReducer,
  navbar:toggleNavReducer,
  offlineMovies:offlineMoviesReducer,
  genre:genreReducer
});

export default rootReducer;
