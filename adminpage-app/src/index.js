import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PathNameProvider } from './contexts/PathNameContext';
import { AddFoodOpenModalProvider } from './contexts/AddFoodOpenModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddFoodOpenModalProvider>
        <PathNameProvider>
          <App />
        </PathNameProvider>
    </AddFoodOpenModalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
