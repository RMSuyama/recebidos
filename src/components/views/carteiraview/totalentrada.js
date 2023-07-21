import React, { useState, useEffect } from 'react';
import { firestore } from '../../../config/firebase';


const SomaEntradas = () => {
    const [soma, setSoma] = useState(0);
  
    useEffect(() => {
      // Fetch all "recebidos" from Firestore
      const fetchRecebidos = async () => {
        try {
          const recebidosRef = firestore.collection('ContasAReceber');
          const recebidosSnapshot = await recebidosRef.get();
          const recebidosData = recebidosSnapshot.docs.map((doc) => doc.data());
  
          // Calculate the sum of the "valor" field
          const totalSoma = recebidosData.reduce((accumulator, current) => {
            return accumulator + parseFloat(current.valor);
          }, 0);
  
          setSoma(totalSoma);
        } catch (error) {
          console.error('Erro ao obter os recebidos:', error);
        }
      };
  
      fetchRecebidos();
    }, []);
  
    return (
      <div className='card p-4'>
        <h3>Soma das Entradas</h3>
        <p>Total: R$ {soma.toFixed(2)}</p>
      </div>
    );
  };
  
  export default SomaEntradas;
  