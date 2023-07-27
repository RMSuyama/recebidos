import React, { useState } from 'react';
import { firestore } from '../../../config/firebase';

const FormColaborador = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (!nome.trim() || !email.trim() || !cargo.trim() || !telefone.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const colaborador = {
      nome,
      email,
      cargo,
      telefone,
    };

    setError(''); // Limpar mensagem de erro caso tudo esteja preenchido corretamente

    // Enviar os dados do colaborador para o Firestore
    firestore
      .collection('Colaboradores')
      .add(colaborador)
      .then(() => {
        console.log('Colaborador cadastrado com sucesso!');
        setNome('');
        setEmail('');
        setCargo('');
        setTelefone('');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar o colaborador:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <h6>CADASTRO DE COLABORADOR</h6>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="mb-2">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input
          type="text"
          className="form-control"
          id="nome"
          placeholder="Nome do colaborador"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label">E-mail</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="E-mail do colaborador"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="cargo" className="form-label">Cargo</label>
        <input
          type="text"
          className="form-control"
          id="cargo"
          placeholder="Cargo do colaborador"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="telefone" className="form-label">Telefone</label>
        <input
          type="tel"
          className="form-control"
          id="telefone"
          placeholder="Telefone do colaborador"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-outline-danger">Cadastrar</button>
    </form>


  );
};

export default FormColaborador;
