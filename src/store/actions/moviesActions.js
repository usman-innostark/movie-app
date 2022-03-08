import axios from "axios";
import {MOVIES_FETCH_FAIL,MOVIES_FETCH_LOADING,MOVIES_FETCH_SUCCESS,FILTER_MOVIES} from '../constants'

export const fetchMovies=(genre)=> async (dispatch)=>{
    try{
        dispatch({type:MOVIES_FETCH_LOADING})
        const res=await axios.get(`http://api.filmon.com/api/vod/search?genre=${genre}`)
        
        dispatch({type:MOVIES_FETCH_SUCCESS,payload:res.data.response})
    }
    catch(error){
        dispatch({type:MOVIES_FETCH_FAIL})
    }
}

export const filterMovies=(movies,searchText)=>async(dispatch)=>{
    const filteredMovies=movies.filter((movie)=>movie.title.toLowerCase().includes(searchText.toLowerCase()))
    dispatch({type:FILTER_MOVIES,payload:filteredMovies})
}

