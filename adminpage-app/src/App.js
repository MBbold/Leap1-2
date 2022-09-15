import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { SingUp } from "./pages/Singup";
import { CustomTheme } from './style/theme';



function App() {

  return (
    <Router>
      <AuthProvider>
        <CustomTheme>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SingUp/>}/>
          </Routes>
        </CustomTheme>

      </AuthProvider>

    </Router>

  );
}

export default App;
