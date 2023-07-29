import React, { useState, useEffect } from 'react';
import { firestore } from '../../../../config/firebase';
import firebase from '../../../../config/firebase';
const RegistroDespesas = () => {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [error, setError] = useState('');

  // Talvez você queira manter a função para obter colaboradores, caso eles estejam relacionados às despesas

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (!valor || !descricao || !dataPagamento) {
      const missingFields = [];
      if (!valor) missingFields.push('Valor');
      if (!descricao) missingFields.push('Descrição');
      if (!dataPagamento) missingFields.push('Data do Pagamento');

      setError(`Por favor, preencha os seguintes campos obrigatórios: ${missingFields.join(', ')}`);
      return;
    }

    setError(''); // Limpar mensagem de erro caso tudo esteja preenchido corretamente

    try {
      // Envie os dados para o Firebase
      const contaPagarRef = firestore.collection('ContasAPagar'); // Aqui usamos uma coleção diferente para contas a pagar
      const registro = {
        descricao: descricao,
        dataPagamento: dataPagamento,
        valor: parseFloat(valor),
        dataInsercao: firebase.firestore.FieldValue.serverTimestamp(), // Aqui está a adição
      };

      await contaPagarRef.add(registro);

      // Limpe o estado dos campos após o envio bem-sucedido
      setValor('');
      setDescricao('');
      setDataPagamento('');

      // Exiba uma mensagem de sucesso ou redirecione o usuário para outra página
      alert('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setError('Erro ao enviar os dados. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card social-card p-5">
      <h6>REGISTRO DE SAÍDAS</h6>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="mb-2">
        <label htmlFor="valor" className="form-label">Valor</label>
        <input
          type="number"
          className="form-control"
          id="valor"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="descricao" className="form-label">Descrição</label>
        <input
          type="text"
          className="form-control"
          id="descricao"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="dataPagamento" className="form-label">Data do Pagamento</label>
        <input
          type="date"
          className="form-control"
          id="dataPagamento"
          value={dataPagamento}
          onChange={(e) => setDataPagamento(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-outline-danger">Registrar</button>
    </form>
  );
  
};

export default RegistroDespesas;
