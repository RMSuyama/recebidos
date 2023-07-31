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
            const date = new Date(curr.dataPagamento).setHours(0,0,0,0);
            if (!acc[date]) {
              acc[date] = 0;
            }
            acc[date] += parseFloat(curr.valor);
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
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: function(value) {
          return `R$ ${value.toFixed(2)}`;
        }
      },
      tooltip: {
        enabled: true,
        formatter: function(value) {
          return `R$ ${value.toFixed(2)}`;
        }
      },
    },
    colors: ['#008FFB', '#FF4560'],
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      x: {
        format: 'dd/MM/yyyy'
      },
    },
  };
  

  return (
    <div className="card p-5">
      <div className="card-body">
        <h2 className='text-center' style={{fontWeight:'bold'}}>Análise de Fluxo de Dinheiro</h2>
        <ApexChart options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
}

export default CartChart;
