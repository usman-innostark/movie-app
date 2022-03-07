import {TOGGLE_NAV} from '../constants'

export const toggleNav=(navbarStatus)=>async(dispatch)=>{
    dispatch({type:TOGGLE_NAV,payload:navbarStatus})
}

