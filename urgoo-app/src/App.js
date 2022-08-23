import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import { MovieInfo } from './component/movie';
import Form from './component/form';
import { Table } from './component/table';
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