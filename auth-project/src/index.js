import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
      <CssBaseline />
    </BrowserRouter>
  </React.StrictMode>,
);
