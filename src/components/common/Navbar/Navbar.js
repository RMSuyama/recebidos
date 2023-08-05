import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css';
// import logo from '../../../static/img/logos/logosm.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="/home">
          {/* <img src={logo} className="img" alt="..." /> */}
          <h4 className="display-8" id="nome">Sistema de Gestão
          </h4>
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
            <Link className="nav-link" to="/" style={{ color: 'black', textDecoration: 'none' }}>Log-out</Link>            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

