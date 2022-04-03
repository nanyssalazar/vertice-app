import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Events from './pages/Events';
import Members from './pages/Members';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/events' element={<Events />} />
        <Route path='/members' element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
};
