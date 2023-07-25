import React, { useState } from 'react';
import '../login/Login.css';
import logo from '../../../../src/static/img/Colorful Artificial Intelligence Logo (1).png'
import firebase from '../../../config/firebase';
import 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function LoginUsuario(event) {
    event.preventDefault();  // Previne o recarregamento da página

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(function (firebaseUser) {
        setLoggedIn(true);
        window.location.href = '/home';
      })
      .catch(function (error) {
        alert(error);
      });
  }

  function alterarEmail(event) {
    setEmail(event.target.value);
  }

  function alterarSenha(event) {
    setSenha(event.target.value);
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header">
              <img src={logo} className="img-fluid" alt="..."></img>
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="true" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <form onSubmit={LoginUsuario}>
                <input
                  onChange={alterarEmail}
                  className="form-control me-2"
                  type="email"
                  placeholder="E-mail"
                  aria-label="E-mail"
                />
                <input
                  onChange={alterarSenha}
                  className="form-control me-2"
                  type="password"
                  placeholder="Senha"
                  aria-label="Senha"
                />
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                >
                  Acessar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
