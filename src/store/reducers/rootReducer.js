import { combineReducers } from "redux";
import moviesReducer from './moviesReducer'
import toggleNavReducer from "./toggleNavReducer";
import offlineMoviesReducer from "./offlineMoviesReducer";

const rootReducer = combineReducers({ 
  movies:moviesReducer,
  navbar:toggleNavReducer,
  offlineMovies:offlineMoviesReducer
});

export default rootReducer;
