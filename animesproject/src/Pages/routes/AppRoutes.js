import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MoreAnimes from '../MoreAnimes/MoreAnimes';
import Home from '../Home/Home';
import Details from '../Detail/Details';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="mais-animes" element={<MoreAnimes />} />
      <Route path="/detalhes/:id" element={<Details />} />
    </Routes>
  );
};

export default AppRoutes;
