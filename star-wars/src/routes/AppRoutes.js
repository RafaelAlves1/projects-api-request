import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from '../Page/Details/Details';
import Home from '../Page/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Details />} />
    </Routes>
  );
};

export default AppRoutes;
