import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoviesDataProvider } from './context/moviesData';
import { MovieProvider } from './context/movieData';
import { UserDataProvider } from './context/UserDataContext';
import { SeatDataProvider } from './context/SeatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <MoviesDataProvider>
      <MovieProvider>
        <UserDataProvider>
          <SeatDataProvider>
            <App />
          </SeatDataProvider>
        </UserDataProvider>
      </MovieProvider>
    </MoviesDataProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
