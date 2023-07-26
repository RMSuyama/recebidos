import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import firebase from "../config/firebase";
import "firebase/auth";

import LoginP from "../pages/LoginP";
import Home from "../pages/Home";
import Carteira from "../pages/Carteira";
import Colaboradores from "../pages/Colaboradores";
import Dashboard from "../pages/Dashboard";
import Suporte from "../pages/Suporte";
import Calculadora from "../pages/Calculadora";
import EditarColaborador from "../pages/EditarColab";
import CalcFP from "../pages/CalculadoraFP";

function ProtectedRoute({ element: Component, ...rest }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>


    </div>;
  }

  return authenticated ? <Component {...rest} /> : <Navigate to="/" replace />;
}

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginP />} exact />
        <Route path="/home" element={<ProtectedRoute element={Home} />} />
        <Route path="/carteira" element={<ProtectedRoute element={Carteira} />} />
        <Route path="/colaboradores" element={<ProtectedRoute element={Colaboradores} />} />
        <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
        <Route path="/suporte" element={<ProtectedRoute element={Suporte} />} />
        <Route path="/calculadora" element={<ProtectedRoute element={Calculadora} />} />
        <Route path="/editar-colaborador/:id" element={<ProtectedRoute element={EditarColaborador} />} />
        <Route path="/calcfp" element={<ProtectedRoute element={CalcFP} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
