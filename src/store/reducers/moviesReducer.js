import {
  MOVIES_FETCH_LOADING,
  MOVIES_FETCH_FAIL,
  MOVIES_FETCH_SUCCESS,
  FILTER_MOVIES
} from "../constants";

const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MOVIES_FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Error while loading movies",
      };
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        data:action.payload
      }
    default:
      return state;
  }
};

export default moviesReducer