import {
  ADD_MOVIE_FAIL,
  ADD_MOVIE_LOADING,
  ADD_MOVIE_SUCCESS,
  FETCH_OFFLINE_MOVIES,
} from "../constants";

export const fetchOfflineMovies = () => (dispatch) => {
  dispatch({ type: FETCH_OFFLINE_MOVIES });
};

export const addOfflineMovie = (movies,data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_MOVIE_LOADING });
    const newMoviesList=[...movies,data]
    dispatch({ type: ADD_MOVIE_SUCCESS, payload: newMoviesList });
  } catch (err) {
    dispatch({ type: ADD_MOVIE_FAIL });
  }
};

