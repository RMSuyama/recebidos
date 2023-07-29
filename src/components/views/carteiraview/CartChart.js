import React, { useEffect, useState } from 'react';
import ApexChart from "react-apexcharts";
import { firestore } from '../../../config/firebase';

const CartChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Entradas",
      data: []
    },
    {
      name: "Saídas",
      data: []
    }
  ]);

  const [totals, setTotals] = useState({ entradas: 0, saidas: 0 });

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const entradasRef = firestore.collection('ContasAReceber');
        const entradasSnapshot = await entradasRef.get();
        const entradas = entradasSnapshot.docs.map((doc) => doc.data());
    
        const saidasRef = firestore.collection('ContasAPagar');
        const saidasSnapshot = await saidasRef.get();
        const saidas = saidasSnapshot.docs.map((doc) => doc.data());
    
        const groupByDate = (arr) => {
          return arr.reduce((acc, curr) => {
            const date = curr.dataInsercao.toDate().setHours(0,0,0,0);
            if (!acc[date]) {
              acc[date] = 0;
            }
            acc[date] += curr.valor;
            return acc;
          }, {});
        }
    
        const entradasByDate = groupByDate(entradas);
        const saidasByDate = groupByDate(saidas);
    
        setSeries([
          {
            name: "Entradas",
            data: Object.entries(entradasByDate)
              .map(([date, value]) => ({ x: new Date(parseInt(date)), y: value }))
              .sort((a, b) => a.x - b.x) // Sort entries by date
          },
          {
            name: "Saídas",
            data: Object.entries(saidasByDate)
              .map(([date, value]) => ({ x: new Date(parseInt(date)), y: -value }))
              .sort((a, b) => a.x - b.x) // Sort entries by date
          }
        ]);
    
        setTotals({
          entradas: Object.values(entradasByDate).reduce((a, b) => a + b, 0),
          saidas: Object.values(saidasByDate).reduce((a, b) => a + b, 0)
        });
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
      text: "Análise de Fluxo de Dinheiro",
      align: "center",
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
      <div className="card-body">
        <ApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
}

export default CartChart;
