import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import { MovieInfo } from './movie';
import Form from './form';
import { Table } from './table';
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/movie" element={<MovieInfo />}>
          </Route>
          <Route path="/form" element={<Form />}>
          </Route>
          <Route path="/table" element={<Table />}>
          </Route>
        </Routes>
    </Router>
  )
}