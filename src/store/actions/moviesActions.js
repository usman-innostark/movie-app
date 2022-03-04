import axios from "axios";
import {MOVIES_FETCH_FAIL,MOVIES_FETCH_LOADING,MOVIES_FETCH_SUCCESS} from '../constants'

export const fetchMovies=()=> async (dispatch)=>{
    try{
        dispatch({type:MOVIES_FETCH_LOADING})
        const res=await axios.get('http://api.filmon.com/api/vod/search?genre=sports')
        
        dispatch({type:MOVIES_FETCH_SUCCESS,payload:res.data.response})
    }
    catch(error){
        dispatch({type:MOVIES_FETCH_FAIL})
    }
}