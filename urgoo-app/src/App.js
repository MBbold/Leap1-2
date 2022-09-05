import './App.css';
// import './Style/Style.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import { MovieInfo } from './component/movie';
import Form from './component/form';
import { Table } from './component/Table';
import Navbar from './component/Navbar';
import { Login } from './component/Login';
import { Profile } from './component/Profile';
// import "./Style/Style.scss"
export default function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Login/>}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/movie" element={<MovieInfo />}>
            </Route>
            <Route path="/form" element={<Form />}>
            </Route>
            <Route path="/table" element={<Table />}>
            </Route>
            <Route path="/profile" element={<Profile />}>
            </Route>
          </Routes>
      </div>
        
    </Router>
  )
} 