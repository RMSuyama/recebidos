import React, { useState } from 'react';
import ProcuracaoView from './myComponent'  
const ProcuracaoForm = () => {
  const [nome, setNome] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [profissao, setProfissao] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    console.log(nome, nacionalidade, estadoCivil, profissao, rg, cpf, endereco)
    return <ProcuracaoView 
      nome={nome}
      nacionalidade={nacionalidade}
      estadoCivil={estadoCivil}
      profissao={profissao}
      rg={rg}
      cpf={cpf}
      endereco={endereco}
    />;
  }

  return (
<form onSubmit={handleSubmit} className="card p-5 form-group">
  <label>
    Nome:
    <input type="text" value={nome} onChange={e => setNome(e.target.value)} className="form-control" required/>
  </label>
  <label>
    Nacionalidade:
    <input type="text" value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} className="form-control" required/>
  </label>
  <label>
    Estado Civil:
    <input type="text" value={estadoCivil} onChange={e => setEstadoCivil(e.target.value)} className="form-control" required/>
  </label>
  <label>
    Profissão:
    <input type="text" value={profissao} onChange={e => setProfissao(e.target.value)} className="form-control" required/>
  </label>
  <label>
    RG:
    <input type="text" value={rg} onChange={e => setRg(e.target.value)} className="form-control" required/>
  </label>
  <label>
    CPF:
    <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} className="form-control" required/>
  </label>
  <label>
    Endereço:
    <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} className="form-control" required/>
  </label>
  <input type="submit" value="Gerar Procuração" className="btn btn-primary" />
</form>

  );
};

export default ProcuracaoForm;
