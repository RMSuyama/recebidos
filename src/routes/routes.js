import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import firebase from "../config/firebase";
import "firebase/auth";
import Carteira from "../pages/nav/Carteira";
import Home from "../pages/nav/Home";
import Colaboradores from "../pages/nav/colaboradores/Colaboradores";
import Dashboard from "../pages/nav/Dashboard";
import Suporte from "../pages/nav/Suporte";
import Calculadora from "../pages/side/Calculadora";
import EditarColaborador from "../pages/nav/colaboradores/EditarColab";
import CalcFP from "../pages/side/CalculadoraFP";
import GeradorProc from "../pages/side/GeradorProc";
import LoginP from "../pages/LoginP";
import DueDilligence from "../pages/side/duedilligence";


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
<div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
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
        <Route path="/geradorproc" element={<ProtectedRoute element={GeradorProc} />} />
        <Route path="/duedilligence" element={<ProtectedRoute element={DueDilligence} />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
