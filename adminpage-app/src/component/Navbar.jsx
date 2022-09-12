import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import { LogoSvg } from './Logo';
import { useState } from 'react';
import { Avatar } from '@mui/material';
// import {Link} from '@mui/material';
import {Link} from 'react-router';

const drawerWidth = 258;
let menuIcons = [<AssignmentOutlinedIcon/>, <SignalCellularAltIcon/>, <SettingsIcon/>, <RestaurantMenuRoundedIcon/>]
export const NavBar = ()=>{
    const [count, setCount]=useState(0)
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
            >
        <Toolbar sx={{backgroundColor:'#FFF', color:'#000', display:'flex', justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap component="div">
            Захиалга
          </Typography>
          <Typography variant="body1" noWrap component="div">
            Г.Болд
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src=""
            sx={{ width: 24, height: 24 }}
            />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#000723'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography sx={{display:'flex', width:'100%', height:'100px', alignItems:'center', justifyContent:'center'}}>
            <LogoSvg />
        </Typography>
        <List sx={{color:'#FFFF'}}>
          {['Order', 'График', 'Тохиргоо', 'Меню'].map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemIcon sx={{color:'#FFFF'}}>
                  {menuIcons[index]}
                </ListItemIcon>
                {/* <ListItemText primary={text} /> */}
                <Link style={{textDecoration:'none',color:'white'}} to={`/${text}`}>{text} </Link>
                {/* <Link  href={`/${text}`} underline="none" sx={{color:'white'}}>{text}</Link> */}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
    )
}