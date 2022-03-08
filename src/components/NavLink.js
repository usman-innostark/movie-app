import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const NavLink = ({icon,to,text}) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText secondary={text} />
      </ListItem>
    </Link>
  );
};

export default NavLink;
