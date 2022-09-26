import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PathNameProvider, UserDataProvider, UseUserDataContext } from './contexts/UserDataContext';
import { AddFoodOpenModalProvider } from './contexts/AddFoodOpenModal';
import { FoodsDataContextProvider } from './contexts/FoodsDataContext';
import { IsSignInContextProvider } from './contexts/IsSignInContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDataProvider>
      <IsSignInContextProvider>
        <AddFoodOpenModalProvider>
          <FoodsDataContextProvider>
            <App />
          </FoodsDataContextProvider>
        </AddFoodOpenModalProvider>
      </IsSignInContextProvider>
    </UserDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
