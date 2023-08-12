import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css';

const Navbar = () => {

  function handleLogout() {
    firebase.auth().signOut()
      .then(() => {
        console.log("Usuário deslogado com sucesso");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Erro ao deslogar: ", error);
      });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <h4 className="display-8" id="nome">Sistema de Gestão</h4>
          <h4 className="display-9" id="tagline">Half-Blood Dev™</h4>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/carteira" style={{ color: 'black', textDecoration: 'none' }}>Gestão de Carteira</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/colaboradores" style={{ color: 'black', textDecoration: 'none' }}>Colaboradores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard" style={{ color: 'black', textDecoration: 'none' }}>Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/suporte" style={{ color: 'black', textDecoration: 'none' }}>Suporte ao usuário </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLogout} style={{ color: 'black', textDecoration: 'none' }}>Log-out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
