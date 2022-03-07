import {
    TOGGLE_NAV
  } from "../constants";
  
  const defaultState = {
    show:false
  };
  
  const toggleNavReducer = (state = defaultState, action) => {
     
    switch (action.type) {
      case TOGGLE_NAV:
        return {
          show:!action.payload,
        };
      default:
        return state;
    }
  };
  
  export default toggleNavReducer