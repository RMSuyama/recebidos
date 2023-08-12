import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import AtualizaMon from "../pages/side/AtualizaMonetaria";
import Calcprescri from "../pages/side/Calculo de Prescrição";

function ProtectedRoute({ children }) {
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

  return authenticated ? children : <Navigate to="/" />;
}

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginP />} exact />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/carteira" element={<ProtectedRoute><Carteira /></ProtectedRoute>} />
        <Route path="/colaboradores" element={<ProtectedRoute><Colaboradores /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/suporte" element={<ProtectedRoute><Suporte /></ProtectedRoute>} />
        <Route path="/calculadora" element={<ProtectedRoute><Calculadora /></ProtectedRoute>} />
        <Route path="/editar-colaborador/:id" element={<ProtectedRoute><EditarColaborador /></ProtectedRoute>} />
        <Route path="/calcfp" element={<ProtectedRoute><CalcFP /></ProtectedRoute>} />
        <Route path="/geradorproc" element={<ProtectedRoute><GeradorProc /></ProtectedRoute>} />
        <Route path="/duedilligence" element={<ProtectedRoute><DueDilligence /></ProtectedRoute>} />
        <Route path="/atualizamon" element={<ProtectedRoute><AtualizaMon /></ProtectedRoute>} />
        <Route path="/calcprescricao" element={<ProtectedRoute><Calcprescri /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default Rotas;
