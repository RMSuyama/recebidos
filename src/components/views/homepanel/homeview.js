import React, { useEffect, useState } from 'react';
import { firestore } from '../../../config/firebase'; 
import MyModal from './mymodal';

const HomeView = () => {
  const [entradaValue, setEntradaValue] = useState(0);
  const [saidaValue, setSaidaValue] = useState(0);
  const mes = new Date().toLocaleString('default', { month: 'long' });

  useEffect(() => {
    const fetchDados = async () => {
      try {
        // Puxa os dados das contas a receber (entradas) e contas a pagar (saídas) do Firestore
        const contasReceberRef = firestore.collection('ContasAReceber');
        const contasPagarRef = firestore.collection('ContasAPagar');

        const contasReceberSnapshot = await contasReceberRef.get();
        const contasPagarSnapshot = await contasPagarRef.get();

        // Calcula a soma de todas as entradas e saídas
        const totalContasReceber = contasReceberSnapshot.docs.reduce((total, doc) => total + doc.data().valor, 0);
        const totalContasPagar = contasPagarSnapshot.docs.reduce((total, doc) => total + doc.data().valor, 0);

        setEntradaValue(totalContasReceber);
        setSaidaValue(totalContasPagar);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, []);

  const entrada = "R$" + entradaValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  const saida = "R$" + saidaValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  const tmes = "R$" + (entradaValue - saidaValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  return (
    <div className="card-group p-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Entrada</h5>
          <h6 className="card-title text-center">{entrada}</h6>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Saídas</h5>
          <h6 className="card-title text-center">{saida}</h6>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Total</h5>
          <h6 className="card-title text-center">Do mês de {mes} {tmes}</h6>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center"><MyModal /></h5>

        </div>
      </div>
    </div>
  );
};

export default HomeView;
