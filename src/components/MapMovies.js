import React from "react";
import Movie from "./Movie";
import { Box, Typography } from "@mui/material";

const MapMovies = ({ movies }) => {

  if(movies.length===0) return (<Typography variant="h3">No Movie found</Typography>)
    
  return (
    <>
      {movies.map((movie, idx) => (
        <Movie
          title={movie.title}
          description={movie.description}
          imgUrl={movie.poster?movie.poster.url:''}
          key={idx}
        />
      ))}
    </>
  );
};

export default MapMovies;
