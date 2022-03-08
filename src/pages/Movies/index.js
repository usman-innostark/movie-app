import React, { useEffect,useState } from "react";
import { Box } from "@mui/material";
import MapMovies from "../../components/MapMovies";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../store/actions/moviesActions";
import { Grid } from "@mui/material";
import { TailSpin } from "react-loader-spinner";
import SelectGenre from '../../components/SelectGenre'

const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const selectedGenre=useSelector((state)=>state.genre.selected)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(selectedGenre));
  }, [selectedGenre]);
  
  if (movies.loading === true) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TailSpin
          height="100"
          width="100"
          color="#1976D2"
          ariaLabel="loading"
        />
      </Box>
    );
  }
  return (
    <Grid columnSpacing={{ md: 12, sm: 12 }}>
      <SelectGenre genre={selectedGenre}/>
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
        <MapMovies movies={movies.data}/>
      </Box>
    </Grid>
  );
};

export default Movies;
