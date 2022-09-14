import { styled } from '@mui/material/styles'
import { NavBar } from './component/Navbar';
import { Order } from "./component/Order";
import { CustomTheme } from './style/theme';



function App() {

  return (
    <CustomTheme>
      <NavBar/>
    </CustomTheme>
    
  );
}

export default App;
