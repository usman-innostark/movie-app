import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Movie from './components/Movie'
import { useSelector,useDispatch } from 'react-redux'
import {fetchMovies} from '../../store/actions/moviesActions'

const Movies = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchMovies())
    },[])
    const movies=useSelector((state)=>state.movies.data)
   
  return (
    <div>
    {
      movies.map((movie,idx)=>(
        <Box sx={{ display: 'flex',justifyContent:'space-between'}}>
          <Movie title={movie.title} description={movie.description} imgUrl={movie.poster.url}/>
        </Box>
      ))
    }
    </div>
  )
}

export default Movies