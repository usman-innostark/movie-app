import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Movie from "./components/Movie";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../store/actions/moviesActions";
import { Grid } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const movies = useSelector((state) => state.movies);

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
        {movies.data.map((movie, idx) => (
          <Movie
            title={movie.title}
            description={movie.description}
            imgUrl={movie.poster.url}
            key={idx}
          />
        ))}
      </Box>
    </Grid>
  );
};

export default Movies;
