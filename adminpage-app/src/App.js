import { Routes, Route } from "react-router-dom";
import { NavBar } from './component/Navbar';
import { Order } from "./component/Order";

function App() {
  return (
      <div>
        <NavBar/>
        {/* <Routes>
          <Route path="/Order" element={<Order/>}>

          </Route>
        </Routes> */}
      </div>
  );
}

export default App;
