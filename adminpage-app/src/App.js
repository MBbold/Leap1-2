import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { Graphic } from "./pages/Graphic";
import { Login } from './pages/Login';
import { FoodMenu } from "./pages/Menu";
import { NavBar } from "./pages/Navbar";
import { Order } from "./pages/Order";
import { Configuration } from "./pages/Settings";
import { SingUp } from "./pages/Singup";
import { CustomTheme } from './style/theme';




function App() {

  return (
    <Router>
      <AuthProvider>
        <CustomTheme>
          <NavBar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SingUp />} />
            <Route path="/order" element={<Order />} />
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="/menu" element={<FoodMenu />} />
          </Routes>
        </CustomTheme>

      </AuthProvider>

    </Router>

  );
}

export default App;
