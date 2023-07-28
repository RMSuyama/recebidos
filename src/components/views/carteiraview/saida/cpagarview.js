import React, { useEffect, useState } from 'react';
import { firestore } from '../../../../config/firebase';

const CPagarView = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const contaPagarRef = firestore.collection('ContasAPagar');
        const contaPagarSnapshot = await contaPagarRef.get();
        const contaPagarData = contaPagarSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setDados(contaPagarData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, []);

  // Calcular a soma de todas as saídas
  const totalSaidas = dados.reduce((acc, item) => acc + item.valor, 0);

  return (
    <div className="table-responsive p-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Data do Pagamento</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.descricao}</td>
              <td>R${item.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</td>
              <td>{item.dataPagamento}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">Total</th>
            <td colSpan="2"></td>
            <td style={{backgroundColor:'lightgrey', fontWeight:'bold',}}>
              R${totalSaidas.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CPagarView;
