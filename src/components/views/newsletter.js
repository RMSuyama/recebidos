import React, { useState } from 'react';
import { firestore } from '../../config/firebase';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se os campos estão vazios
    if (!name.trim() || !email.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const subscriber = {
      name,
      email,
    };

    setError(''); // Limpar mensagem de erro caso tudo esteja preenchido corretamente

    firestore
      .collection('Subscribers')
      .add(subscriber)
      .then(() => {
        console.log('Dados enviados com sucesso!');
        setName('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="card social-card p-4">
      <h6>NEWSLETTER</h6>
      <h5>Se inscreva em nossa Newsletter e receba atualizações e notícias exclusivas!</h5>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="mb-2">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Nome</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></textarea>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">Endereço de e-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nome@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <button type="submit" className="btn btn-outline-danger">Inscrever</button>
    </form>
  );
};

export default Newsletter;
