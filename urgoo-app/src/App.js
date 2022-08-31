import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import { MovieInfo } from './component/Movie';
import Form from './component/form';
import { Table } from './component/Table';
import Navbar from './component/Navbar';
import { Login } from './component/Login';
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
          </Routes>
      </div>
        
    </Router>
  )
} 