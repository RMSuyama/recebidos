import React, { useEffect, useState } from 'react';
import { firestore } from '../../../../config/firebase';

const CPagarView = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const carteiraRef = firestore.collection('carteira');
        const carteiraSnapshot = await carteiraRef.get();
        const carteiraData = carteiraSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDados(carteiraData);
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
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.first}</td>
            <td>{item.last}</td>
            <td>{item.handle}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CPagarView;
