import React,{useEffect} from 'react'
import { fetchOfflineMovies } from '../../store/actions/offlineMoviesActions'
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@mui/material";
import MapMovies from "../../components/MapMovies";
import { Box } from "@mui/material";

const OfflineMovies = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOfflineMovies());
  }, []);
  const movies = useSelector((state) => state.offlineMovies.data);
  if(movies.length==0) return<Typography variant='h2'>No movies found</Typography>
  return (
    <Grid columnSpacing={{ md: 12, sm: 12 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          gap: 2,
        }}
      >
        <MapMovies movies={movies}/>
      </Box>
    </Grid>
  )
}

export default OfflineMovies