import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import { OfflinePin, Publish } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../store/actions/toggleNav";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import NavLink from "./NavLink";

export default function TemporaryDrawer() {
  const dispatch = useDispatch();

  const navbarStatus = useSelector((state) => state.navbar.show);
  const handleClickAway = () => {
    dispatch(toggleNav(true));
  };
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
          {[
            { icon: <HomeIcon />, path: "/", text: "Home" },
            { icon: <MovieIcon />, path: "/movies", text: "Movies" },
            { icon: <Publish />, path: "/add-movies", text: "Add Movies" },
            {
              icon: <OfflinePin />,
              path: "/offline-movies",
              text: "Offline Movies",
            },
          ].map((route,idx) => {
            return (
              <NavLink icon={route.icon} to={route.path} text={route.text} key={idx} />
            );
          })}
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
