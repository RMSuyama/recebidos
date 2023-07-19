// Rotas.js
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginP from "../pages/LoginP";

import Home from "../pages/Home";
import Carteira from "../pages/Carteira";
import Colaboradores from "../pages/Colaboradores";
import Dashboard from "../pages/Dashboard";
import Suporte from "../pages/Suporte";
import Privacidade from "../pages/Privacidade";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginP />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/carteira" element={<Carteira />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/privacidade" element={<Privacidade />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;

