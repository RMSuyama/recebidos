import React, { useState, useEffect } from 'react';
import { firestore } from '../../../config/firebase';

const Recebido = () => {
  const [valor, setValor] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [parcelado, setParcelado] = useState(false);
  const [quantidadeParcelas, setQuantidadeParcelas] = useState(2); // Default to 2 parcels
  const [dataVencimentoPrimeiraParcela, setDataVencimentoPrimeiraParcela] = useState('');
  const [valoresParcelas, setValoresParcelas] = useState([]); // State to hold the values of each installment
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

  // Calcula os valores de cada parcela com base no valor total e na quantidade de parcelas
  const calcularParcelas = (valorTotal, quantidadeParcelas) => {
    const valorParcela = Math.floor(valorTotal / quantidadeParcelas);
    const valorParcelaExtra = valorTotal % quantidadeParcelas;

    const valores = new Array(quantidadeParcelas).fill(valorParcela);

    // Distribui o valor restante para a primeira parcela
    if (valorParcelaExtra > 0) {
      valores[0] += valorParcelaExtra;
    }

    return valores;
  };

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
      // Calcular os valores das parcelas
      const valorTotal = parseFloat(valor);
      let valores;
      if (parcelado && quantidadeParcelas > 1) {
        valores = calcularParcelas(valorTotal, quantidadeParcelas);
      } else {
        valores = [valorTotal];
      }

      // Envie os dados para o Firebase
      const contaReceberRef = firestore.collection('ContasAReceber');
      const registro = {
        colaborador: colaboradorSelecionado,
        descricao: descricao,
        metodoPagamento: metodoPagamento,
        dataPagamento: dataPagamento,
        parcelado: parcelado,
        valor: valorTotal,
        quantidadeParcelas: quantidadeParcelas,
        dataVencimentoPrimeiraParcela: dataVencimentoPrimeiraParcela,
        valoresParcelas: valores,
      };

      await contaReceberRef.add(registro);

      // Limpe o estado dos campos após o envio bem-sucedido
      setValor('');
      setMetodoPagamento('');
      setParcelado(false);
      setQuantidadeParcelas(2);
      setDataVencimentoPrimeiraParcela('');
      setValoresParcelas([]);
      setColaboradorSelecionado('');
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
          <option value="boleto">Boleto</option>
          <option value="dinheiro">Dinheiro</option>
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
      {parcelado && quantidadeParcelas > 1 && (
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
      {parcelado && quantidadeParcelas > 1 && (
        <>
          <h6>Parcelas</h6>
          <div className="row">
            {valoresParcelas.map((valorParcela, index) => (
              <div className="col" key={index}>
                <div className="mb-2">
                  <label htmlFor={`valorParcela${index}`} className="form-label">
                    Parcela {index + 1}/{quantidadeParcelas}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id={`valorParcela${index}`}
                    placeholder={`Parcela ${index + 1}`}
                    value={valorParcela}
                    onChange={(e) => {
                      const novosValoresParcelas = [...valoresParcelas];
                      novosValoresParcelas[index] = parseInt(e.target.value, 10);
                      setValoresParcelas(novosValoresParcelas);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
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
      <button type="submit" className="btn btn-outline-danger">Registrar</button>
    </form>
  );
  
};

export default Recebido;
