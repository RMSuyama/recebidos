import React, { useEffect, useState } from 'react';
import ApexChart from "react-apexcharts";
import { firestore } from '../../../config/firebase';

const ChartLucro = () => {
  const [series, setSeries] = useState([{
    data: [],
  }]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const contasRef = firestore.collection('ContasAReceber');
        const contasSnapshot = await contasRef.get();
        const contasData = contasSnapshot.docs.map((doc) => ({
          x: new Date(doc.data().dataEntrada.toDate()), // assumindo que dataEntrada é um objeto Timestamp do Firestore
          y: [doc.data().valor], // valor como exemplo
        }));
        setSeries([{ data: contasData }]);
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
    title: {
      text: "Análise de Entradas de Dinheiro",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="card p-5">
      <ApexChart options={options} 
      series={series} 
      type="line" 
      height={350} />
    </div>
  );
}

export default ChartLucro;
