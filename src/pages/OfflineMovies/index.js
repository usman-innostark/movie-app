import React,{useEffect} from 'react'
import { fetchOfflineMovies } from '../../store/actions/offlineMoviesActions'
import { useSelector, useDispatch } from "react-redux";

const OfflineMovies = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOfflineMovies());
  }, []);
  const movies = useSelector((state) => state.offlineMovies.data);
  console.log(movies)
  return (
    <div>
        {
            movies.map((movie)=><p>{movie.title}</p>)
        }
    </div>
  )
}

export default OfflineMovies