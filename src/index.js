import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import toast, { Toaster } from 'react-hot-toast';
import reportWebVitals from './reportWebVitals';
import UserContext from './component/context/UserContext';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <UserContext>
       <Toaster />
    <App />
  </UserContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
