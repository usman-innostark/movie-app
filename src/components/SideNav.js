import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home'
import MovieIcon from '@mui/icons-material/Movie'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../store/actions/toggleNav";
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function TemporaryDrawer() {
  const dispatch = useDispatch();
  
  const navbarStatus=useSelector((state) => state.navbar.show);
  const handleClickAway = () =>{
    dispatch(toggleNav(true))
  }
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <ClickAwayListener onClickAway={handleClickAway}>
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText secondary={'Home'} />
          </ListItem>
        </Link>
        <Link to="/movies" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MovieIcon />
            </ListItemIcon>
            <ListItemText secondary={'Movies'} />
          </ListItem>
        </Link>
      </List>
    </Box>
    </ClickAwayListener>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={navbarStatus}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
