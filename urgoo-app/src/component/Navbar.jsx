// import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Style/NavbarStyle.css'
import { useLoggedUserContext } from '../context/LoggedUserContext';
import homeUrl from "../component/Home"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';

import { styled } from '@mui/material/styles';
// import UserModal from './LoggedUserDataModal';
// import { usePathNameContext } from '../provider/PathNameContext';
// import { useLoggedInContext } from '../provider/LoggedInContext';
// import { useModalToggleContext } from '../provider/ModalToggleContext';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const Navbar = (props) => {
//   const { pathName } = usePathNameContext();
  const [isLoggedIn,  setLoggedIn]   = useState(false);
  const [modalClose, setModalClose ]  = useState(true);
  const {isLoggedUser, setIsLoggedUser} = useLoggedUserContext();
  const style = {
    navBtn:{
      backgroundColor:"black",
      height:'100%',
      padding:'0 20px',
      border:'none',
      borderRadius:"0"
    }
  }
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MB
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <AppBar component="nav"  position='sticky' sx={{background:'black', width:'100vw', }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    // <div className='header'>
      
    //   <div className='navTop'>
    //     <div className='navTopContainer'>
    //       <ul>
    //         <li>
    //           <a href="https://www.facebook.com/">
    //             <img src="https://www.urgoo.mn/Images/mn.png" alt="" />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://www.facebook.com/">
    //             <img src="https://www.urgoo.mn/Images/mn.png" alt="" />
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://www.facebook.com/">
    //             <img src="https://www.urgoo.mn/Images/mn.png" alt="" />
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div  className='nav'>
    //     <div className='logo'>MB IMAX</div>
    //     <div className='labelsContainer'>
    //       <ul>
    //         <Button
    //             variant="contained"
    //             sx={style.navBtn }
    //             href='/Home'
    //           >
    //             Эхлэх
    //         </Button>
    //         <Button
    //             variant="contained"
    //             sx={style.navBtn }
    //             href='/from'
    //           >
    //             Цаг захиалга
    //         </Button>
    //         <Button
    //             variant="contained"
    //             sx={style.navBtn }
    //             href='/Table'
    //           >
    //             Суудал захиалга
    //         </Button>
    //         <Button
    //             variant="contained"
    //             sx={style.navBtn }
    //             href='/'
    //           >
    //             Нэвтрэх
    //         </Button>
    //         <Button
    //             variant="contained"
    //             sx={style.navBtn }
    //             href='/Profile'
    //           >
    //             Профайл
    //         </Button>
    //       </ul>
    //     </div>
    //   </div>
      
    // </div>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Navbar;