import React, { useState, useEffect } from 'react';
import { firestore } from '../../../config/firebase';

const Recebido = () => {
  const [valor, setValor] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('pix');
  const [parcelado, setParcelado] = useState(false);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(2); // Default to 2 parcels
  const [dataVencimentoPrimeiraParcela, setDataVencimentoPrimeiraParcela] = useState('');
  const [colaboradores, setColaboradores] = useState([]);
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [error, setError] = useState('');

  // Obter a lista de colaboradores e advogados do Firestore
  useEffect(() => {
    const fetchColaboradores = async () => {
      try {
        const colaboradoresRef = firestore.collection('Colaboradores');
        const colaboradoresSnapshot = await colaboradoresRef.get();
        const colaboradoresData = colaboradoresSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setColaboradores(colaboradoresData);
      } catch (error) {
        console.error('Erro ao obter a lista de colaboradores:', error);
      }
    };

    fetchColaboradores();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (
      !valor ||
      !colaboradorSelecionado ||
      !descricao ||
      !dataPagamento ||
      (parcelado && (!quantidadeParcelas || !dataVencimentoPrimeiraParcela))
    ) {
      const missingFields = [];
      if (!valor) missingFields.push('Valor');
      if (!colaboradorSelecionado) missingFields.push('Colaborador');
      if (!descricao) missingFields.push('Descrição');
      if (!dataPagamento) missingFields.push('Data do Pagamento');
      if (parcelado) {
        if (!quantidadeParcelas) missingFields.push('Quantidade de Parcelas');
        if (!dataVencimentoPrimeiraParcela) missingFields.push('Data de Vencimento da Primeira Parcela');
      }

      setError(`Por favor, preencha os seguintes campos obrigatórios: ${missingFields.join(', ')}`);
      return;
    }

    setError(''); // Limpar mensagem de erro caso tudo esteja preenchido corretamente

    try {
      // Restante do código de envio para o Firebase (não mostrado aqui)

    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card social-card p-4">
      <h6>REGISTRO DE CONTAS A RECEBER</h6>
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
      <div className="mb-2">
        <label htmlFor="metodoPagamento" className="form-label">Método de Pagamento</label>
        <select
          className="form-select"
          id="metodoPagamento"
          value={metodoPagamento}
          onChange={(e) => setMetodoPagamento(e.target.value)}
        >
          <option value="pix">PIX</option>
          <option value="avista">À vista</option>
          <option value="cartaocredito">Cartão de Crédito</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="parcelado" className="form-check-label">Parcelado</label>
        <input
          type="checkbox"
          className="form-check-input"
          id="parcelado"
          checked={parcelado}
          onChange={(e) => setParcelado(e.target.checked)}
        />
      </div>
      {parcelado && (
        <div className="mb-2">
          <label htmlFor="quantidadeParcelas" className="form-label">Quantidade de Parcelas</label>
          <input
            type="number"
            className="form-control"
            id="quantidadeParcelas"
            placeholder="Quantidade de Parcelas"
            value={quantidadeParcelas}
            onChange={(e) => setQuantidadeParcelas(parseInt(e.target.value, 10))}
          />
        </div>
      )}
      {parcelado && (
        <div className="mb-2">
          <label htmlFor="dataVencimentoPrimeiraParcela" className="form-label">Data de Vencimento da Primeira Parcela</label>
          <input
            type="date"
            className="form-control"
            id="dataVencimentoPrimeiraParcela"
            value={dataVencimentoPrimeiraParcela}
            onChange={(e) => setDataVencimentoPrimeiraParcela(e.target.value)}
          />
        </div>
      )}
      <div className="mb-2">
        <label htmlFor="colaboradorSelecionado" className="form-label">Colaborador</label>
        <select
          className="form-select"
          id="colaboradorSelecionado"
          value={colaboradorSelecionado}
          onChange={(e) => setColaboradorSelecionado(e.target.value)}
        >
          <option value="">Selecione um colaborador...</option>
          {colaboradores.map((colaborador) => (
            <option key={colaborador.id} value={colaborador.id}>
              {colaborador.nome}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-outline-secondary">Registrar</button>
    </form>
  );
};

export default Recebido;
