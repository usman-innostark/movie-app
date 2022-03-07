import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "../SideNav";
import {FormControl,InputLabel,Input,FormHelperText} from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { filterMovies,fetchMovies } from "../../store/actions/moviesActions";
import { toggleNav } from "../../store/actions/toggleNav";

export default function SearchAppBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");
  const movies = useSelector((state) => state.movies.data);
  const navbarStatus=useSelector((state) => state.navbar.show);
  
  React.useEffect(()=>{
    if(searchText==='') {
        dispatch(fetchMovies())};
  },[searchText])

  
  const onSearchFilter = (e) => {
      e.preventDefault()   
    dispatch(filterMovies(movies,searchText));
  };

  const handleNav=()=>{
    dispatch(toggleNav(navbarStatus))
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SideNav />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleNav}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Movie HD
          </Typography>
          <form onSubmit={onSearchFilter}>
          <FormControl >
            <InputLabel htmlFor="my-input">Search</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={searchText} onChange={e=>setSearchText(e.target.value)} />  
          </FormControl>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
