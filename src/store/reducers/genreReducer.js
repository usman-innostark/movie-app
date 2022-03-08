import {
  GET_GENRES,
  SET_SELECTED_GENRE,
  GET_SELECTED_GENRE,
} from "../constants";

const defaultState = {
  data: ["sports", "music", "action"],
  selected: "sports",
};

const genreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return {
        genres: state.genres,
      };
    case GET_SELECTED_GENRE:
      return {
          ...state
      };
    case SET_SELECTED_GENRE:
        return{
            ...state,
            selected:action.payload
        }
    default:
      return state;
  }
};

export default genreReducer;
