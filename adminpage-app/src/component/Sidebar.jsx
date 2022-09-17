import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import { LogoSvg } from "./Logo";
import { Avatar, Divider } from "@mui/material";
import { Order } from "../pages/Order";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FoodMenu } from "../pages/Menu";
import { Graphic } from "../pages/Graphic";
import { Configuration } from "../pages/Settings";

const drawerWidth = 258;
export const Sidebar = () => {
  
  let menuIcons = [
    <AssignmentOutlinedIcon />,
    <SignalCellularAltIcon />,
    <SettingsIcon />,
    <RestaurantMenuRoundedIcon />,
  ];
  let sideBarItems = [
    { name: "Захиалга", pathName: "order" },
    { name: "График", pathName: "graphic" },
    { name: "Тохиргоо", pathName: "configuration" },
    { name: "Меню", pathName: "menu" },
  ];
  return (
    // <Router>
    <Box sx={{display:{xs:"none", sm:"flex"}}}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000723",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          sx={{
            display: "flex",
            width: "100%",
            height: "100px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LogoSvg />
        </Typography>
        <List sx={{ color: "white.main" }}>
          {sideBarItems.map((text, index) => (
            <ListItem key={text.name} disablePadding>
              <ListItemButton >
                <ListItemIcon sx={{ color: "white.main" }}>
                  {menuIcons[index]}
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/${text.pathName}`}
                >
                  {text.name}{" "}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
    // </Router>
  );
};
