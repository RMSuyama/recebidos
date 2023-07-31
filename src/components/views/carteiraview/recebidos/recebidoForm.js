import React, { useEffect, useState } from 'react';
import { firestore } from '../../../../config/firebase';
import firebase from '../../../../config/firebase';

const RecebidoForm = () => {
  const [colaborador, setColaborador] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [dataPagamento, setDataPagamento] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [parcelado, setParcelado] = useState(false);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(1);
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    const fetchColaboradores = async () => {
      const colaboradoresRef = firestore.collection('Colaboradores');
      const colaboradoresSnapshot = await colaboradoresRef.get();
      const colaboradoresData = colaboradoresSnapshot.docs.map(doc => doc.data().nome);
      setColaboradores(colaboradoresData);
    };

    fetchColaboradores();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Converte os valores para os tipos corretos
    const valorFloat = parseFloat(valor);
    const parcelasInt = parseInt(quantidadeParcelas, 10);
    const isParcelado = parcelado === "true" ? true : false;
    
    const valoresParcelasArray = isParcelado ? 
      Array(parcelasInt).fill(valorFloat / parcelasInt) : 
      [valorFloat];
  
    const contaReceberRef = firestore.collection('ContasAReceber');
  
    try {
      await contaReceberRef.add({
        colaborador,
        descricao,
        valor: valorFloat,
        dataPagamento: new Date(dataPagamento).toISOString().split('T')[0],
        metodoPagamento,
        parcelado: isParcelado,
        quantidadeParcelas: parcelasInt,
        valoresParcelas: valoresParcelasArray,
        dataInsercao: firebase.firestore.FieldValue.serverTimestamp(),
        dataVencimentoPrimeiraParcela: "", // Atualize este valor conforme necessário
      });
  
      // Clear the form fields
      setColaborador('');
      setDescricao('');
      setValor('');
      setDataPagamento('');
      setMetodoPagamento('');
      setParcelado(false);
      setQuantidadeParcelas(1);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="colaborador" className="form-label">Colaborador</label>
        <select className="form-select" id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} required>
          <option value="">Selecione um colaborador...</option>
          {colaboradores.map((colab, index) => (
            <option key={index} value={colab}>{colab}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="descricao" className="form-label">Descrição</label>
        <input type="text" className="form-control" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="valor" className="form-label">Valor</label>
        <div className="input-group">
          <span className="input-group-text">R$</span>
          <input type="number" step="0.01" className="form-control" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="dataPagamento" className="form-label">Data de Pagamento</label>
        <input type="date" className="form-control" id="dataPagamento" value={dataPagamento} onChange={(e) => setDataPagamento(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="metodoPagamento" className="form-label">Método de Pagamento</label>
        <input type="text" className="form-control" id="metodoPagamento" value={metodoPagamento} onChange={(e) => setMetodoPagamento(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="parcelado" className="form-label">Parcelado</label>
        <select className="form-select" id="parcelado" value={parcelado} onChange={(e) => setParcelado(e.target.value === "true" ? true : false)} required>
          <option value="false">Não</option>
          <option value="true">Sim</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="quantidadeParcelas" className="form-label">Quantidade de Parcelas</label>
        <input type="number" min="1" className="form-control" id="quantidadeParcelas" value={quantidadeParcelas} onChange={(e) => setQuantidadeParcelas(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RecebidoForm;
