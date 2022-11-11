import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';

import './global.css';
import NavBar from './components/NavBar/NavBar';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
