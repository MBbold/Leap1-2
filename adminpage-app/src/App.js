import { styled } from '@mui/material/styles'
import { NavBar } from './component/Navbar';
import { Order } from "./component/Order";
import { CustomTheme } from './style/theme';



function App() {
  const Mydiv = styled("div")(({ theme }) => ({
    // padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.secondary.light
    }
    // [theme.breakpoints.down("dm")]: {
    //   backgroundColor: theme.palette.primary,
    // },
    // [theme.breakpoints.up("dm")]: {
    //   backgroundColor: theme.palette.secondary,
    // },
  }))
  return (
    <Mydiv>
        <NavBar/>
    </Mydiv>
  );
}

export default App;
