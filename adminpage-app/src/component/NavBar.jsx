import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Divider, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export const NavBar = () => {
  
  return (
    <Box >
      <Stack direction="row" spacing={3}  justifyContent="space-between">
        <Box flex={2} p={2} > Захиалга
          {/* <TextField
            id="date"
            label="date"
            type="date"
            defaultValue="2017-05-24"
            // InputLabelProps={{
            //   shrink: true,
            // }}
          /> */}
        </Box>
        <Box flex={4} p={2} sx={{display:{xs:"none", sm:"block"}}}></Box>
        <Box flex={2} p={2} sx={{display:'flex', gap:'20px', alignItems:'center', justifyContent:'space-evenly'}} > 
          <Badge >
            <SearchIcon />
          </Badge>
          <Badge>
            <NotificationsActiveIcon/>
          </Badge>
          <Divider orientation="vertical" />
          <Typography sx={{}}>Г.Мөнхболд</Typography>
          <Avatar sx={{width:'30px', height:'30px'}} src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
        </Box>
      </Stack>
      <Divider/>
    </Box>
  );
};
