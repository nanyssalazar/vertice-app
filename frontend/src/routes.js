import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Events from './pages/Events';
import Members from './pages/Members';
import NewEvent from './pages/NewEvent';
import Assistances from './pages/Assistances';
import Perfil from './pages/Perfil';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/asistencias" element={<Assistances />} />
        <Route path="/mi-perfil" element={<Perfil />} />
        <Route path="/members" element={<Members />} />
        <Route path="/new-event" element={<NewEvent />} />
      </Routes>
    </BrowserRouter>
  );
};
