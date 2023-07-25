import React, { useState, useEffect } from 'react';
import { firestore } from '../../../config/firebase';

const Recebidostable = () => {
  const [recebidos, setRecebidos] = useState([]);

  useEffect(() => {
    // Fetch all "recebidos" from Firestore
    const fetchRecebidos = async () => {
      try {
        const recebidosRef = firestore.collection('ContasAReceber');
        const recebidosSnapshot = await recebidosRef.get();
        const recebidosData = recebidosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecebidos(recebidosData);
      } catch (error) {
        console.error('Erro ao obter os recebidos:', error);
      }
    };

    fetchRecebidos();
  }, []);

  return (
    <div className='card p-4'>
      <h3>Lista de Recebidos</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Valor</th>
            <th>Método de Pagamento</th>
            <th>Parcelado</th>
            <th>Quantidade de Parcelas</th>
            <th>Data de Vencimento da Primeira Parcela</th>
            <th>Colaborador</th>
            <th>Data de Inserção</th> {/* Nova coluna */}
          </tr>
        </thead>
        <tbody>
          {recebidos.map((recebido) => (
            <tr key={recebido.id}>
              <td>{recebido.id}</td>
              <td>{recebido.valor}</td>
              <td>{recebido.metodoPagamento}</td>
              <td>{recebido.parcelado ? 'Sim' : 'Não'}</td>
              <td>{recebido.quantidadeParcelas}</td>
              <td>{recebido.dataVencimentoPrimeiraParcela}</td>
              <td>{recebido.colaborador}</td>
              <td>{recebido.dataInsercao}</td> {/* Nova coluna */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recebidostable;
