import React, { useState } from 'react';
import '../login/Login.css';

import firebase from '../../../config/firebase';
import 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function LoginUsuario() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(function (firebaseUser) {
        setLoggedIn(true);
        // sucesso
        window.location.href = '/home'; // Redireciona para a rota /home
      })
      .catch(function (error) {
        alert(error);
        // erro
      });
  }

  function alterarEmail(event) {
    setEmail(event.target.value);
  }

  function alterarSenha(event) {
    setSenha(event.target.value);
  }

  return (
    <div className="cardLog text-center">
      <div className="SPRT">SPRT - Sistema Planejamento e Recuperação Tributária</div>      
      <div className="cardLog-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="true" href="#">
              Login
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Novo Cadastro
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Esqueci a senha
            </a>
          </li>
        </ul>
      </div>

      <div className="cardLog-body">
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
        <button className="btn btn-outline-success" type="submit" onClick={LoginUsuario}>
          Acessar
        </button>
      </div>
    </div>
  );
}

export default Login;
