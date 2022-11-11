import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Agents from '../Pages/Agents/Agents';
import Details from '../Pages/Details/Details';
import Favoritos from '../Pages/Favoritos/Favoritos';
import Home from '../Pages/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agentes" element={<Agents />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/detalhe-agente/:id" element={<Details />} />
    </Routes>
  );
};

export default AppRoutes;
