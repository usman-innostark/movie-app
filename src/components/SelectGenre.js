import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector,useDispatch } from "react-redux";
import { getGenres,setSelctedGenre } from "../store/actions/genreActions";


export default function BasicSelect({ genre }) {
  const genres = useSelector((state) => state.genre.data);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setSelctedGenre(event.target.value))
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: "50px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="genre"
          onChange={handleChange}
        >
          {genres.map((genre,idx)=><MenuItem value={genre} key={idx}>{genre}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
