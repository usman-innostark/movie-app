import {
    ADD_MOVIE_FAIL,
    ADD_MOVIE_SUCCESS,
    ADD_MOVIE_LOADING,
    FETCH_OFFLINE_MOVIES
  } from "../constants";
  
  const defaultState = {
    loading: false,
    data: [],
    errorMsg: "",
  };
  
  const offlineMoviesReducer = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_OFFLINE_MOVIES:
        return {
          ...state,
        }
      case ADD_MOVIE_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_MOVIE_FAIL:
        return {
          ...state,
          loading: false,
          errorMsg: "Error while adding movie",
        };
      case ADD_MOVIE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default offlineMoviesReducer