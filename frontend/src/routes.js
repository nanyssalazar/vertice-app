import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* CAMBIAR DESPUES POR RESPECTIVOS COMPONENTES */}
        <Route path="/eventos" element={<LandingPage />} />
        <Route path="/perfil" element={<LandingPage />} />
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
