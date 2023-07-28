import React, { useEffect, useState } from 'react';
import { firestore } from '../../../../config/firebase';

const RecebidoView = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const contaReceberRef = firestore.collection('ContasAReceber');
        const contaReceberSnapshot = await contaReceberRef.get();
        const contaReceberData = contaReceberSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          dataPagamento: doc.data().dataPagamento ? doc.data().dataPagamento.toDate().toISOString().substring(0,10) : '', // para formatar data
        }));
        setDados(contaReceberData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Colaborador</th>
          <th scope="col">Descrição</th>
          <th scope="col">Método de Pagamento</th>
          <th scope="col">Parcelado</th>
          <th scope="col">Valor</th>
          <th scope="col">Quantidade de Parcelas</th>
          <th scope="col">Data do Pagamento</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.colaborador}</td>
            <td>{item.descricao}</td>
            <td>{item.metodoPagamento}</td>
            <td>{item.parcelado ? 'Sim' : 'Não'}</td>
            <td>{item.valor}</td>
            <td>{item.quantidadeParcelas}</td>
            <td>{item.dataPagamento}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecebidoView;
