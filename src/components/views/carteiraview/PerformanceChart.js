import React, { useEffect, useState } from 'react';
import { firestore } from '../../../config/firebase';
import ApexChart from "react-apexcharts";

const PerformanceChart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const contasReceberRef = firestore.collection('ContasAReceber');
        let contasReceberSnapshot = await contasReceberRef.get();
        let contasReceberData = contasReceberSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          dataPagamento: new Date(doc.data().dataPagamento)
        }));

        // Grouping data by collaborator
        const colaboradores = Array.from(new Set(contasReceberData.map(item => item.colaborador)));
        
        const groupedData = colaboradores.map(colaborador => {
          const vendasDoColaborador = contasReceberData
            .filter(item => item.colaborador === colaborador)
            .sort((a, b) => a.dataPagamento - b.dataPagamento); // Ordenando por data
          
          return {
            name: colaborador,
            data: vendasDoColaborador.map(venda => ({x: venda.dataPagamento.toISOString().split('T')[0], y: venda.valor}))
          };
        });
        

        setSeries(groupedData);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchDados();
  }, []);

  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    xaxis: {
      type: 'datetime',
      tickPlacement: 'on'
    },
    dataLabels: {
      enabled: false
    },
  };

  return (
    <div className="card p-5">
      <div className="card-body">
        <div className='text-center' style={{fontWeight:'bold'}}>Desempenho dos Funcionários ao Longo do Tempo</div>
        <ApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
}

export default PerformanceChart;
