import {GET_GENRES,GET_SELECTED_GENRE,SET_SELECTED_GENRE} from '../constants'

export const getGenres=()=>(dispatch)=>{
    dispatch({type:GET_GENRES})
}

export const getSelectedGenre=()=>(dispatch)=>{
    dispatch({type:GET_SELECTED_GENRE})
}

export const setSelctedGenre=(selectedGenre)=>(dispatch)=>{
    dispatch({type:SET_SELECTED_GENRE,payload:selectedGenre})
}

